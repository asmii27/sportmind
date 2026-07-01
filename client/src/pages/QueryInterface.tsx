import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Send, Loader2, MessageSquare } from "lucide-react";

const EXAMPLE_QUERIES = [
  "Find defenders under 24 who are undervalued",
  "Which players have the highest injury risk?",
  "Recommend a formation for maximum attacking potential",
  "Who are the most salary-efficient players?",
  "Identify young talent with high potential",
  "What's the optimal lineup for defensive stability?",
];

export default function QueryInterface() {
  const { user } = useAuth();
  const [query, setQuery] = useState("");
  const [teamId, setTeamId] = useState("1");
  const [budget, setBudget] = useState("50");
  const [isLoading, setIsLoading] = useState(false);
  const [responses, setResponses] = useState<any[]>([]);

  const queryMutation = trpc.query.ask.useMutation({
    onSuccess: (data) => {
      setResponses([...responses, { query, response: data }]);
      setQuery("");
      setIsLoading(false);
    },
    onError: () => {
      setIsLoading(false);
    },
  });

  const handleSubmit = () => {
    if (!query.trim()) return;
    setIsLoading(true);
    queryMutation.mutate({
      question: query,
      teamId: parseInt(teamId),
      budget: parseFloat(budget),
    });
  };

  const handleExampleQuery = (exampleQuery: string) => {
    setQuery(exampleQuery);
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
          Query Interface
        </motion.div>
        <div className="text-sm text-slate-400">
          Ask anything about player analysis
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-12 md:px-12">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Query Input Section */}
          <Card className="bg-slate-900/50 border-slate-700/50 p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Ask a Question</h2>

            {/* Input Fields */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Team ID
                </label>
                <input
                  type="number"
                  value={teamId}
                  onChange={(e) => setTeamId(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Budget (€M)
                </label>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Query Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-slate-300">
                Your Question
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="Ask anything about player analysis..."
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <Button
                  onClick={handleSubmit}
                  disabled={isLoading || !query.trim()}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all disabled:opacity-50"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>

            {/* Example Queries */}
            <div>
              <p className="text-sm text-slate-400 mb-3">Try these questions:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {EXAMPLE_QUERIES.map((example, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => handleExampleQuery(example)}
                    className="text-left px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-sm text-slate-300 hover:text-slate-200 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    {example}
                  </motion.button>
                ))}
              </div>
            </div>
          </Card>

          {/* Responses */}
          {responses.length > 0 && (
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-4">Query Responses</h3>
              {responses.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 rounded-lg border border-slate-700/50 bg-slate-900/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <MessageSquare className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-slate-200">{item.query}</p>
                      <p className="text-sm text-slate-500 mt-1">
                        Confidence: {item.response.confidence.toFixed(0)}%
                      </p>
                    </div>
                  </div>
                  <div className="pl-8 border-l-2 border-blue-500/30">
                    <p className="text-slate-300 leading-relaxed">
                      {item.response.insight}
                    </p>
                    {item.response.keyPoints && item.response.keyPoints.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {item.response.keyPoints.map((point: string, pidx: number) => (
                          <div key={pidx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                            <span className="text-sm text-slate-400">{point}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Empty State */}
          {responses.length === 0 && !isLoading && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <MessageSquare className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">Ask a question to get started</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
