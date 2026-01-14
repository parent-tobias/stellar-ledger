# Stellar Ledger

**A 30-Day Coding Journey: Building an Educational Accounting Game on SpaceTraders**

## Vision

Stellar Ledger combines the [SpaceTraders API](https://spacetraders.io) gameplay with hands-on accounting education. Players explore space, trade goods, and manage fleets while learning fundamental accounting concepts: ledgers, P&L statements, debits vs credits, and financial literacy.

This is both:
- **A playable game**: Engaging space trading with persistent history, market tracking, and fleet automation
- **A public build series**: 30 days of development, documented daily with lessons learned and architectural insights

## Tech Stack

- **SvelteKit**: Application framework and routing
- **TypeScript**: Type safety and developer experience
- **Custom Web Components**: Domain-driven design with portable vanilla components
- **IndexedDB**: Local-first storage for offline capability
- **Supabase**: Remote persistence for cross-device sync and historical data
- **SpaceTraders API**: Stateless game backend

## Architecture Principles

### Domain Boundaries

The application is organized around bounded contexts, implemented as Custom Web Components:

- `<ledger-view>`: Accounting domain (double-entry bookkeeping, transactions)
- `<market-tracker>`: Economics domain (price history, trend analysis)
- `<fleet-manager>`: Operations domain (ships, routes, automation)
- `<captain-log>`: Narrative domain (history, storytelling)

### Storage Strategy

```
Player Action → SpaceTraders API → Response
                      ↓
                Store in IndexedDB
                      ↓
                Sync to Supabase
                      ↓
           Generate Accounting Entries
                      ↓
              Update Ledger Views
```

## 30-Day Journey

Each day represents 60-90 minutes of development work. Full progress tracked with git tags (`day-01`, `day-02`, etc.) and detailed daily logs.

### Week 1: Foundation (Days 1-7)
- [Day 1](local-docs/daily-logs/day-01.md): Project setup, SvelteKit initialization
- Day 2: SpaceTraders API exploration and client setup
- Day 3: Basic routing and navigation
- Day 4: IndexedDB integration
- Day 5: First web component
- Day 6: Authentication flow
- Day 7: Agent and ship management UI

### Week 2: Core Gameplay (Days 8-14)
- Days 8-9: Navigation and travel mechanics
- Days 10-11: Trading system
- Day 12: Supabase integration
- Days 13-14: Basic accounting ledger

### Week 3: Domain Components (Days 15-21)
- Days 15-16: `<ledger-view>` component
- Days 17-18: Market tracking and history
- Days 19-20: P&L and balance sheet views
- Day 21: Transaction categorization teaching UI

### Week 4: Advanced Features + Polish (Days 22-30)
- Days 22-24: Fleet automation and "milk runs"
- Days 25-26: Captain's logs
- Day 27: Tutorial and onboarding
- Days 28-29: Testing and bug fixes
- Day 30: Deployment and retrospective

## Learning Objectives

### For Players
- Understand double-entry bookkeeping
- Read and interpret financial statements
- Manage cash flow and budgeting
- Make data-driven business decisions

### For Developers Following Along
- SvelteKit application architecture
- Domain-driven design with web components
- Local-first application patterns
- API integration and state management
- Progressive enhancement strategies
- Building in public methodology

## Getting Started

Full setup instructions coming in Day 1. The project starts from absolute zero—no existing dependencies or configuration.

## Daily Logs

Detailed breakdowns of each day's work, decisions made, and lessons learned are in [local-docs/daily-logs/](local-docs/daily-logs/).

## Repository Navigation

- **Tags**: Each day is tagged (`git checkout day-01`)
- **Diffs**: Compare days with GitHub's compare view
- **Branches**: `main` is always the latest state

## Author

Building in public as an exploration of:
- Game-based education
- Domain-driven architecture
- Modern web development workflows

## License

MIT (to be added on Day 1)

---

**Current Status**: Pre-Day 1 - Repository structure and planning phase
