import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface AgentPanelProps {
  agent: string;
  color: string;
  isThinking?: boolean;
  thinking?: string;
  insight?: string;
  confidence?: number;
  keyPoints?: string[];
}

export default function AgentPanel({
  agent,
  color,
  isThinking = false,
  thinking = "Analyzing data...",
  insight = "Processing insights...",
  confidence = 0,
  keyPoints = [],
}: AgentPanelProps) {
  return (
    <motion.div
      className={`relative p-6 rounded-lg border border-slate-700/50 bg-slate-900/50 overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${color} animate-pulse`} />
          <h3 className={`text-lg font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
            {agent}
          </h3>
          {isThinking && (
            <Loader2 className="w-4 h-4 animate-spin ml-auto text-slate-400" />
          )}
        </div>

        {/* Thinking Process */}
        {isThinking && (
          <motion.div
            className="mb-4 p-3 rounded bg-slate-800/50 border border-slate-700/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xs text-slate-400 font-mono">
              {thinking}
            </p>
          </motion.div>
        )}

        {/* Insight */}
        {!isThinking && insight && (
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm text-slate-300 leading-relaxed">
              {insight}
            </p>
          </motion.div>
        )}

        {/* Key Points */}
        {keyPoints.length > 0 && (
          <motion.div
            className="mb-4 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {keyPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${color} mt-1.5 flex-shrink-0`} />
                <span className="text-xs text-slate-400">{point}</span>
              </div>
            ))}
          </motion.div>
        )}

        {/* Confidence Score */}
        {confidence > 0 && (
          <motion.div
            className="pt-4 border-t border-slate-700/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">Confidence</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${confidence}%` }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </div>
                <span className="text-xs font-bold text-slate-300 w-8 text-right">
                  {confidence.toFixed(0)}%
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
