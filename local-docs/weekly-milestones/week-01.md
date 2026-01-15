# Week 1: Foundation & API Integration

**Days**: 1-5 (Monday-Friday)
**Goal**: Get the core game loop working - fetch data from SpaceTraders, display it, and persist locally.

---

## Overview

This week we're building the foundation of Stellar Ledger. By Friday, you should be able to:
- ✅ Start the dev server and see a working UI
- ✅ Register with SpaceTraders API and authenticate
- ✅ View your ships and their status
- ✅ Browse markets and execute trades
- ✅ See your transaction history stored locally

This is the "make it work" phase. We're focusing on functionality over polish, and proving the core game loop is viable.

---

## Weekly Learning Themes

### Technical Skills
- **SvelteKit fundamentals**: Routing, layouts, data loading
- **API integration**: REST clients, TypeScript types, error handling
- **Local persistence**: IndexedDB patterns with Dexie.js
- **State management**: Svelte stores and reactive patterns

### Accounting Concepts
- **Accounts and entities**: The agent as the accounting entity
- **Assets**: Ships as tangible assets
- **Transactions**: Every trade is a financial event
- **Record-keeping**: Why we capture every transaction

---

## Daily Breakdown

### Day 1 (Monday): Project Setup ✓
**Status**: Complete
**Time**: 60-90 minutes

**What we built**:
- SvelteKit project with TypeScript
- ESLint, Prettier, Vitest configuration
- Git repository and initial commit
- Documentation exclusions

**Key decisions**:
- Using pnpm for package management
- Flat ESLint config (modern approach)
- Minimal template (building from scratch)

**Deliverable**: Working dev server, tooling configured

---

### Day 2 (Tuesday): SpaceTraders API & Authentication
**Time**: 90 minutes

**What we'll build**:
- SpaceTraders account registration
- API client service with TypeScript interfaces
- Token storage (localStorage or IndexedDB)
- Login/register UI flow
- Display agent info on dashboard

**Key decisions to make**:
- Where to store the API token (localStorage vs IndexedDB)
- How to structure the API client (class vs functions)
- Error handling strategy

**Expected challenges**:
- Understanding SpaceTraders API structure
- Generating TypeScript types from API responses
- Handling authentication state

**Deliverable**: Can authenticate and see agent info

**Learning resources**:
- [SpaceTraders API Docs](https://docs.spacetraders.io/)
- [SpaceTraders Quickstart](https://docs.spacetraders.io/quickstart/new-game)

---

### Day 3 (Wednesday): Ships & Navigation UI
**Time**: 90 minutes

**What we'll build**:
- Fetch ships from API
- Ship list component
- Ship detail view with stats
- Navigation menu (Dashboard, Ships, Markets, Ledger)
- SvelteKit layout structure

**Key decisions to make**:
- Component structure for ships
- How to handle loading states
- Navigation UX (sidebar vs header)

**Expected challenges**:
- SvelteKit routing patterns
- Designing a clear information hierarchy
- Handling ship data structure

**Deliverable**: Can view all ships and their details

**Accounting connection**: Ships are assets - we'll track their value on the balance sheet later.

---

### Day 4 (Thursday): Markets & Trading
**Time**: 90 minutes

**What we'll build**:
- Fetch market data for a waypoint
- Display available goods and prices
- Buy/sell forms with validation
- Execute trade via API
- Update ship cargo display

**Key decisions to make**:
- Form validation approach
- Optimistic vs pessimistic updates
- Error handling for failed trades

**Expected challenges**:
- Understanding market mechanics
- Handling cargo capacity limits
- Managing API rate limits

**Deliverable**: Can buy and sell goods successfully

**Accounting connection**: First real transactions - revenue and expenses.

---

### Day 5 (Friday): IndexedDB & Transaction Recording
**Time**: 90 minutes

**What we'll build**:
- Install and configure Dexie.js
- Define database schema (transactions, game state)
- Record every trade as a transaction
- Transaction history view
- Basic filtering/sorting

**Key decisions to make**:
- Database schema design
- What data to store locally
- Sync strategy (for later)

**Expected challenges**:
- IndexedDB API learning curve
- Schema design for flexibility
- Querying and displaying data

**Deliverable**: All trades are recorded and viewable in history

**Accounting connection**: Transaction logs are the foundation of all accounting - the source of truth.

---

## Week 1 Success Criteria

By end of Friday, you should have:

**Functional**:
- [x] Working authentication with SpaceTraders
- [x] Can view ships
- [x] Can view markets
- [x] Can execute trades (buy/sell)
- [x] All trades are stored in IndexedDB
- [x] Transaction history is viewable

**Technical**:
- [x] Clean component structure
- [x] TypeScript interfaces for API data
- [x] Error handling in place
- [x] Loading states for async operations

**Documentation**:
- [x] 5 daily blog posts published
- [x] Code committed daily with clear messages
- [x] Day 5 tagged as `day-05`

---

## Looking Ahead to Week 2

Next week we'll transform this basic transaction log into a proper accounting system:
- Design the ledger data structure
- Implement double-entry bookkeeping
- Build the `<ledger-view>` web component
- Generate our first Profit & Loss statement

The foundation we're building this week makes all of that possible.

---

## Common Pitfalls to Avoid

1. **Over-engineering early**: Don't build abstractions before you need them
2. **Perfect UI too soon**: Focus on functionality; polish comes later
3. **Rabbit holes**: SpaceTraders has lots of features - stay focused on trading only
4. **Skipping commits**: Commit after each meaningful change
5. **No error handling**: Users will hit errors - handle them gracefully

---

## Weekend Tasks (Optional)

Use the weekend to:
- Write the Week 1 wrap-up blog post
- Review and refactor any messy code
- Read ahead on accounting fundamentals (double-entry bookkeeping)
- Explore the SpaceTraders API docs for next week's features
- Rest and recharge!

---

**Week Status**: In Progress
**Last Updated**: Day 1
