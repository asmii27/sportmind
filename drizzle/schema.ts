import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, json, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Football teams table
 */
export const teams = mysqlTable("teams", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  league: varchar("league", { length: 100 }).notNull(), // "Premier League", "La Liga", etc.
  country: varchar("country", { length: 100 }).notNull(),
  budget: decimal("budget", { precision: 15, scale: 2 }), // in millions
  formation: varchar("formation", { length: 50 }), // e.g., "4-3-3"
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Team = typeof teams.$inferSelect;
export type InsertTeam = typeof teams.$inferInsert;

/**
 * Football players table
 */
export const players = mysqlTable("players", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  position: varchar("position", { length: 50 }).notNull(), // "CB", "RB", "CM", "ST", etc.
  age: int("age").notNull(),
  nationality: varchar("nationality", { length: 100 }).notNull(),
  currentTeamId: int("currentTeamId"),
  marketValue: decimal("marketValue", { precision: 15, scale: 2 }), // in millions
  salary: decimal("salary", { precision: 15, scale: 2 }), // annual in millions
  jerseyNumber: int("jerseyNumber"),
  height: decimal("height", { precision: 5, scale: 2 }), // in cm
  weight: decimal("weight", { precision: 5, scale: 2 }), // in kg
  preferredFoot: varchar("preferredFoot", { length: 10 }), // "left" or "right"
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Player = typeof players.$inferSelect;
export type InsertPlayer = typeof players.$inferInsert;

/**
 * Player performance metrics (season-based)
 */
export const playerMetrics = mysqlTable("playerMetrics", {
  id: int("id").autoincrement().primaryKey(),
  playerId: int("playerId").notNull(),
  season: varchar("season", { length: 20 }).notNull(), // "2023-24"
  appearances: int("appearances").notNull(),
  minutes: int("minutes").notNull(),
  goals: int("goals").notNull(),
  assists: int("assists").notNull(),
  passes: int("passes").notNull(),
  passAccuracy: decimal("passAccuracy", { precision: 5, scale: 2 }), // percentage
  tackles: int("tackles").notNull(),
  interceptions: int("interceptions").notNull(),
  fouls: int("fouls").notNull(),
  yellowCards: int("yellowCards").notNull(),
  redCards: int("redCards").notNull(),
  expectedGoals: decimal("expectedGoals", { precision: 5, scale: 2 }), // xG
  expectedAssists: decimal("expectedAssists", { precision: 5, scale: 2 }), // xA
  dribbles: int("dribbles").notNull(),
  dribbleSuccess: decimal("dribbleSuccess", { precision: 5, scale: 2 }), // percentage
  shotAccuracy: decimal("shotAccuracy", { precision: 5, scale: 2 }), // percentage
  aerialWins: int("aerialWins").notNull(),
  aerialWinPercentage: decimal("aerialWinPercentage", { precision: 5, scale: 2 }), // percentage
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PlayerMetrics = typeof playerMetrics.$inferSelect;
export type InsertPlayerMetrics = typeof playerMetrics.$inferInsert;

/**
 * Player workload and injury risk data
 */
export const playerWorkload = mysqlTable("playerWorkload", {
  id: int("id").autoincrement().primaryKey(),
  playerId: int("playerId").notNull(),
  season: varchar("season", { length: 20 }).notNull(),
  minutesPerWeek: decimal("minutesPerWeek", { precision: 6, scale: 2 }),
  gamesPerWeek: decimal("gamesPerWeek", { precision: 4, scale: 2 }),
  fatigueScore: decimal("fatigueScore", { precision: 5, scale: 2 }), // 0-100
  injuryRisk: decimal("injuryRisk", { precision: 5, scale: 2 }), // percentage
  injuryHistory: text("injuryHistory"), // JSON array of past injuries
  recoveryTime: int("recoveryTime"), // days
  lastInjury: timestamp("lastInjury"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PlayerWorkload = typeof playerWorkload.$inferSelect;
export type InsertPlayerWorkload = typeof playerWorkload.$inferInsert;

/**
 * Analysis results and agent outputs
 */
export const analyses = mysqlTable("analyses", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  teamId: int("teamId").notNull(),
  objective: varchar("objective", { length: 500 }).notNull(),
  budget: decimal("budget", { precision: 15, scale: 2 }),
  status: mysqlEnum("status", ["pending", "processing", "completed", "failed"]).default("pending").notNull(),
  scoutInsight: text("scoutInsight"), // JSON
  performanceInsight: text("performanceInsight"), // JSON
  tacticsInsight: text("tacticsInsight"), // JSON
  injuryInsight: text("injuryInsight"), // JSON
  financeInsight: text("financeInsight"), // JSON
  executiveRecommendation: text("executiveRecommendation"), // JSON
  confidenceScore: decimal("confidenceScore", { precision: 5, scale: 2 }), // 0-100
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Analysis = typeof analyses.$inferSelect;
export type InsertAnalysis = typeof analyses.$inferInsert;

/**
 * Natural language queries and responses
 */
export const queries = mysqlTable("queries", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  question: text("question").notNull(),
  response: text("response"), // JSON with answer and reasoning
  agentType: varchar("agentType", { length: 50 }), // which agent handled it
  confidenceScore: decimal("confidenceScore", { precision: 5, scale: 2 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Query = typeof queries.$inferSelect;
export type InsertQuery = typeof queries.$inferInsert;

/**
 * Scenario simulations and what-if analysis
 */
export const scenarios = mysqlTable("scenarios", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  analysisId: int("analysisId"),
  scenarioName: varchar("scenarioName", { length: 255 }).notNull(),
  scenarioType: varchar("scenarioType", { length: 100 }).notNull(), // "injury", "transfer", "budget", "formation"
  parameters: text("parameters"), // JSON with scenario parameters
  results: text("results"), // JSON with simulation results
  confidenceIntervals: text("confidenceIntervals"), // JSON
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Scenario = typeof scenarios.$inferSelect;
export type InsertScenario = typeof scenarios.$inferInsert;

/**
 * Player similarity and comparison data
 */
export const playerSimilarity = mysqlTable("playerSimilarity", {
  id: int("id").autoincrement().primaryKey(),
  playerId: int("playerId").notNull(),
  similarPlayerId: int("similarPlayerId").notNull(),
  similarityScore: decimal("similarityScore", { precision: 5, scale: 2 }), // 0-100
  attributes: text("attributes"), // JSON with attribute breakdown
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PlayerSimilarity = typeof playerSimilarity.$inferSelect;
export type InsertPlayerSimilarity = typeof playerSimilarity.$inferInsert;

/**
 * Transfer value predictions
 */
export const transferValues = mysqlTable("transferValues", {
  id: int("id").autoincrement().primaryKey(),
  playerId: int("playerId").notNull(),
  predictedValue: decimal("predictedValue", { precision: 15, scale: 2 }), // in millions
  confidence: decimal("confidence", { precision: 5, scale: 2 }), // percentage
  factors: text("factors"), // JSON with key factors affecting value
  season: varchar("season", { length: 20 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type TransferValue = typeof transferValues.$inferSelect;
export type InsertTransferValue = typeof transferValues.$inferInsert;
