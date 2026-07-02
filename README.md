# ⚽ SportMind

*What if a football club's entire analytics department fit in a browser tab?*

[![Live](https://img.shields.io/badge/Live-sportmind.onrender.com-00d4aa?style=for-the-badge)](https://sportmind.onrender.com)
[![Code](https://img.shields.io/badge/Code-asmii27/sportmind-181717?style=for-the-badge&logo=github)](https://github.com/asmii27/sportmind)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

</div>

---

SportMind deploys six AI agents — Scout, Performance, Tactics, Injury, Finance, and Executive — each analyzing a different dimension of your football squad. They think independently, then the Executive Agent reads all five reports and delivers a single, synthesized recommendation with honest risk assessment.

The twist: none of the agents are allowed to make up numbers. Every figure they analyze — goals per 90, salary efficiency, workload index — is computed from a formula before the AI ever sees it. The agents do what analysts actually do: they interpret data and argue for a conclusion. The math is done separately, transparently, and documented on the [Methodology page](https://sportmind.onrender.com/methodology) for anyone to verify.

---

## See it in action

**[sportmind.onrender.com](https://sportmind.onrender.com)**

Pick Real Madrid, Arsenal, Liverpool, Barcelona, or Manchester City. Set a budget. Choose an objective. Watch the war room come alive.

---

## The agents

| | Agent | Specialty |
|-|-------|-----------|
| 🧠 | Scout | Talent gaps, transfer targets, market value |
| 📈 | Performance | Form trends, statistical over/underperformance |
| ⚙️ | Tactics | Formation optimization, lineup selection |
| 🛡️ | Injury | Fatigue index, workload management |
| 💰 | Finance | Salary efficiency, wage-to-output ratio |
| ⚡ | Executive | Synthesizes all five into one recommendation |

---

## The analytics

All metrics use explicit, auditable formulas. Full documentation on the [Methodology page](https://sportmind.onrender.com/methodology).

```
Goals Per 90 — Z-Score
─────────────────────────────────────────────
Z = (Goals/90 − positional mean) / std dev

Strikers compared to strikers. Wingers to wingers.
A positive score means genuinely above average — not just above the league mean.
```

```
Salary Efficiency
─────────────────────────────────────────────
Efficiency = Predicted Performance / (Salary / Market Value)

Finds players giving more than their contract suggests they should.
```

```
Workload Index
─────────────────────────────────────────────
Workload = Recent Minutes (last 5) / Season Average Minutes

Relative to each player's own baseline.
Haaland playing 90 minutes isn't comparable to a squad player doing the same.
```

### Real numbers in this build

| Player | G | A | Apps | Source |
|--------|---|---|------|--------|
| Erling Haaland | 27 | 5 | 31 | Premier League official — 2023-24 Golden Boot |
| Mohamed Salah | 18 | 9 | 34 | Liverpool FC official |
| Bukayo Saka | 16 | 9 | 35 | StatMuse + Arsenal official |

Remaining squad data uses seeded baselines within realistic ranges. Disclosed on the Methodology page and flagged in source code.

---

## What you get

- A war room interface that makes analytics feel like mission control
- Six agent panels that animate through the thinking process in real time
- Charts that use real player names — not "P1, P2, P3"
- A Player Comparison Matrix with head-to-head attribute breakdowns
- A natural language query interface for plain-English questions
- A what-if scenario simulator for transfers, injuries, and budget shifts
- A Methodology page that shows every formula with a worked example

---

## Honesty section

Confidence gauges in SportMind read 65–75%, not 90+. That's intentional.

Three players have verified real stats. The rest use seeded baselines. The app says so — on the Methodology page, in the source code comments, and in the confidence gauge values themselves. No ROI projections. No trophy counts. No numbers that can't be traced to a formula.

If a judge, coach, or analyst checks one figure against a real source and finds it wrong, the whole system loses credibility. That's the design constraint that shaped everything here.

---

## 🛠️ Tech Stack

**Frontend**
- React 19 + TypeScript + Vite
- Tailwind CSS + Framer Motion
- Recharts + shadcn/ui

**Backend**
- Express.js + tRPC
- MySQL + Drizzle ORM
- Anthropic Claude API

---

##  Getting Started

**Prerequisites:** Node.js 20+, MySQL database, Anthropic API key

```bash
# Clone
git clone https://github.com/asmii27/sportmind.git
cd sportmind

# Install
npm install --legacy-peer-deps

# Environment
cp .env.example .env
# Add: DATABASE_URL, ANTHROPIC_API_KEY

# Database
npx drizzle-kit generate
npx drizzle-kit migrate
node server/seed-data.mjs

# Run
npm run dev
# → http://localhost:3000
```

---

## 📁 Project Structure

```
sportmind/
├── client/src/
│   ├── pages/
│   │   ├── Home.tsx               # Landing page
│   │   ├── MissionControl.tsx     # Analysis dashboard
│   │   ├── QueryInterface.tsx     # Natural language queries
│   │   ├── ScenarioSimulator.tsx  # What-if scenarios
│   │   └── Methodology.tsx        # Formula documentation
│   └── components/
│       ├── AnalysisVisualizations.tsx
│       └── PlayerComparisonMatrix.tsx
├── server/
│   ├── ai-agents.ts               # Six agent pipeline
│   ├── ml-models.ts               # Statistical formulas
│   ├── demo-data.ts               # Pre-computed demo results
│   └── seed-data.mjs              # Database seeding (real stats)
└── drizzle/schema.ts              # Database schema
```

---

## Built for

AQX Sports Analytics Data Bowl 2.0 · July 2026

---

<div align="center">

[Live Demo](https://sportmind.onrender.com) · [Methodology](https://sportmind.onrender.com/methodology) · [GitHub](https://github.com/asmii27/sportmind)
