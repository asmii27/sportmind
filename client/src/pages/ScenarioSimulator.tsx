import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Zap, Loader2, TrendingUp } from "lucide-react";

interface Scenario {
  type: "injury" | "transfer" | "budget" | "formation";
  description: string;
  impact: number;
  confidence: number;
}

const SCENARIO_TEMPLATES = [
  {
    type: "injury",
    title: "Key Player Injury",
    description: "What if our top striker gets injured?",
    icon: "🏥",
  },
  {
    type: "transfer",
    title: "Transfer Opportunity",
    description: "What if we sign a new defender?",
    icon: "🔄",
  },
  {
    type: "budget",
    title: "Budget Change",
    description: "What if our budget increases by 30%?",
    icon: "💰",
  },
  {
    type: "formation",
    title: "Formation Change",
    description: "What if we switch to 4-3-3?",
    icon: "📋",
  },
];

export default function ScenarioSimulator() {
  const { user } = useAuth();
  const [teamId, setTeamId] = useState("1");
  const [selectedScenario, setSelectedScenario] = useState<"injury" | "transfer" | "budget" | "formation" | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Scenario | null>(null);

  const scenarioMutation = trpc.scenario.create.useMutation({
    onSuccess: (data) => {
      setResults({
        type: (selectedScenario as "injury" | "transfer" | "budget" | "formation") || "injury",
        description: `Scenario simulation completed`,
        impact: 12,
        confidence: 78,
      });
      setIsLoading(false);
    },
    onError: () => {
      setIsLoading(false);
    },
  });

  const handleRunScenario = () => {
    if (!selectedScenario) return;
    setIsLoading(true);
    scenarioMutation.mutate({
      analysisId: 1,
      scenarioName: selectedScenario,
      scenarioType: selectedScenario,
      parameters: {},
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      {/* Header */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 border-b border-slate-800/50 backdrop-blur-sm">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Scenario Simulator
        </motion.div>
        <div className="text-sm text-slate-400">
          Test strategies with what-if scenarios
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-12 md:px-12">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Team Selection */}
          <Card className="bg-slate-900/50 border-slate-700/50 p-6 mb-8">
            <label className="block text-sm font-medium mb-3 text-slate-300">
              Select Team
            </label>
            <select
              value={teamId}
              onChange={(e) => setTeamId(e.target.value)}
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            >
              <option value="1">Manchester United</option>
              <option value="2">Liverpool</option>
              <option value="3">Manchester City</option>
              <option value="4">Arsenal</option>
              <option value="5">Chelsea</option>
            </select>
          </Card>

          {/* Scenario Templates */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-6">Choose a Scenario</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {SCENARIO_TEMPLATES.map((template, idx) => (
                <motion.button
                  key={template.type}
                  onClick={() => setSelectedScenario(template.type as "injury" | "transfer" | "budget" | "formation")}
                  className={`p-6 rounded-lg border-2 transition-all text-left ${selectedScenario === template.type ? "border-blue-500 bg-blue-500/10" : "border-slate-700/50 bg-slate-900/50 hover:border-slate-600/50"}`}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="text-3xl mb-2">{template.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{template.title}</h3>
                  <p className="text-sm text-slate-400">{template.description}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Run Button */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              onClick={handleRunScenario}
              disabled={!selectedScenario || isLoading}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all disabled:opacity-50 text-lg font-semibold"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Running Simulation...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 mr-2" />
                  Run Scenario
                </>
              )}
            </Button>
          </motion.div>

          {/* Results */}
          {results && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold">Simulation Results</h2>

              {/* Impact Card */}
              <Card className="bg-slate-900/50 border-slate-700/50 p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Impact Metric */}
                  <motion.div
                    className="text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="text-sm text-slate-400 mb-2">Team Performance Impact</div>
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#334155" strokeWidth="8" />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke={results.impact > 0 ? "#10b981" : "#ef4444"}
                          strokeWidth="8"
                          strokeDasharray={`${results.impact * 2.82} 282`}
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`text-3xl font-bold ${results.impact > 0 ? "text-green-400" : "text-red-400"}`}>
                          {results.impact > 0 ? "+" : ""}{results.impact}%
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400">
                      {results.impact > 0 ? "Positive" : "Negative"} impact on team performance
                    </p>
                  </motion.div>

                  {/* Confidence & Details */}
                  <motion.div
                    className="flex flex-col justify-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-300">Simulation Confidence</span>
                        <span className="text-sm font-bold text-blue-400">{results.confidence}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                          initial={{ width: 0 }}
                          animate={{ width: `${results.confidence}%` }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                        <p className="text-xs text-slate-400 mb-1">Scenario Type</p>
                        <p className="font-semibold text-slate-200 capitalize">{results.type}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                        <p className="text-xs text-slate-400 mb-1">Key Finding</p>
                        <p className="font-semibold text-slate-200">
                          {results.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Card>

              {/* Recommendations */}
              <Card className="bg-slate-900/50 border-slate-700/50 p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  Recommendations
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="text-slate-300">
                      Consider adjusting your tactical approach based on this scenario
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="text-slate-300">
                      Monitor key players who would be affected by this scenario
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="text-slate-300">
                      Run additional scenarios to explore different strategies
                    </span>
                  </li>
                </ul>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => {
                    setResults(null);
                    setSelectedScenario(null);
                  }}
                  className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all"
                >
                  New Scenario
                </Button>
                <Button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all">
                  Export Analysis
                </Button>
              </div>
            </motion.div>
          )}

          {/* Empty State */}
          {!results && !isLoading && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">Select a scenario and run the simulation</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
