import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  scoutAgent,
  performanceAgent,
  tacticsAgent,
  injuryAgent,
  financeAgent,
  executiveAgent,
  handleNaturalLanguageQuery,
} from "./ai-agents";
import {
  getTeamsByLeague,
  getAllTeams,
  getPlayersByTeam,
  createAnalysis,
  updateAnalysis,
  getUserAnalyses,
  saveQuery,
  createScenario,
  getUserScenarios,
} from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // ============ MISSION CONTROL ============

  teams: router({
    getByLeague: publicProcedure
      .input(z.object({ league: z.string() }))
      .query(async ({ input }) => {
        return await getTeamsByLeague(input.league);
      }),

    getAll: publicProcedure.query(async () => {
      return await getAllTeams();
    }),
  }),

  players: router({
    getByTeam: publicProcedure
      .input(z.object({ teamId: z.number() }))
      .query(async ({ input }) => {
        return await getPlayersByTeam(input.teamId);
      }),
  }),

  // ============ ANALYSIS PIPELINE ============

  analysis: router({
    // Trigger multi-agent analysis
    analyze: protectedProcedure
      .input(
        z.object({
          teamId: z.number(),
          budget: z.number(),
          objective: z.string(),
          sport: z.string().optional(),
          league: z.string().optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        try {
          // Create analysis record
          await createAnalysis({
            userId: ctx.user.id,
            teamId: input.teamId,
            objective: input.objective,
            budget: input.budget,
            status: 'processing',
          });

          const analysisId = Math.floor(Math.random() * 100000);

          // Get team players
          const players = await getPlayersByTeam(input.teamId);

          // Prepare context for agents
          const agentContext = {
            teamId: input.teamId,
            budget: input.budget,
            objective: input.objective,
            players,
            metrics: players.map((p: any) => ({ playerId: p.id, ...p })),
          };

          // Run all agents in parallel
          const [scout, performance, tactics, injury, finance] = await Promise.all([
            scoutAgent(agentContext),
            performanceAgent(agentContext),
            tacticsAgent(agentContext),
            injuryAgent(agentContext),
            financeAgent(agentContext),
          ]);

          // Run executive agent with all insights
          const executive = await executiveAgent(agentContext, [
            scout,
            performance,
            tactics,
            injury,
            finance,
          ]);

          // Update analysis with results
          await updateAnalysis(analysisId, {
            scoutInsight: JSON.stringify(scout),
            performanceInsight: JSON.stringify(performance),
            tacticsInsight: JSON.stringify(tactics),
            injuryInsight: JSON.stringify(injury),
            financeInsight: JSON.stringify(finance),
            executiveRecommendation: JSON.stringify(executive),
            confidenceScore: executive.confidence,
            status: 'completed',
          });

          return {
            analysisId,
            scout,
            performance,
            tactics,
            injury,
            finance,
            executive,
          };
        } catch (error) {
          console.error('Analysis error:', error);
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Failed to complete analysis',
          });
        }
      }),

    // Get analysis history
    getHistory: protectedProcedure.query(async ({ ctx }) => {
      return await getUserAnalyses(ctx.user.id);
    }),

    // Get specific analysis
    getById: protectedProcedure
      .input(z.object({ analysisId: z.number() }))
      .query(async ({ input }) => {
        const analysis = await getUserAnalyses(1); // Simplified - would need proper auth check
        return analysis.find((a: any) => a.id === input.analysisId);
      }),
  }),

  // ============ NATURAL LANGUAGE QUERIES ============

  query: router({
    ask: protectedProcedure
      .input(z.object({ question: z.string(), teamId: z.number(), budget: z.number() }))
      .mutation(async ({ input, ctx }) => {
        try {
          // Get team players for context
          const players = await getPlayersByTeam(input.teamId);

          const agentContext = {
            teamId: input.teamId,
            budget: input.budget,
            objective: input.question,
            players,
            metrics: players.map((p: any) => ({ playerId: p.id, ...p })),
          };

          // Get response from query handler
          const response = await handleNaturalLanguageQuery(input.question, agentContext);

          // Save query to history
          await saveQuery({
            userId: ctx.user.id,
            question: input.question,
            response: JSON.stringify(response),
            agentType: 'query-handler',
            confidenceScore: response.confidence,
          });

          return response;
        } catch (error) {
          console.error('Query error:', error);
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Failed to process query',
          });
        }
      }),

    // Get query history
    getHistory: protectedProcedure.query(async ({ ctx }) => {
      // Simplified - would need proper implementation
      return [] as any[];
    }),
  }),

  // ============ SCENARIO SIMULATOR ============

  scenario: router({
    // Create a what-if scenario
    create: protectedProcedure
      .input(
        z.object({
          analysisId: z.number(),
          scenarioName: z.string(),
          scenarioType: z.enum(['injury', 'transfer', 'budget', 'formation']),
          parameters: z.record(z.string(), z.any()),
        })
      )
      .mutation(async ({ input, ctx }) => {
        try {
          // Create scenario record
          await createScenario({
            userId: ctx.user.id,
            analysisId: input.analysisId,
            scenarioName: input.scenarioName,
            scenarioType: input.scenarioType,
            parameters: JSON.stringify(input.parameters),
            results: JSON.stringify({
              simulationResult: 'pending',
              timestamp: new Date(),
            }),
          });

          return {
            scenarioId: Math.floor(Math.random() * 10000),
            status: 'created',
            message: `Scenario "${input.scenarioName}" created successfully`,
          };
        } catch (error) {
          console.error('Scenario creation error:', error);
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Failed to create scenario',
          });
        }
      }),

    // Get user scenarios
    getHistory: protectedProcedure.query(async ({ ctx }) => {
      return await getUserScenarios(ctx.user.id);
    }),
  }),

  // ============ DATA ENDPOINTS ============

  data: router({
    // Get leagues
    getLeagues: publicProcedure.query(async () => {
      const teams = await getAllTeams();
      const leagueSet = new Set(teams.map((t: any) => t.league));
      const leagues = Array.from(leagueSet);
      return leagues;
    }),

    // Get objectives (predefined options)
    getObjectives: publicProcedure.query(async () => {
      return [
        'Find undervalued defenders under $30M',
        'Optimize starting lineup for maximum performance',
        'Identify young talent with high potential',
        'Reduce injury risk and manage fatigue',
        'Improve salary efficiency',
        'Find players for tactical formation change',
        'Identify hidden gems for transfer market',
        'Maximize expected goals (xG) in attack',
      ];
    }),
  }),
});

export type AppRouter = typeof appRouter;
