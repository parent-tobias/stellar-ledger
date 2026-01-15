# Stellar Ledger: 20-Day Build Plan

**Project**: Educational accounting game built on SpaceTraders API
**Format**: 60-90 minutes of development per weekday (Monday-Friday)
**Timeline**: 4 weeks, 5 days per week
**Documentation**: Daily logs with technical deep-dives and lessons learned

---

## Core Objectives

### For the Game
- Playable space trading experience using SpaceTraders API
- Integrated accounting education (ledgers, P&L, balance sheets)
- Persistent history and analytics (market tracking, captain's logs)
- Fleet automation ("milk runs" and route management)
- Local-first with cloud sync (IndexedDB + Supabase)

### For the Build Series
- Demonstrate domain-driven design with web components
- Show real-world SvelteKit development
- Document architectural decisions and trade-offs
- Provide a template for "building in public"
- Create reusable patterns for API-based games

---

## Technical Architecture

### Stack
- **Frontend**: SvelteKit + TypeScript
- **Components**: Svelte components + vanilla Custom Web Components for domain boundaries
- **Styling**: Scoped CSS (may add Tailwind later if needed)
- **State**: Svelte stores + IndexedDB
- **Backend**: SpaceTraders API (stateless)
- **Persistence**: IndexedDB (local) + Supabase (remote)
- **Testing**: Vitest for unit tests
- **Tooling**: pnpm, ESLint, Prettier

### Domain Boundaries (Web Components)

1. **`<ledger-view>`**: Accounting domain
   - Double-entry bookkeeping
   - Transaction history
   - Account balances
   - Educational overlays explaining debits/credits

2. **`<market-tracker>`**: Economics domain
   - Price history charts
   - Trade opportunity identification
   - Supply/demand analytics

3. **`<fleet-manager>`**: Operations domain
   - Ship status and locations
   - Route planning
   - Automation configuration

4. **`<captain-log>`**: Narrative domain
   - Event history
   - Achievements
   - Storytelling elements

---

## 20-Day Breakdown

### Week 1: Foundation & API Integration (Days 1-5)

**Goal**: Get the core game loop working - fetch data from SpaceTraders, display it, and persist locally.

#### Day 1: Project Setup ✓
- SvelteKit initialization with TypeScript
- Tooling configuration (ESLint, Prettier, Vitest)
- Project structure and git setup
- Exclude documentation from linting/formatting
- **Learning**: Development environment setup, pnpm benefits
- **Time**: 60-90 minutes

#### Day 2: SpaceTraders API & Authentication
- Register for API token
- Understand API structure (agents, ships, contracts, systems)
- Create basic API client with TypeScript types
- Implement authentication flow
- Display agent info in UI
- **Learning**: API client patterns, TypeScript type generation, token management
- **Accounting**: Introduction to "accounts" and "agents"
- **Time**: 90 minutes

#### Day 3: Ships & Navigation UI
- Fetch and display ships
- Create ship detail views
- Build navigation structure (Dashboard, Ships, Markets, Ledger)
- SvelteKit layouts and routing
- **Learning**: File-based routing, layouts, component composition
- **Accounting**: Assets (ships) as the first account type
- **Time**: 90 minutes

#### Day 4: Markets & Trading
- Fetch market data and display goods/prices
- Build buy/sell interface
- Implement trading logic with API
- Handle inventory management
- **Learning**: Form handling, optimistic updates, error handling
- **Accounting**: First real transactions (purchases and sales)
- **Time**: 90 minutes

#### Day 5: IndexedDB & Transaction Recording
- Install Dexie.js (IndexedDB wrapper)
- Create database schema for game state
- Store all trades as transactions locally
- Transaction history view
- **Learning**: Local-first architecture, IndexedDB patterns
- **Accounting**: Transaction logs as foundation of accounting
- **Time**: 90 minutes

---

### Week 2: Core Accounting Features (Days 6-10)

**Goal**: Build the accounting domain - ledgers, double-entry bookkeeping, and financial statements.

#### Day 6: Basic Ledger
- Design ledger data structure
- Simple ledger view (list of transactions)
- Account balance calculation
- Filtering and sorting
- **Learning**: Data aggregation, state management
- **Accounting**: Ledger structure, running balances, chart of accounts
- **Time**: 90 minutes

#### Day 7: Double-Entry Bookkeeping
- Implement double-entry transaction recording
- Create debits and credits for each trade
- Account categories (Assets, Liabilities, Equity, Revenue, Expenses)
- Validate accounting equation
- **Learning**: Domain modeling, business logic
- **Accounting**: Double-entry fundamentals, accounting equation
- **Time**: 90 minutes

#### Day 8: `<ledger-view>` Component (Part 1)
- Build vanilla web component structure
- T-account visualization
- Debits and credits display
- Component properties and events
- **Learning**: Web Components API, Custom Elements from scratch
- **Accounting**: T-accounts, visual representation
- **Time**: 90 minutes

#### Day 9: `<ledger-view>` Component (Part 2)
- Educational tooltips and overlays
- Interactive learning elements
- Color coding and visual hierarchy
- Integration with Svelte app
- **Learning**: Accessible UI patterns, progressive disclosure
- **Accounting**: Teaching debits/credits interactively
- **Time**: 90 minutes

#### Day 10: Profit & Loss Statement
- Calculate revenue and expenses from ledger
- Period selection (daily, weekly, all-time)
- Display formatted P&L statement
- Gross profit vs net profit
- **Learning**: Financial calculations, date ranges
- **Accounting**: P&L structure, profitability metrics
- **Time**: 90 minutes

---

### Week 3: Domain Components & Analytics (Days 11-15)

**Goal**: Complete the core web components and add market analytics.

#### Day 11: Balance Sheet
- Calculate Assets, Liabilities, Equity
- Balance sheet display and formatting
- Validate accounting equation (A = L + E)
- Compare across time periods
- **Learning**: Financial statement relationships
- **Accounting**: Balance sheet fundamentals
- **Time**: 90 minutes

#### Day 12: Market History Tracking
- Store price history over time
- Time-series data structure in IndexedDB
- Price tracking background process
- Historical data aggregation
- **Learning**: Time-series data, efficient storage
- **Accounting**: Market-to-market accounting
- **Time**: 90 minutes

#### Day 13: `<market-tracker>` Component
- Build vanilla web component for market data
- Price history charts (Canvas or SVG)
- Trend indicators
- Trade opportunity alerts
- **Learning**: Data visualization, charting fundamentals
- **Time**: 90 minutes

#### Day 14: Fleet Automation (Part 1)
- Route definition interface
- Waypoint sequencing
- Basic automation logic
- Save routes to IndexedDB
- **Learning**: State machines, task scheduling
- **Accounting**: Automated transaction recording
- **Time**: 90 minutes

#### Day 15: `<fleet-manager>` Component
- Build vanilla web component for fleet operations
- Ship assignment to routes
- Route execution and monitoring
- Status updates and error handling
- **Learning**: Real-time updates, component communication
- **Time**: 90 minutes

---

### Week 4: Polish & Deployment (Days 16-20)

**Goal**: Add finishing touches, sync capabilities, and deploy the application.

#### Day 16: Captain's Log & `<captain-log>` Component
- Event capture system
- Rich log entries (text + metadata)
- `<captain-log>` web component
- Timeline visualization
- **Learning**: Event logging patterns, timeline UI
- **Accounting**: Audit trail, historical record keeping
- **Time**: 90 minutes

#### Day 17: Supabase Integration
- Supabase project setup
- Database schema for cloud storage
- Authentication integration
- Sync transactions and game state
- **Learning**: BaaS platforms, cloud sync patterns
- **Time**: 90 minutes

#### Day 18: Tutorial & Onboarding
- First-time user experience
- Guided tour of accounting concepts
- Interactive tutorial missions
- Progressive disclosure of features
- **Learning**: User onboarding patterns, UX design
- **Time**: 90 minutes

#### Day 19: Testing & Bug Fixes
- Write unit tests for critical paths
- Test accounting logic thoroughly
- Bug fixes from manual testing
- Performance profiling
- **Learning**: Testing strategies, debugging techniques
- **Time**: 90 minutes

#### Day 20: Deployment & Retrospective
- Deploy to Vercel/Netlify
- Production configuration
- Final polish and optimizations
- Write comprehensive retrospective
- **Learning**: Deployment strategies, lessons from 20 days
- **Time**: 90 minutes

---

## Key Milestones

- **Day 3**: Ships and navigation visible
- **Day 5**: Core trading loop working with persistence
- **Day 10**: All major financial statements functional
- **Day 15**: All four domain web components complete
- **Day 17**: Cloud sync operational
- **Day 20**: Fully deployed and documented

---

## Accounting Concepts Coverage

### Foundational (Days 1-5)
- What is accounting?
- Accounts and entities
- Record-keeping importance
- Transactions and journals

### Core Accounting (Days 6-10)
- Ledger structure
- Double-entry bookkeeping
- Debits and credits
- T-accounts
- Chart of accounts
- Profit & Loss statement

### Financial Statements (Days 11-12)
- Balance sheet
- Accounting equation
- Market-to-market accounting

### Advanced (Days 13-20)
- Automation in accounting
- Audit trails
- Financial analysis
- Historical trends

---

## Weekly Rhythm

Each week follows a pattern:

**Monday-Thursday**: Build features, document progress
**Friday**: Week's capstone feature + weekly wrap-up post
**Weekend**: Rest, write blog posts, plan next week

This gives you:
- Consistent weekday development rhythm
- Natural break points every week
- Recovery time for motivation
- Better work-life balance

---

## Success Criteria

By Day 20, we should have:

**Functional Requirements**:
- [x] Playable game with SpaceTraders API integration
- [x] All 4 domain web components fully functional
- [x] Working ledger with transaction history
- [x] P&L and Balance Sheet generation
- [x] Market history tracking
- [x] Fleet automation with at least one route type
- [x] Supabase sync working
- [x] Deployed and accessible

**Educational Requirements**:
- [x] Clearly explains 5+ accounting concepts
- [x] Interactive learning moments
- [x] Glossary or help system

**Documentation Requirements**:
- [x] 20 detailed daily logs
- [x] 4 weekly milestone docs
- [x] Comprehensive README
- [x] Architecture decision records
- [x] Deployment guide

**Code Quality**:
- [x] TypeScript throughout
- [x] Linting passes
- [x] Key functionality tested
- [x] Reasonable component structure

---

## Post-20-Day Ideas

Features to consider after the core 20 days:

- Multi-agent support (multiple game accounts)
- Social features (share captain's logs)
- Advanced automation (AI-driven trading)
- More accounting concepts (depreciation, accruals, financial ratios)
- Multiplayer elements
- Mobile app (Svelte Native or PWA)
- Teacher dashboard (if used in classrooms)
- Contract system from SpaceTraders API
- Mining and refining mechanics

---

## Risk Mitigation

### Scope Management
- Stick to 60-90 minutes per weekday
- If a feature takes longer, simplify or split
- Defer nice-to-haves to "post-20-day" backlog
- Be flexible with the plan if something goes faster/slower

### Technical Unknowns
- **SpaceTraders API reliability**: Have fallback mock data ready
- **Web Components complexity**: Start simple, add complexity gradually
- **Supabase learning curve**: Use Day 17 for focused exploration

### Motivation Management
- Weekends off prevent burnout
- Weekly milestones provide frequent wins
- Public accountability through blog posts
- Each week has a clear "victory" feature

### Time Management
- Pre-read API docs the evening before
- Have a clear plan for each day (this document)
- Set a timer to avoid rabbit holes
- It's okay to finish early - document what you learned

---

## Documentation Structure

```
local-docs/
├── PROJECT_PLAN.md           # This file - master plan
├── CONVERSATION_CONTEXT.md   # Project context and decisions
├── DAILY_LOG_TEMPLATE.md     # Template for blog posts
├── weekly-milestones/
│   ├── week-01.md           # Week 1 overview and goals
│   ├── week-02.md           # Week 2 overview and goals
│   ├── week-03.md           # Week 3 overview and goals
│   └── week-04.md           # Week 4 overview and goals
└── daily-logs/
    ├── day-01.md            # Detailed task list for Day 1
    ├── day-02.md            # Detailed task list for Day 2
    ├── ...
    └── day-20.md            # Detailed task list for Day 20
```

---

**Document Status**: Living document, will update as we progress
**Last Updated**: Day 1 (Restructured to 20-day weekday format)
**Format Change**: From 30 consecutive days to 20 weekdays (4 weeks, Mon-Fri)
