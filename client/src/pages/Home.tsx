import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, Zap, Brain, TrendingUp, Shield, DollarSign, Cpu, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";

export default function Home() {
  const [, setLocation] = useLocation();
  const [ballPos, setBallPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setBallPos({
        x: Math.sin(Date.now() / 1000) * 100,
        y: Math.cos(Date.now() / 1500) * 80,
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleEnterWarRoom = () => {
    setLocation("/mission-control");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-blue-950 text-white overflow-hidden">
      {/* Animated Soccer Field Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Field lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="2" />
          <circle cx="50%" cy="50%" r="15%" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="50%" cy="50%" r="2%" fill="white" />
          <rect x="5%" y="35%" width="10%" height="30%" fill="none" stroke="white" strokeWidth="2" />
          <rect x="85%" y="35%" width="10%" height="30%" fill="none" stroke="white" strokeWidth="2" />
        </svg>

        {/* Animated Ball */}
        <motion.div
          className="absolute w-6 h-6 bg-gradient-to-br from-white to-gray-300 rounded-full shadow-lg"
          style={{
            left: `calc(50% + ${ballPos.x}px)`,
            top: `calc(30% + ${ballPos.y}px)`,
            boxShadow: "0 0 20px rgba(255,255,255,0.5)",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-60" />
        <motion.div
          className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          style={{ left: "10%", top: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          style={{ right: "10%", bottom: "10%" }}
        />
      </div>

      {/* Header */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 border-b border-emerald-500/20 backdrop-blur-sm">
        <motion.div
          className="text-3xl font-black bg-gradient-to-r from-emerald-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          ⚽ SportMind
        </motion.div>
        <div className="text-sm text-emerald-300 font-semibold">AI-Powered Football Intelligence</div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 md:px-12 md:py-32 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 bg-emerald-500/20 border border-emerald-400/50 rounded-full"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-emerald-300 font-semibold flex items-center gap-2">
              <Zap size={16} /> Live Match Intelligence
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Next-Gen
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Football Strategy
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Six specialized AI agents analyze every aspect of the game. Real-time insights. Evidence-backed decisions. Competitive advantage.
          </p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Button
              onClick={handleEnterWarRoom}
              className="px-8 py-6 text-lg font-bold bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center gap-2"
            >
              <Play size={20} /> Enter War Room
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg font-bold border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-500/10 rounded-lg transition-all duration-300"
            >
              Watch Demo
            </Button>
            <Button
              onClick={() => setLocation("/methodology")}
              variant="outline"
              className="px-8 py-6 text-lg font-bold border-2 border-blue-400 text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all duration-300"
            >
              📊 Methodology
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Six Agents Section */}
      <section className="relative z-10 px-6 py-20 md:px-12 md:py-32 border-t border-emerald-500/20">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
            Six Specialized Agents
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg">Each agent thinks independently. Then the Executive synthesizes everything.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Brain, name: "Scout Agent", desc: "Talent identification & valuation", accent: "border-blue-400", iconColor: "text-blue-400" },
              { icon: TrendingUp, name: "Performance Agent", desc: "Trend analysis & decline detection", accent: "border-emerald-400", iconColor: "text-emerald-400" },
              { icon: Cpu, name: "Tactics Agent", desc: "Formation optimization & lineups", accent: "border-purple-400", iconColor: "text-purple-400" },
              { icon: Shield, name: "Injury Agent", desc: "Workload & fatigue analysis", accent: "border-orange-400", iconColor: "text-orange-400" },
              { icon: DollarSign, name: "Finance Agent", desc: "Salary efficiency & transfer value", accent: "border-yellow-400", iconColor: "text-yellow-400" },
              { icon: Zap, name: "Executive Agent", desc: "Final recommendations & synthesis", accent: "border-red-400", iconColor: "text-red-400" },
            ].map((agent, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`group p-6 rounded-xl bg-slate-900/60 border-2 border-l-4 ${agent.accent} border-y-white/10 border-r-white/10 hover:border-l-[6px] transition-all duration-300 cursor-pointer transform hover:scale-105`}
              >
                <agent.icon className={`w-12 h-12 mb-4 ${agent.iconColor} group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-bold text-white mb-2">{agent.name}</h3>
                <p className="text-slate-300 text-sm">{agent.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20 md:px-12 md:py-32 bg-gradient-to-r from-emerald-950/50 to-blue-950/50 border-t border-emerald-500/20">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black text-center mb-16 bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
            Powerful Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Natural language queries for complex analysis",
              "Real-time performance prediction with AI",
              "Salary efficiency scoring & transfer valuations",
              "Injury risk assessment & workload management",
              "Tactical formation optimization",
              "What-if scenario simulation",
              "Interactive visualizations & dashboards",
              "Evidence-backed recommendations with confidence scores",
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-emerald-500/20 hover:border-emerald-500/50 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <ChevronRight size={16} className="text-white" />
                </div>
                <p className="text-slate-300 text-lg">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20 md:px-12 md:py-32 border-t border-emerald-500/20">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
            Ready to Transform Your Game?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Experience the future of football intelligence. Make data-driven decisions with confidence.
          </p>
          <Button
            onClick={handleEnterWarRoom}
            className="px-8 py-6 text-lg font-bold bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            Enter War Room Now
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
