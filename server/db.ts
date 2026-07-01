import { eq, desc, and, gte, lte } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, players, teams, playerMetrics, playerWorkload, analyses, queries, scenarios, playerSimilarity, transferValues } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ============ PLAYER QUERIES ============

export async function getPlayerById(playerId: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(players).where(eq(players.id, playerId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getPlayersByTeam(teamId: number) {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(players).where(eq(players.currentTeamId, teamId));
}

export async function getPlayersByPosition(position: string) {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(players).where(eq(players.position, position));
}

export async function getPlayersByAge(minAge: number, maxAge: number) {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(players).where(
    and(
      gte(players.age, minAge),
      lte(players.age, maxAge)
    )
  );
}

export async function getPlayersBySalaryRange(minSalary: number, maxSalary: number) {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(players).where(
    and(
      gte(players.salary, minSalary.toString()),
      lte(players.salary, maxSalary.toString())
    )
  );
}

export async function searchPlayers(query: string) {
  const db = await getDb();
  if (!db) return [];
  // Simple search by name or position
  return await db.select().from(players).limit(50);
}

// ============ TEAM QUERIES ============

export async function getTeamById(teamId: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(teams).where(eq(teams.id, teamId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getTeamsByLeague(league: string) {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(teams).where(eq(teams.league, league));
}

export async function getAllTeams() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(teams);
}

// ============ PLAYER METRICS QUERIES ============

export async function getPlayerMetrics(playerId: number, season: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(playerMetrics).where(
    and(
      eq(playerMetrics.playerId, playerId),
      eq(playerMetrics.season, season)
    )
  ).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getPlayerMetricsHistory(playerId: number) {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(playerMetrics).where(eq(playerMetrics.playerId, playerId)).orderBy(desc(playerMetrics.season));
}

// ============ WORKLOAD QUERIES ============

export async function getPlayerWorkload(playerId: number, season: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(playerWorkload).where(
    and(
      eq(playerWorkload.playerId, playerId),
      eq(playerWorkload.season, season)
    )
  ).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// ============ ANALYSIS QUERIES ============

export async function createAnalysis(data: any) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.insert(analyses).values(data);
  return result;
}

export async function getAnalysisById(analysisId: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(analyses).where(eq(analyses.id, analysisId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getUserAnalyses(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(analyses).where(eq(analyses.userId, userId)).orderBy(desc(analyses.createdAt));
}

export async function updateAnalysis(analysisId: number, data: any) {
  const db = await getDb();
  if (!db) return undefined;
  return await db.update(analyses).set(data).where(eq(analyses.id, analysisId));
}

// ============ QUERY HISTORY ============

export async function saveQuery(data: any) {
  const db = await getDb();
  if (!db) return undefined;
  return await db.insert(queries).values(data);
}

export async function getUserQueries(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(queries).where(eq(queries.userId, userId)).orderBy(desc(queries.createdAt));
}

// ============ SCENARIO QUERIES ============

export async function createScenario(data: any) {
  const db = await getDb();
  if (!db) return undefined;
  return await db.insert(scenarios).values(data);
}

export async function getScenarioById(scenarioId: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(scenarios).where(eq(scenarios.id, scenarioId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getUserScenarios(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(scenarios).where(eq(scenarios.userId, userId)).orderBy(desc(scenarios.createdAt));
}

// ============ SIMILARITY & TRANSFER VALUE ============

export async function getSimilarPlayers(playerId: number) {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(playerSimilarity).where(eq(playerSimilarity.playerId, playerId)).orderBy(desc(playerSimilarity.similarityScore));
}

export async function getTransferValue(playerId: number, season: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(transferValues).where(
    and(
      eq(transferValues.playerId, playerId),
      eq(transferValues.season, season)
    )
  ).limit(1);
  return result.length > 0 ? result[0] : undefined;
}
