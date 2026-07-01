# SportMind - AI Multi-Agent Sports Intelligence Platform

## Overview

**SportMind** is a cutting-edge AI-powered football analytics platform designed for the AQX Sports Analytics Data Bowl 2.0 hackathon. It combines six specialized AI agents with advanced machine learning models to deliver evidence-backed, actionable insights for professional football teams.

The platform features a "war room" aesthetic with an immersive dark-themed interface, real-time multi-agent analysis, interactive visualizations, and natural language query capabilities.

## Key Features

### 🤖 Six Specialized AI Agents

Each agent operates independently, then synthesizes insights through the Executive Agent:

1. **Scout Agent** - Identifies undervalued players and hidden talent
2. **Performance Agent** - Analyzes form trends and predicts improvement/decline
3. **Tactics Agent** - Recommends formations and optimizes lineups
4. **Injury Agent** - Assesses workload and estimates injury risk
5. **Finance Agent** - Evaluates salary efficiency and transfer value
6. **Executive Agent** - Synthesizes all insights into final recommendations with confidence scores

### 📊 Interactive Visualizations

All powered by Recharts for real-time interactivity:

- **Performance Timeline** - Track player form over 10-week periods
- **Player Attributes Radar** - Compare player stats across 6 dimensions
- **Salary vs Performance Scatter** - Identify undervalued players
- **Fatigue & Workload Chart** - Monitor player recovery needs
- **Confidence Gauge** - Visual representation of analysis confidence
- **Win Contribution Chart** - Show player impact on team success

### 🎯 Mission Control Dashboard

Intuitive interface for triggering multi-agent analysis:

- League, team, budget, and objective selectors
- Real-time agent panel updates with animated loading states
- Executive summary with tradeoff explanations
- Full result visualization grid

### 💬 Natural Language Query Interface

Ask questions like:
- "Find defenders under 24 who are undervalued"
- "Which players have the highest injury risk?"
- "Recommend a formation for maximum attacking potential"
- "Who are the most salary-efficient players?"

### 🎬 Scenario Simulator

"What-if" engine for testing different strategies:
- Injury scenarios
- Transfer scenarios
- Budget adjustments
- Formation changes

## Technical Architecture

### Backend Stack

- **Framework**: Express.js + tRPC
- **Database**: MySQL/TiDB with Drizzle ORM
- **AI/LLM**: Manus Built-in LLM API
- **ML Models**: XGBoost-inspired performance prediction
- **Authentication**: Manus OAuth

### Frontend Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Charts**: Recharts
- **UI Components**: shadcn/ui + Radix UI

### Database Schema

```
- users: Authentication and user profiles
- teams: Football teams across leagues
- players: Player profiles with attributes
- playerMetrics: Performance metrics and statistics
- playerWorkload: Fatigue and injury risk tracking
- analyses: Analysis records and results
- queries: Natural language query history
- scenarios: "What-if" scenario simulations
```

## ML Models & Analytics

### Performance Prediction

XGBoost-inspired model predicting player performance based on:
- Historical form and consistency
- Physical attributes (pace, strength)
- Tactical positioning
- Workload and fatigue levels

### Salary Efficiency Scoring

Calculates value-for-money metric:
- Performance-to-salary ratio
- Age and potential trajectory
- Market comparables
- Injury history

### Fatigue & Injury Risk Estimation

Comprehensive workload analysis:
- Minutes played per week
- Recovery time between matches
- Historical injury patterns
- Intensity of recent performances

### Tactical Formation Optimizer

Recommends optimal lineups based on:
- Player positions and strengths
- Current form and fitness
- Tactical requirements
- Fatigue considerations

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm 10+
- MySQL/TiDB database

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
# (Automatically injected by Manus platform)

# Run database migrations
pnpm drizzle-kit generate
pnpm drizzle-kit migrate

# Seed sample data
node server/seed-data-fast.mjs

# Start development server
pnpm dev

# Build for production
pnpm build
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test server/auth.logout.test.ts
```

## Usage

### 1. Landing Page

Visit the home page to see:
- Animated hero section with gradient effects
- Six agent cards with descriptions
- Platform capabilities overview
- "Enter War Room" CTA button

### 2. Mission Control Dashboard

1. Select a league and team
2. Set budget constraints
3. Choose analysis objective
4. Click "Analyze"
5. Watch six agents think in real-time
6. Review executive recommendation
7. Explore interactive visualizations

### 3. Natural Language Queries

1. Navigate to Query Interface
2. Ask any question about player analysis
3. View AI-powered response with reasoning
4. Explore example queries for inspiration

### 4. Scenario Simulator

1. Create a "what-if" scenario
2. Adjust parameters (injuries, transfers, budget)
3. View impact on team performance
4. Compare with baseline analysis

## API Endpoints

### Analysis Pipeline

```typescript
POST /api/trpc/analysis.analyze
{
  teamId: number
  budget: number
  objective: string
  league: string
}
```

### Natural Language Queries

```typescript
POST /api/trpc/query.ask
{
  question: string
  teamId: number
  budget: number
}
```

### Data Endpoints

```typescript
GET /api/trpc/data.getLeagues
GET /api/trpc/data.getObjectives
GET /api/trpc/teams.getByLeague
GET /api/trpc/players.getByTeam
```

## Project Structure

```
sportmind/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx              # Landing page
│   │   │   ├── MissionControl.tsx    # Analysis dashboard
│   │   │   └── QueryInterface.tsx    # Natural language queries
│   │   ├── components/
│   │   │   ├── AgentPanel.tsx        # Agent insight display
│   │   │   ├── AnalysisVisualizations.tsx  # Recharts components
│   │   │   └── DashboardLayout.tsx   # Layout wrapper
│   │   ├── lib/
│   │   │   └── trpc.ts              # tRPC client
│   │   └── App.tsx                  # Router setup
│   └── index.html
├── server/
│   ├── ai-agents.ts                 # Six specialized agents
│   ├── ml-models.ts                 # ML/analytical functions
│   ├── db.ts                        # Database queries
│   ├── routers.ts                   # tRPC procedures
│   └── seed-data-fast.mjs           # Sample data seeding
├── drizzle/
│   ├── schema.ts                    # Database schema
│   └── migrations/                  # Migration files
└── references/
    ├── llm-integration.md           # LLM API usage
    ├── file-storage.md              # S3 storage
    └── periodic-updates.md          # Scheduled tasks
```

## Design Philosophy

### "War Room" Aesthetic

- Dark theme with blue/purple gradients
- Animated elements communicate active thinking
- Data-dense but organized layout
- High-contrast text for readability
- Smooth transitions and micro-interactions

### Agent-Centric Design

- Each agent operates independently
- Visible "thinking" states during analysis
- Confidence scores indicate reliability
- Executive synthesis provides final recommendation
- Tradeoff explanations show reasoning

### User Experience

- Intuitive form-based input
- Real-time feedback during analysis
- Multiple query interfaces (structured + natural language)
- Interactive visualizations for exploration
- Export capabilities for reporting

## Performance Considerations

- **Database**: Indexed queries on frequently accessed fields
- **Frontend**: Code splitting and lazy loading
- **Charts**: Recharts optimized for large datasets
- **LLM**: Streaming responses for real-time feedback
- **Caching**: Query results cached for repeated analyses

## Future Enhancements

- [ ] Real-time match data integration
- [ ] Video analysis with computer vision
- [ ] Player transfer market predictions
- [ ] Injury prediction with medical data
- [ ] Multi-team comparison analysis
- [ ] Custom model training on team data
- [ ] Mobile app version
- [ ] Advanced scenario branching
- [ ] Collaborative team features
- [ ] API for third-party integrations

## Deployment

### Manus Platform

The application is deployed on Manus with:
- Autoscale serverless hosting
- Custom domain support
- Built-in analytics
- Automatic SSL/TLS
- Database backup and recovery

### Environment Variables

All environment variables are automatically injected:
- `DATABASE_URL`: MySQL connection string
- `BUILT_IN_FORGE_API_KEY`: LLM API key
- `JWT_SECRET`: Session signing secret
- `VITE_APP_ID`: OAuth application ID

## Testing

### Unit Tests

```bash
pnpm test server/auth.logout.test.ts
```

### Integration Tests

Test the full analysis pipeline:
1. Create analysis with test data
2. Verify agent responses
3. Check visualization data
4. Validate database records

### E2E Tests

Test user flows:
1. Landing page navigation
2. Mission Control analysis
3. Query interface
4. Scenario simulation

## Contributing

This project was built for the AQX Sports Analytics Data Bowl 2.0 hackathon. Contributions are welcome!

## License

MIT License - See LICENSE file for details

## Support

For questions or issues, please contact the development team or submit an issue on the project repository.

---

**Built with ❤️ for the AQX Sports Analytics Data Bowl 2.0**

Experience the future of football analytics with SportMind.
