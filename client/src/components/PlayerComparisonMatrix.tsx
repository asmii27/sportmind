import { motion } from "framer-motion";

interface PlayerComparisonData {
  player1: {
    name: string;
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defense: number;
    physical: number;
  };
  player2: {
    name: string;
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defense: number;
    physical: number;
  };
}

const defaultData: PlayerComparisonData = {
  player1: {
    name: "Player A",
    pace: 88,
    shooting: 82,
    passing: 85,
    dribbling: 87,
    defense: 76,
    physical: 84,
  },
  player2: {
    name: "Player B",
    pace: 82,
    shooting: 88,
    passing: 80,
    dribbling: 79,
    defense: 85,
    physical: 81,
  },
};

export default function PlayerComparisonMatrix({
  data = defaultData,
  summary,
}: {
  data?: PlayerComparisonData;
  summary?: string;
}) {
  const stats = ["Pace", "Shooting", "Passing", "Dribbling", "Defense", "Physical"];
  const keys = ["pace", "shooting", "passing", "dribbling", "defense", "physical"] as const;

  const getColor = (value: number) => {
    if (value >= 85) return "bg-green-500";
    if (value >= 75) return "bg-blue-500";
    if (value >= 65) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getTextColor = (value: number) => {
    if (value >= 85) return "text-green-400";
    if (value >= 75) return "text-blue-400";
    if (value >= 65) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <motion.div
      className="p-6 rounded-lg border border-slate-700/50 bg-slate-900/50 overflow-x-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-lg font-bold mb-6 text-purple-400">Player Comparison Matrix</h3>

      <div className="min-w-full">
        {/* Header */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          <div className="text-sm font-semibold text-slate-400">Stat</div>
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-400">{data.player1.name}</p>
          </div>
          <div className="col-span-3" />
          <div className="text-center">
            <p className="text-sm font-semibold text-purple-400">{data.player2.name}</p>
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="space-y-3">
          {stats.map((stat, idx) => {
            const key = keys[idx];
            const value1 = data.player1[key];
            const value2 = data.player2[key];
            const maxValue = Math.max(value1, value2);
            const winner = value1 > value2 ? 1 : value2 > value1 ? 2 : 0;

            return (
              <motion.div
                key={stat}
                className="grid grid-cols-7 gap-2 items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                {/* Stat Label */}
                <div className="text-sm font-medium text-slate-300">{stat}</div>

                {/* Player 1 Bar */}
                <div className="col-span-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-6 bg-slate-800 rounded overflow-hidden">
                      <motion.div
                        className={`h-full ${getColor(value1)} opacity-70`}
                        initial={{ width: 0 }}
                        animate={{ width: `${(value1 / 100) * 100}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.05 + 0.2 }}
                      />
                    </div>
                    <span className={`text-xs font-bold w-8 text-right ${getTextColor(value1)}`}>
                      {value1}
                    </span>
                  </div>
                </div>

                {/* Winner Indicator */}
                <div className="text-center">
                  {winner === 1 && <span className="text-xs font-bold text-blue-400">✓</span>}
                  {winner === 0 && <span className="text-xs text-slate-500">=</span>}
                  {winner === 2 && <span className="text-xs font-bold text-purple-400">✗</span>}
                </div>

                {/* Player 2 Bar */}
                <div className="col-span-2">
                  <div className="flex items-center gap-2 justify-end">
                    <span className={`text-xs font-bold w-8 text-left ${getTextColor(value2)}`}>
                      {value2}
                    </span>
                    <div className="flex-1 h-6 bg-slate-800 rounded overflow-hidden">
                      <motion.div
                        className={`h-full ${getColor(value2)} opacity-70 ml-auto`}
                        initial={{ width: 0 }}
                        animate={{ width: `${(value2 / 100) * 100}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.05 + 0.2 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary */}
        <motion.div
          className="mt-6 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-slate-300">
            {summary ?? (
              <>
                <span className="font-semibold text-blue-400">{data.player1.name}</span> excels in{" "}
                <span className="text-blue-400">pace and dribbling</span>, while{" "}
                <span className="font-semibold text-purple-400">{data.player2.name}</span> is stronger in{" "}
                <span className="text-purple-400">shooting and defense</span>.
              </>
            )}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
