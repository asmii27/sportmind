import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Loader2, Zap, Brain, TrendingUp, Shield, DollarSign, Cpu, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { VisualizationGrid } from "@/components/AnalysisVisualizations";
import { TEAM_DEMO_DATA, TEAMS } from "@/lib/team-demo-data";
import { Streamdown } from "streamdown";

// Demo data for instant results
const DEMO_AGENTS = [
  { id: "scout", name: "Scout Agent", icon: Brain, color: "from-blue-500 to-blue-600", borderAccent: "border-l-blue-400", iconColor: "text-blue-400", delay: 0 },
  { id: "performance", name: "Performance Agent", icon: TrendingUp, color: "from-emerald-500 to-emerald-600", borderAccent: "border-l-emerald-400", iconColor: "text-emerald-400", delay: 0.3 },
  { id: "tactics", name: "Tactics Agent", icon: Cpu, color: "from-purple-500 to-purple-600", borderAccent: "border-l-purple-400", iconColor: "text-purple-400", delay: 0.6 },
  { id: "injury", name: "Injury Agent", icon: Shield, color: "from-orange-500 to-orange-600", borderAccent: "border-l-orange-400", iconColor: "text-orange-400", delay: 0.9 },
  { id: "finance", name: "Finance Agent", icon: DollarSign, color: "from-yellow-500 to-yellow-600", borderAccent: "border-l-yellow-400", iconColor: "text-yellow-400", delay: 1.2 },
  { id: "executive", name: "Executive Agent", icon: Zap, color: "from-red-500 to-red-600", borderAccent: "border-l-red-400", iconColor: "text-red-400", delay: 1.5, emphasized: true },
];

const DEMO_RESULTS = {
  scout: {
    thinking: "Analyzing player valuations and market positioning...",
    insights: `**Top Talent Identified**: Vinicius Jr - Exceptional left-wing threat with 8.9/10 rating. Currently undervalued at €120M vs market value €180M.

**Rising Stars**: Jude Bellingham - Midfield prodigy, 21 years old, 8.7/10 potential. Perfect for long-term investment.

**Bargain Finds**: Alejandro Balde - Left-back, 21 years old, 8.2/10 rating, available at €40M (market: €65M).

**Recommendation**: Focus on Bellingham for midfield stability. Balde offers defensive depth at excellent value.`,
    confidence: 92,
  },
  performance: {
    thinking: "Analyzing performance trends and decline patterns...",
    insights: `**Peak Performers**: Haaland averaging 1.2 goals/game, 94% pass accuracy. Consistent upward trajectory.

**Emerging Threats**: Mount showing 23% improvement in key passes over last 6 months. Form is exceptional.

**Decline Alert**: Benzema showing -12% decline in sprint speed. Age factor evident but still elite finisher.

**Momentum**: Real Madrid's attack rated 9.1/10, Barcelona's midfield 8.4/10. Clear performance hierarchy.`,
    confidence: 88,
  },
  tactics: {
    thinking: "Optimizing tactical formations and player positioning...",
    insights: `**Recommended Formation**: 4-3-3 with inverted wingers for maximum attacking flexibility.

**Optimal Lineup**: Militao-Alaba-Guehi-Balde | Bellingham-Rodri-Foden | Vinicius-Haaland-Saka

**Tactical Advantages**: 78% possession retention, 6.2 expected goals per game, 2.1 defensive blocks per game.

**Formation Weakness**: Vulnerable to counter-attacks. Recommend defensive midfielder depth.`,
    confidence: 85,
  },
  injury: {
    thinking: "Assessing workload and injury risk patterns...",
    insights: `**High Risk Players**: Benzema (2,847 min - FATIGUE ALERT), Rodri (2,654 min - approaching threshold).

**Recovery Status**: Bellingham (fresh, 100% fitness), Balde (good, 95% fitness), Guehi (excellent, 98% fitness).

**Recommendation**: Rotate Benzema immediately. Reduce Rodri's workload by 15%. Maintain Bellingham's current schedule.`,
    confidence: 91,
  },
  finance: {
    thinking: "Calculating salary efficiency and transfer values...",
    insights: `**Best Value Signings**: Bellingham (€13.8M per rating point - EXCELLENT), Balde (€4.9M per rating point - EXCEPTIONAL).

**Salary Efficiency**: Haaland €333K per goal (ELITE), Vinicius €437K per goal (PREMIUM).

**Transfer Value Estimates**: Bellingham €120M → €180M (50% appreciation), Balde €40M → €75M (87% appreciation).`,
    confidence: 89,
  },
  executive: {
    thinking: "Synthesizing all agent insights into final recommendation...",
    insights: `## FINAL EXECUTIVE RECOMMENDATION

**Strategic Priority**: Build around Bellingham + Haaland core for next 3-5 years.

**Immediate Actions**: Secure Bellingham (long-term anchor), Sign Balde (exceptional value), Rotate Benzema (manage fatigue).

**Financial Impact**: Total investment €225M, Projected ROI €305M (35% gain), Expected trophy impact +2.3 trophies.

**Confidence Score**: 89/100 | **Risk Level**: LOW`,
    confidence: 89,
  },
};

export default function MissionControl() {
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [completedAgents, setCompletedAgents] = useState<string[]>([]);
  const [selectedTeam, setSelectedTeam] = useState("real-madrid");
  const currentTeamData = TEAM_DEMO_DATA[selectedTeam];

  const handleAnalyze = () => {
    setAnalyzing(true);
    setCompletedAgents([]);
    setResults(null);

    // Simulate agent completion with staggered timing
    DEMO_AGENTS.forEach((agent) => {
      setTimeout(() => {
        setCompletedAgents((prev) => [...prev, agent.id]);
      }, (agent.delay + 0.5) * 1000);
    });

    // Show results after all agents complete
    setTimeout(() => {
      setResults(currentTeamData);
      setAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-blue-950 text-white">
      {/* Header */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 border-b border-emerald-500/20 backdrop-blur-sm">
        <motion.div
          className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          ⚽ Mission Control
        </motion.div>
        <div className="text-sm text-emerald-300">Real-time AI Analysis</div>
      </nav>

      <div className="p-6 md:p-12 max-w-7xl mx-auto">
        {/* Analysis Form */}
        <motion.div
          className="mb-12 p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Zap className="text-emerald-400" /> Initiate Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-emerald-300 mb-2">Team Selection</label>
              <Select value={selectedTeam} onValueChange={setSelectedTeam}>
                <SelectTrigger className="bg-white/5 border-emerald-500/30 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-emerald-500/30">
                  {TEAMS.map((team: any) => (
                    <SelectItem key={team.id} value={team.id} className="text-white">
                      {team.badge} {team.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-emerald-300 mb-2">Budget (€ Millions)</label>
              <div className="p-3 rounded-lg bg-white/5 border border-emerald-500/30 text-slate-300 font-semibold">
                €{currentTeamData.budget}M
              </div>
            </div>
          </div>

          <Button
            onClick={handleAnalyze}
            disabled={analyzing}
            className="w-full px-8 py-4 text-lg font-bold bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {analyzing ? (
              <>
                <Loader2 className="inline mr-2 animate-spin" /> Analyzing with 6 AI Agents...
              </>
            ) : (
              <>
                <Zap className="inline mr-2" /> Run Analysis
              </>
            )}
          </Button>
        </motion.div>

        {/* Agent Panels */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-emerald-300">AI Agent Insights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {DEMO_AGENTS.map((agent) => {
              const Icon = agent.icon;
              const isCompleted = completedAgents.includes(agent.id);
              const isThinking = analyzing && !isCompleted;

              return (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: agent.delay * 0.3 }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    completedAgents.includes(agent.id)
                      ? `bg-slate-900/60 border-l-4 ${agent.borderAccent} border-y-white/10 border-r-white/10 shadow-lg ${agent.emphasized ? "md:col-span-3 ring-1 ring-red-400/30" : ""}`
                      : analyzing && !completedAgents.includes(agent.id)
                        ? "bg-white/5 border-emerald-500/50 animate-pulse"
                        : "bg-white/5 border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Icon className={`w-6 h-6 ${isCompleted ? agent.iconColor : "text-emerald-400"}`} />
                      <h3 className="font-bold text-lg">{agent.name}</h3>
                    </div>
                    {isCompleted && <CheckCircle className={`w-5 h-5 ${agent.iconColor}`} />}
                  </div>

                  <div className="text-sm">
                    {isThinking ? (
                      <div className="flex items-center gap-2 text-emerald-300">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Thinking...</span>
                      </div>
                    ) : isCompleted ? (
                      <span className="text-white/80">✓ Analysis Complete</span>
                    ) : (
                      <span className="text-slate-400">Waiting...</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Results Section */}
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Agent Results Cards */}
            <div className="grid md:grid-cols-2 gap-6">
            {DEMO_AGENTS.map((agent) => {
              const result = results ? results[agent.id as keyof typeof results] : null;
              if (!result) return null;
                const Icon = agent.icon;

                return (
                  <motion.div
                    key={agent.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`p-6 rounded-xl bg-gradient-to-br ${agent.color} bg-opacity-10 border border-white/10 hover:border-white/30 transition-all`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-5 h-5 ${agent.iconColor}`} />
                        <h3 className="font-bold">{agent.name}</h3>
                      </div>
                      <div className="px-3 py-1 bg-white/10 rounded-full text-sm font-semibold text-emerald-300">
                        {result.confidence}% confidence
                      </div>
                    </div>

                    <div className="text-sm text-slate-300 prose prose-invert max-w-none prose-headings:text-white prose-strong:text-white prose-p:text-slate-300 prose-p:my-1">
                      <Streamdown>{result.insights}</Streamdown>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Visualizations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-emerald-300">Interactive Visualizations</h2>
              <VisualizationGrid team={selectedTeam} confidence={results?.executive?.confidence} />
            </motion.div>

            {/* Executive Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 rounded-xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border-2 border-red-500/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-red-400" />
                <h3 className="text-2xl font-bold text-red-300">Executive Summary</h3>
              </div>
              <div className="prose prose-invert max-w-none text-slate-300">
                <p className="whitespace-pre-wrap">{results.executive.insights}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
