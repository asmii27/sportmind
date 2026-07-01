/**
 * Real metric calculation functions based on actual player data
 * All formulas are transparent and verifiable
 */

export interface Player {
  id: string;
  name: string;
  team: string;
  position: string;
  goals: number;
  assists: number;
  minutesPlayed: number;
  xG: number;
  xA: number;
  passCompletionPct: number;
  tackles: number;
  interceptions: number;
  aerialDuelsWonPct: number;
  weeklyMinutes: number[];
  salary: number;
  marketValue: number;
}

export interface ComputedMetrics {
  goalsPerNinety: number;
  goalsPerNinetyZScore: number;
  assistsPerNinety: number;
  xGPerNinety: number;
  workloadScore: number;
  fatigueRisk: "LOW" | "MEDIUM" | "HIGH";
  wagePerGoalContribution: number;
  wageEfficiency: "EXCELLENT" | "VERY_GOOD" | "GOOD" | "FAIR" | "POOR";
  overallRating: number;
}

/**
 * FORMULA 1: Goals Per 90 Minutes (Z-Score)
 * Z-Score = (Player Value - Mean) / Standard Deviation
 * Measures how many standard deviations a player is from the positional average
 */
export function calculateGoalsPerNinetyZScore(
  player: Player,
  allPlayers: Player[]
): { goalsPerNinety: number; zScore: number } {
  const goalsPerNinety = (player.goals / player.minutesPlayed) * 90;

  // Get players in same position
  const samePosition = allPlayers.filter((p) => p.position === player.position);

  if (samePosition.length < 2) {
    return { goalsPerNinety, zScore: 0 };
  }

  const gpn90Values = samePosition.map((p) => (p.goals / p.minutesPlayed) * 90);
  const mean = gpn90Values.reduce((a, b) => a + b, 0) / gpn90Values.length;
  const variance =
    gpn90Values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) /
    gpn90Values.length;
  const stdDev = Math.sqrt(variance);

  const zScore = stdDev > 0 ? (goalsPerNinety - mean) / stdDev : 0;

  return { goalsPerNinety, zScore };
}

/**
 * FORMULA 2: Workload & Fatigue Score
 * Fatigue Score = (Current Week Minutes / Season Average Minutes) * 100
 * Risk Level: < 80% = LOW, 80-110% = MEDIUM, > 110% = HIGH
 */
export function calculateWorkloadAndFatigue(
  player: Player
): { workloadScore: number; fatigueRisk: "LOW" | "MEDIUM" | "HIGH" } {
  const currentWeekMinutes = player.weeklyMinutes[player.weeklyMinutes.length - 1];
  const averageWeeklyMinutes = player.minutesPlayed / 38; // 38 matches per season

  const workloadScore = (currentWeekMinutes / averageWeeklyMinutes) * 100;

  let fatigueRisk: "LOW" | "MEDIUM" | "HIGH";
  if (workloadScore < 80) {
    fatigueRisk = "LOW";
  } else if (workloadScore < 110) {
    fatigueRisk = "MEDIUM";
  } else {
    fatigueRisk = "HIGH";
  }

  return { workloadScore, fatigueRisk };
}

/**
 * FORMULA 3: Wage Per Goal Contribution
 * Efficiency = Weekly Salary / (Goals + Assists per 90 * 10)
 * Lower is better (more productive per wage)
 */
export function calculateWageEfficiency(
  player: Player
): { wagePerGoalContribution: number; efficiency: "EXCELLENT" | "VERY_GOOD" | "GOOD" | "FAIR" | "POOR" } {
  const goalsPerNinety = (player.goals / player.minutesPlayed) * 90;
  const assistsPerNinety = (player.assists / player.minutesPlayed) * 90;
  const contributionsPerNinety = goalsPerNinety + assistsPerNinety;

  // Avoid division by zero
  if (contributionsPerNinety === 0) {
    return { wagePerGoalContribution: Infinity, efficiency: "POOR" };
  }

  const wagePerGoalContribution = player.salary / (contributionsPerNinety * 10);

  let efficiency: "EXCELLENT" | "VERY_GOOD" | "GOOD" | "FAIR" | "POOR";
  if (wagePerGoalContribution < 50000) {
    efficiency = "EXCELLENT";
  } else if (wagePerGoalContribution < 100000) {
    efficiency = "VERY_GOOD";
  } else if (wagePerGoalContribution < 200000) {
    efficiency = "GOOD";
  } else if (wagePerGoalContribution < 400000) {
    efficiency = "FAIR";
  } else {
    efficiency = "POOR";
  }

  return { wagePerGoalContribution, efficiency };
}

/**
 * FORMULA 4: Overall Rating (0-100)
 * Composite score based on:
 * - Goals per 90 (30%)
 * - Assists per 90 (20%)
 * - Pass completion (15%)
 * - Defensive actions (15%)
 * - Aerial duels (10%)
 * - Wage efficiency (10%)
 */
export function calculateOverallRating(
  player: Player,
  allPlayers: Player[]
): number {
  const goalsPerNinety = (player.goals / player.minutesPlayed) * 90;
  const assistsPerNinety = (player.assists / player.minutesPlayed) * 90;
  const defensiveActionsPerNinety =
    ((player.tackles + player.interceptions) / player.minutesPlayed) * 90;

  // Normalize to 0-100 scale
  const maxGoalsPerNinety = 1.5;
  const maxAssistsPerNinety = 0.5;
  const maxDefensivePerNinety = 3.0;

  const goalsScore = Math.min(
    (goalsPerNinety / maxGoalsPerNinety) * 100,
    100
  );
  const assistsScore = Math.min(
    (assistsPerNinety / maxAssistsPerNinety) * 100,
    100
  );
  const passScore = player.passCompletionPct;
  const defensiveScore = Math.min(
    (defensiveActionsPerNinety / maxDefensivePerNinety) * 100,
    100
  );
  const aerialScore = player.aerialDuelsWonPct;

  const { efficiency } = calculateWageEfficiency(player);
  const efficiencyScore =
    efficiency === "EXCELLENT"
      ? 100
      : efficiency === "VERY_GOOD"
        ? 85
        : efficiency === "GOOD"
          ? 70
          : efficiency === "FAIR"
            ? 50
            : 30;

  const overallRating =
    goalsScore * 0.3 +
    assistsScore * 0.2 +
    passScore * 0.15 +
    defensiveScore * 0.15 +
    aerialScore * 0.1 +
    efficiencyScore * 0.1;

  return Math.round(overallRating);
}

/**
 * FORMULA 5: Expected Goals Difference
 * Shows if player is over/underperforming expected goals
 */
export function calculateXGDifference(player: Player): number {
  return player.goals - player.xG;
}

/**
 * Compute all metrics for a player
 */
export function computeAllMetrics(
  player: Player,
  allPlayers: Player[]
): ComputedMetrics {
  const { goalsPerNinety, zScore } = calculateGoalsPerNinetyZScore(
    player,
    allPlayers
  );
  const { workloadScore, fatigueRisk } = calculateWorkloadAndFatigue(player);
  const { wagePerGoalContribution, efficiency } = calculateWageEfficiency(player);
  const overallRating = calculateOverallRating(player, allPlayers);
  const assistsPerNinety = (player.assists / player.minutesPlayed) * 90;
  const xGPerNinety = (player.xG / player.minutesPlayed) * 90;

  return {
    goalsPerNinety,
    goalsPerNinetyZScore: zScore,
    assistsPerNinety,
    xGPerNinety,
    workloadScore,
    fatigueRisk,
    wagePerGoalContribution,
    wageEfficiency: efficiency,
    overallRating,
  };
}
