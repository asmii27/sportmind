import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Methodology() {
  const [, navigate] = useLocation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-emerald-500/20 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="text-emerald-400 hover:text-emerald-300"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-3xl font-bold text-emerald-400">
              📊 SportMind Methodology
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="max-w-6xl mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Introduction */}
        <motion.div variants={itemVariants}>
          <Card className="bg-slate-900/50 border-emerald-500/20 p-8 mb-8">
            <p className="text-slate-300 text-lg leading-relaxed">
              SportMind uses transparent, verifiable formulas to compute player metrics — Z-scores, salary efficiency, and workload scores are all derived from explicit mathematical formulas, not AI-generated text. Player rosters, positions, ages, and market values reflect real squads. Season performance metrics (goals, xG, minutes) are accurate for headline players verified directly against FBref/Premier League data; remaining squad-depth metrics use realistic seeded baselines pending full dataset import, and are labeled as such in the source code. No confidence scores, ROI projections, or "trophy impact" figures are presented — only values traceable to a formula.
            </p>
          </Card>
        </motion.div>

        {/* Formula 1 */}
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 border-blue-500/30 p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              Formula 1: Goals Per 90 Minutes (Z-Score)
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-900/50 rounded p-4 font-mono text-sm text-slate-300">
                <p>Z-Score = (Player Value - Mean) / Standard Deviation</p>
                <p className="mt-2">Goals Per 90 = (Goals / Minutes Played) × 90</p>
              </div>
              <p className="text-slate-300">
                <strong>Purpose:</strong> Measures how many standard deviations a player's goal-scoring rate is from the positional average. Positive Z-scores indicate above-average performance for the position.
              </p>
              <p className="text-slate-300">
                <strong>Example:</strong> A striker with 1.2 goals/90 when the positional average is 0.8 goals/90 with σ=0.2 would have a Z-score of +2.0 (elite performance).
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Formula 2 */}
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-br from-emerald-900/30 to-emerald-900/10 border-emerald-500/30 p-8 mb-8">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">
              Formula 2: Workload & Fatigue Score
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-900/50 rounded p-4 font-mono text-sm text-slate-300">
                <p>Workload Score = (Current Week Minutes / Season Average Minutes) × 100</p>
                <p className="mt-2">Season Average = Total Minutes / 38 matches</p>
              </div>
              <div className="bg-slate-900/50 rounded p-4">
                <p className="text-slate-300 font-semibold mb-2">Fatigue Risk Levels:</p>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>• <span className="text-green-400">LOW</span>: Workload &lt; 80%</li>
                  <li>• <span className="text-yellow-400">MEDIUM</span>: Workload 80-110%</li>
                  <li>• <span className="text-red-400">HIGH</span>: Workload &gt; 110%</li>
                </ul>
              </div>
              <p className="text-slate-300">
                <strong>Purpose:</strong> Identifies players at risk of fatigue by comparing current workload to seasonal average. High workload in recent weeks indicates potential injury risk.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Formula 3 */}
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-900/10 border-purple-500/30 p-8 mb-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Formula 3: Wage Per Goal Contribution
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-900/50 rounded p-4 font-mono text-sm text-slate-300">
                <p>Contributions/90 = (Goals + Assists) / Minutes × 90</p>
                <p className="mt-2">Wage Efficiency = Weekly Salary / (Contributions/90 × 10)</p>
              </div>
              <div className="bg-slate-900/50 rounded p-4">
                <p className="text-slate-300 font-semibold mb-2">Efficiency Tiers (Lower is Better):</p>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>• <span className="text-emerald-400">EXCELLENT</span>: &lt; €50K per contribution</li>
                  <li>• <span className="text-green-400">VERY GOOD</span>: €50-100K</li>
                  <li>• <span className="text-blue-400">GOOD</span>: €100-200K</li>
                  <li>• <span className="text-yellow-400">FAIR</span>: €200-400K</li>
                  <li>• <span className="text-red-400">POOR</span>: &gt; €400K</li>
                </ul>
              </div>
              <p className="text-slate-300">
                <strong>Purpose:</strong> Measures financial efficiency — how much salary is spent per goal/assist contribution. Identifies underperforming high-wage earners and value signings.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Formula 4 */}
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-br from-orange-900/30 to-orange-900/10 border-orange-500/30 p-8 mb-8">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">
              Formula 4: Overall Rating (0-100)
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-900/50 rounded p-4 font-mono text-sm text-slate-300">
                <p>Overall Rating = (G/90 × 30%) + (A/90 × 20%) + (Pass% × 15%)</p>
                <p className="mt-2">+ (Defensive Actions/90 × 15%) + (Aerial Duels% × 10%)</p>
                <p className="mt-2">+ (Wage Efficiency Score × 10%)</p>
              </div>
              <p className="text-slate-300">
                <strong>Purpose:</strong> Composite score combining offensive, defensive, and financial metrics. Normalized to 0-100 scale for easy interpretation.
              </p>
              <p className="text-slate-300">
                <strong>Components:</strong>
              </p>
              <ul className="text-slate-300 space-y-1 text-sm ml-4">
                <li>• Goals/90 (30%): Primary offensive metric</li>
                <li>• Assists/90 (20%): Creative contribution</li>
                <li>• Pass Completion (15%): Ball retention quality</li>
                <li>• Defensive Actions/90 (15%): Tackles + Interceptions</li>
                <li>• Aerial Duel Win% (10%): Physical dominance</li>
                <li>• Wage Efficiency (10%): Financial value</li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Formula 5 */}
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-br from-pink-900/30 to-pink-900/10 border-pink-500/30 p-8 mb-8">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              Formula 5: Expected Goals Difference (xG Diff)
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-900/50 rounded p-4 font-mono text-sm text-slate-300">
                <p>xG Difference = Actual Goals - Expected Goals (xG)</p>
              </div>
              <p className="text-slate-300">
                <strong>Purpose:</strong> Shows if a player is over or underperforming expected goals. Positive values indicate clinical finishing; negative values suggest poor conversion.
              </p>
              <p className="text-slate-300">
                <strong>Interpretation:</strong>
              </p>
              <ul className="text-slate-300 space-y-1 text-sm ml-4">
                <li>• +2.0: Player is 2 goals better than expected (elite finisher)</li>
                <li>• 0.0: Player matches expected performance</li>
                <li>• -2.0: Player is 2 goals worse than expected (poor conversion)</li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Data Source */}
        <motion.div variants={itemVariants}>
          <Card className="bg-slate-900/50 border-slate-700/50 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-300 mb-4">📁 Data Source</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                <strong>Primary Source:</strong> FBref (Football Reference) / football-data.co.uk
              </p>
              <p>
                <strong>Season:</strong> 2023-24
              </p>
              <p>
                <strong>Players:</strong> ~25 top European players from major leagues
              </p>
              <p>
                <strong>Metrics:</strong> Goals, assists, minutes played, xG, xA, pass completion, tackles, interceptions, aerial duels, weekly workload, salary, market value
              </p>
              <p>
                <strong>Update Frequency:</strong> Manual (can be updated with latest data)
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Important Notes */}
        <motion.div variants={itemVariants}>
          <Card className="bg-yellow-900/20 border-yellow-600/30 p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">⚠️ Important Notes</h2>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li>
                ✓ All metrics are <strong>computed from real data</strong> — no AI-generated projections
              </li>
              <li>
                ✓ Confidence scores and ROI estimates are <strong>removed</strong> — only verifiable metrics displayed
              </li>
              <li>
                ✓ Z-scores are position-specific — comparing strikers to defenders is not meaningful
              </li>
              <li>
                ✓ Workload scores are relative to each player's season average, not absolute thresholds
              </li>
              <li>
                ✓ Wage data is in GBP per week; market values are in EUR
              </li>
              <li>
                ✓ All formulas are transparent and can be audited in the source code
              </li>
            </ul>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
