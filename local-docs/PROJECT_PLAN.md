# Stellar Ledger: 30-Day Build Plan

**Project**: Educational accounting game built on SpaceTraders API
**Format**: 60-90 minutes of development per day
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

## Daily Breakdown

### Week 1: Foundation (Days 1-7)

#### Day 1: Project Setup ✓
- SvelteKit initialization with TypeScript
- Tooling configuration (ESLint, Prettier, Vitest)
- Project structure and git setup
- **Learning**: Development environment setup, pnpm benefits

#### Day 2: SpaceTraders API Exploration
- Register for API token
- Understand API structure (agents, ships, contracts, systems)
- Create basic API client with TypeScript types
- Display agent info in UI
- **Learning**: API client patterns, TypeScript type generation
- **Accounting**: Introduction to the concept of "accounts" and "agents"

#### Day 3: Routing and Navigation
- SvelteKit routing deep-dive
- Create navigation structure (Dashboard, Ships, Markets, Ledger)
- Layout components
- **Learning**: File-based routing, layouts, navigation patterns

#### Day 4: IndexedDB Setup
- Install Dexie.js (IndexedDB wrapper)
- Create database schema for game state
- Implement storage service
- Persist API responses locally
- **Learning**: Local-first architecture, IndexedDB patterns
- **Accounting**: Data persistence as the foundation of record-keeping

#### Day 5: First Web Component
- Build `<ship-card>` as a vanilla Custom Element
- Demonstrate properties, events, slots
- Use it within Svelte
- **Learning**: Web Components 101, Custom Elements API, framework interop

#### Day 6: Authentication Flow
- SpaceTraders token management
- Login/register UI
- Store tokens securely (IndexedDB)
- API client authentication
- **Learning**: Auth patterns, secure token storage

#### Day 7: Ship and Fleet Display
- Fetch and display ships
- Ship detail views
- Fleet overview
- **Learning**: Data fetching patterns, loading states, error handling
- **Accounting**: Assets (ships) as the first account type

---

### Week 2: Core Gameplay (Days 8-14)

#### Day 8: Navigation System (Part 1)
- Fetch waypoints and systems
- Display star map or system list
- Ship location tracking
- **Learning**: Working with spatial data, mapping APIs

#### Day 9: Navigation System (Part 2)
- Implement ship movement
- Travel time calculations
- Fuel management
- **Learning**: Async operations, real-time updates
- **Accounting**: Expenses (fuel costs), asset depreciation concepts

#### Day 10: Market Data
- Fetch market listings
- Display goods and prices
- Market refresh mechanism
- **Learning**: Polling vs webhooks, data freshness
- **Accounting**: Inventory tracking, market value

#### Day 11: Trading Mechanics
- Buy/sell interface
- Inventory management
- Transaction confirmation
- **Learning**: Form handling, validation, optimistic updates
- **Accounting**: First real transactions (purchases and sales)

#### Day 12: Supabase Integration (Part 1)
- Supabase project setup
- Database schema for user data
- Authentication integration
- **Learning**: BaaS platforms, SQL schema design

#### Day 13: Transaction Recording
- Capture all trades as transactions
- Store in IndexedDB and Supabase
- Transaction history view
- **Learning**: Event sourcing concepts, audit trails
- **Accounting**: Transaction logs, the foundation of accounting

#### Day 14: Basic Ledger
- Simple ledger view (list of transactions)
- Filtering and sorting
- Account balance calculation
- **Learning**: Data aggregation, filtering patterns
- **Accounting**: Ledger structure, running balances

---

### Week 3: Accounting Domain (Days 15-21)

#### Day 15: `<ledger-view>` Component (Part 1)
- Build vanilla web component structure
- T-account visualization
- Debits and credits display
- **Learning**: Complex web component state management
- **Accounting**: Double-entry bookkeeping fundamentals

#### Day 16: `<ledger-view>` Component (Part 2)
- Educational tooltips and overlays
- Account categories (Assets, Liabilities, Equity, Revenue, Expenses)
- Color coding and visual hierarchy
- **Learning**: Accessible UI patterns, progressive disclosure
- **Accounting**: Chart of accounts, account types

#### Day 17: Market History Tracking
- Store price history over time
- Time-series data structure
- **Learning**: Time-series data management, efficient storage

#### Day 18: `<market-tracker>` Component
- Price history charts (vanilla Canvas or SVG)
- Trend indicators
- Opportunity alerts
- **Learning**: Data visualization, charting fundamentals
- **Accounting**: Market-to-market accounting

#### Day 19: P&L Statement (Part 1)
- Calculate revenue and expenses
- Period selection (daily, weekly, all-time)
- Display formatted statement
- **Learning**: Financial calculations, date ranges
- **Accounting**: Profit & Loss statement structure

#### Day 20: P&L Statement (Part 2)
- Gross profit vs net profit
- Operating expenses breakdown
- Visual enhancements (charts, comparisons)
- **Accounting**: P&L analysis, profitability metrics

#### Day 21: Balance Sheet
- Assets, Liabilities, Equity calculation
- Balance sheet display
- Accounting equation validation (Assets = Liabilities + Equity)
- **Learning**: Financial statement relationships
- **Accounting**: Balance sheet fundamentals, accounting equation

---

### Week 4: Advanced Features (Days 22-30)

#### Day 22: Fleet Automation (Part 1)
- Route definition interface
- Waypoint sequencing
- Save routes to Supabase
- **Learning**: Complex form state, route planning algorithms

#### Day 23: Fleet Automation (Part 2)
- Automation execution engine
- Background task management
- Route execution with the API
- **Learning**: Task scheduling, state machines
- **Accounting**: Automated transactions, batch processing

#### Day 24: `<fleet-manager>` Component
- Vanilla web component for fleet operations
- Ship assignment to routes
- Status monitoring
- **Learning**: Real-time status updates, component communication

#### Day 25: Captain's Log (Part 1)
- Event capture system
- Rich log entries (text + metadata)
- Store in Supabase
- **Learning**: Event logging patterns, structured data

#### Day 26: Captain's Log (Part 2)
- `<captain-log>` web component
- Timeline visualization
- Search and filtering
- **Learning**: Timeline UI patterns, text search
- **Accounting**: Audit trail, historical record keeping

#### Day 27: Tutorial and Onboarding
- First-time user experience
- Guided tour of accounting concepts
- Interactive tutorial missions
- **Learning**: User onboarding patterns, progressive disclosure

#### Day 28: Testing and Refinement
- Unit tests for critical paths
- Accounting logic tests
- Bug fixes from manual testing
- **Learning**: Testing strategies, test-driven fixes

#### Day 29: Polish and Performance
- Performance profiling
- Optimize IndexedDB queries
- UI polish and animations
- **Learning**: Performance optimization, profiling tools

#### Day 30: Deployment and Retrospective
- Deploy to Vercel/Netlify
- Production configuration
- Write comprehensive retrospective
- **Learning**: Deployment strategies, lessons from 30 days

---

## Key Milestones

- **Day 5**: First web component working
- **Day 11**: Playable core loop (trade and profit)
- **Day 14**: Basic accounting visible
- **Day 21**: All major financial statements
- **Day 26**: Full feature set complete
- **Day 30**: Deployed and documented

---

## Accounting Concepts Coverage

### Foundational (Days 1-7)
- What is accounting?
- Accounts and entities
- Record-keeping importance

### Transactional (Days 8-14)
- Transactions and journals
- Ledger structure
- Running balances

### Double-Entry (Days 15-17)
- Debits and credits
- T-accounts
- Chart of accounts

### Financial Statements (Days 18-21)
- Profit & Loss (Income Statement)
- Balance Sheet
- Accounting equation

### Advanced (Days 22-30)
- Automation in accounting
- Audit trails
- Financial analysis

---

## Risk Mitigation

### Scope Creep Prevention
- Stick to 60-90 minutes per day
- If a feature takes longer, split across days
- Defer nice-to-haves to "post-30-day" backlog

### Technical Unknowns
- **SpaceTraders API reliability**: Have fallback mock data
- **Web Components complexity**: Start simple, add complexity gradually
- **Supabase learning curve**: Use Day 12 for pure exploration if needed

### Time Management
- Pre-read API docs the night before
- Have a clear plan for each day (like this document)
- Set a timer to avoid rabbit holes

---

## Success Criteria

By Day 30, we should have:

**Functional Requirements**:
- [ ] Playable game with SpaceTraders API integration
- [ ] At least 3 domain web components fully functional
- [ ] Working ledger with transaction history
- [ ] P&L and Balance Sheet generation
- [ ] Market history tracking
- [ ] Fleet automation with at least one route type
- [ ] Supabase sync working
- [ ] Deployed and accessible

**Educational Requirements**:
- [ ] Clearly explains 5+ accounting concepts
- [ ] Interactive learning moments
- [ ] Glossary or help system

**Documentation Requirements**:
- [ ] 30 detailed daily logs
- [ ] Comprehensive README
- [ ] Architecture decision records
- [ ] Deployment guide

**Code Quality**:
- [ ] TypeScript throughout
- [ ] Linting passes
- [ ] Key functionality tested
- [ ] Reasonable component structure

---

## Post-30-Day Ideas

Features to consider after the core 30 days:

- Multi-agent support (multiple game accounts)
- Social features (share captain's logs)
- Advanced automation (AI-driven trading)
- More accounting concepts (depreciation, accruals, financial ratios)
- Multiplayer elements
- Mobile app (Svelte Native or PWA)
- Teacher dashboard (if used in classrooms)

---

**Document Status**: Living document, will update as we progress
**Last Updated**: Day 0 (Pre-journey planning)
