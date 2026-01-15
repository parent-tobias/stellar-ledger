# Stellar Ledger

**A 30-day journey building an educational accounting game on the SpaceTraders API**

Stellar Ledger is a space trading game that teaches accounting fundamentals through gameplay. Trade goods across star systems, manage your fleet, and learn double-entry bookkeeping, profit & loss statements, and balance sheets along the way.

## What & Why

### The Game

An interactive space trading experience where:
- **Trade goods** across systems using the [SpaceTraders API](https://spacetraders.io)
- **Manage your fleet** with automated trade routes ("milk runs")
- **Learn accounting** through integrated ledgers, financial statements, and educational overlays
- **Track your history** with persistent market data and captain's logs

**Target audience**: Anyone who wants to understand basic accounting and financial literacy through gamification.

### The Build Series

This is also a public coding journey demonstrating:
- **Domain-driven design** with web components
- **Real-world SvelteKit** development patterns
- **Building in public** with daily documentation
- **API-based game** architecture

**Target audience**: Intermediate developers interested in modern web development, business domain modeling, or building API-driven applications.

**Article series**: *(Coming soon - link to Dev.to series will be added here)*

## Tech Stack

- **Frontend**: SvelteKit + TypeScript
- **Components**: Svelte components + vanilla Custom Web Components for domain boundaries
- **State**: Svelte stores + IndexedDB (local-first)
- **Backend**: SpaceTraders API (stateless)
- **Persistence**: IndexedDB (local) + Supabase (cloud sync)
- **Styling**: Scoped CSS
- **Testing**: Vitest
- **Tooling**: pnpm, ESLint, Prettier

## Domain Architecture

The app is organized around four domain boundaries, each implemented as a vanilla Custom Element:

1. **`<ledger-view>`** - Accounting domain (double-entry bookkeeping, T-accounts, financial statements)
2. **`<market-tracker>`** - Economics domain (price history, trade opportunities, analytics)
3. **`<fleet-manager>`** - Operations domain (ship status, route planning, automation)
4. **`<captain-log>`** - Narrative domain (event history, achievements, storytelling)

## Features

### Completed ✓
- [x] Day 1: Project setup and tooling configuration

### In Progress 🚧
- [ ] SpaceTraders API integration
- [ ] Basic trading mechanics
- [ ] Transaction recording

### Planned 📋
- [ ] Double-entry accounting ledger
- [ ] Profit & Loss statements
- [ ] Balance sheets
- [ ] Market history tracking
- [ ] Fleet automation
- [ ] Cloud sync with Supabase
- [ ] Tutorial system

See the full [30-day plan](local-docs/PROJECT_PLAN.md) for detailed milestones.

## Getting Started

### Prerequisites

- Node.js 18.x or higher (20.x LTS recommended)
- pnpm (install with `npm install -g pnpm`)

### Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Open in browser
# Navigate to http://localhost:5173
```

### Code Quality

```bash
# Run linter
pnpm run lint

# Format code
pnpm run format

# Run tests
pnpm run test:unit
```

## Project Structure

```
stellar-ledger/
├── src/
│   ├── routes/              # SvelteKit file-based routing
│   ├── lib/
│   │   ├── api/            # SpaceTraders API client
│   │   ├── storage/        # IndexedDB + Supabase
│   │   └── accounting/     # Ledger logic
│   └── web-components/     # Vanilla Custom Elements
├── static/                  # Static assets
├── tests/                   # Vitest tests
└── local-docs/             # Project documentation
    ├── PROJECT_PLAN.md     # Full 30-day breakdown
    └── daily-logs/         # Daily progress logs
```

## Following Along

This project uses **git tags** for easy navigation:

```bash
# Checkout a specific day's state
git checkout day-01

# See what changed between days
git diff day-01..day-02

# List all days
git tag
```

Each day is also documented in `local-docs/daily-logs/` with step-by-step instructions.

## License

MIT

## Acknowledgments

- Built on the [SpaceTraders API](https://spacetraders.io) by [Joel Brubaker](https://github.com/SpaceTraders)
- Powered by [SvelteKit](https://kit.svelte.dev)
- Inspired by the "learning in public" movement
