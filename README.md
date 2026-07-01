# SportMind : AI Multi-Agent Football Analytics

SportMind is a football analytics platform that combines six specialized AI agents with transparent, formula-driven statistical models to generate evidence-backed insights for team management decisions.

The core design principle: **AI agents interpret computed statistics, not invent them.** Every metric shown, goals-per-90 z-scores, salary efficiency ratios, workload indices is derived from an explicit formula documented on the in-app Methodology page. The LLM layer narrates and synthesizes; it does not generate numbers.

---

## What It Does

Select a team, budget, and objective. Six agents analyze the squad independently, then the Executive Agent synthesizes their findings into a strategic recommendation.

| Agent | Responsibility |
|---|---|
| Scout | Talent identification and transfer value |
| Performance | Form trends and z-score analysis |
| Tactics | Formation optimization and lineups |
| Injury | Workload and fatigue index |
| Finance | Salary efficiency scoring |
| Executive | Final synthesis and risk assessment |

---

## Analytics & Methodology

All metrics are computed via explicit formulas — see the in-app **Methodology** page for full documentation.

**Goals Per 90 (Z-Score)**
```
Goals/90 = (Goals / Minutes) × 90
Z-Score  = (Player Value − Positional Mean) / Standard Deviation
```
Positive z-scores indicate above-average output for the position. Strikers are only compared to strikers.

**Salary Efficiency**
```
Efficiency = Predicted Performance Score / (Salary / Market Value)
```
Position-adjusted. Identifies undervalued players relative to wage cost.

**Workload / Fatigue Index**
```
Workload = Recent Minutes (last 5 matches) / Season Average Minutes
```
Values above 1.0 indicate above-normal load. Relative to each player's own baseline, not an absolute threshold.

**Data Coverage**

Headline players with verified 2023-24 season stats (cross-checked against FBref / Premier League official data):
- Erling Haaland — 27 goals, 31 appearances (Golden Boot)
- Mohamed Salah — 18 goals, 9 assists, 34 appearances
- Bukayo Saka — 16 goals, 9 assists, 35 appearances

Remaining squad-depth metrics use realistic seeded baseline data, clearly labelled in source code and disclosed on the Methodology page. No speculative projections (ROI, trophy counts, confidence scores above 75%) are presented.

---

## Tech Stack

**Frontend**
- React 19 + Vite
- Tailwind CSS 4
- Framer Motion
- Recharts
- shadcn/ui + Radix UI

**Backend**
- Express.js + tRPC
- MySQL with Drizzle ORM
- Anthropic Claude API (claude-sonnet-4-6)

---

## Getting Started

**Prerequisites**
- Node.js 22+
- MySQL database
- Anthropic API key

**Install**
```bash
npm install --legacy-peer-deps
```

**Environment variables**
```bash
DATABASE_URL=mysql://user:password@host:3306/sportmind
ANTHROPIC_API_KEY=your_key_here
```

**Database setup**
```bash
npx drizzle-kit generate
npx drizzle-kit migrate
node server/seed-data.mjs
```

**Run**
```bash
npm run dev
# Open http://localhost:5000
```

---

## Project Structure

```
sportmind/
├── client/src/
│   ├── pages/
│   │   ├── Home.tsx                  # Landing page
│   │   ├── MissionControl.tsx        # Analysis dashboard
│   │   ├── QueryInterface.tsx        # Natural language queries
│   │   ├── ScenarioSimulator.tsx     # What-if scenarios
│   │   └── Methodology.tsx           # Formula documentation
│   └── components/
│       ├── AnalysisVisualizations.tsx
│       └── PlayerComparisonMatrix.tsx
├── server/
│   ├── ai-agents.ts                  # Six agent prompts + pipeline
│   ├── ml-models.ts                  # Statistical formulas
│   ├── demo-data.ts                  # Demo analysis results
│   └── seed-data.mjs                 # Database seeding
└── drizzle/schema.ts                 # Database schema
```

---

## Deployment

Deployable on any Node-compatible host with a MySQL database.

Recommended: **Railway** (railway.app) — supports Node + managed MySQL, free tier available.

After deploying, run `node server/seed-data.mjs` via the host shell to populate the database.

---

## Data Honesty

This project explicitly avoids presenting LLM-generated numbers as computed statistics. If you read the source code you will find:

- `VERIFIED_REAL_STATS` block in `seed-data.mjs` separating real from seeded data
- `dataSource: 'seeded-baseline'` flags on non-verified player records
- No speculative ROI, trophy-impact, or absolute injury-risk numbers anywhere in the UI
- Confidence gauges reflect data coverage (65–75%), not model certainty

---

## Background

Built for the **AQX Sports Analytics Data Bowl 2.0** (July 2026). The brief was open — any sport, any analytical angle. Football was chosen for data availability and the richness of multi-dimensional player evaluation (offensive output, defensive contribution, physical workload, financial efficiency).

---

## License

MIT
