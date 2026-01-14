# Conversation Context: Stellar Ledger Project Initialization

**Date**: 2026-01-14
**Phase**: Pre-Day 1 Planning and Setup

---

## Project Overview

**Stellar Ledger** is a 30-day coding journey building an educational accounting game on top of the SpaceTraders API. The project serves dual purposes:

1. **The Game**: A playable space trading experience teaching accounting fundamentals (ledgers, P&L, balance sheets, debits/credits) to general users
2. **The Build Series**: A public development journey for intermediate developers demonstrating domain-driven design, SvelteKit patterns, and building in public

---

## Key Decisions Made

### Technology Stack

- ✅ **SvelteKit** (not plain Svelte) for better DX and routing
- ✅ **TypeScript** for type safety throughout
- ✅ **pnpm** as package manager (faster, stricter, more modern than npm)
- ✅ **Vanilla Custom Elements** for domain web components (not Lit.js, not Svelte-compiled)
  - Reason: True portability and teaching framework-agnostic patterns
- ✅ **ESLint + Prettier** for code quality
- ✅ **Vitest** for both unit and component testing
- ✅ **IndexedDB** (with Dexie.js) for local-first storage
- ✅ **Supabase** for remote persistence and sync

### Repository Structure

- ✅ **Single repo** (not a monorepo) with clear internal organization
- ✅ **Tag-based navigation**: Each day gets a git tag (`day-01`, `day-02`, etc.)
- ✅ **Compare links**: Use GitHub compare views to see daily diffs
- ✅ **Local documentation**: All planning and daily logs in `/local-docs/`

### Project Naming

- ✅ **Repository**: `stellar-ledger`
- ✅ Rejected: `spacetraders-accounting` (too literal), other variations

### Development Workflow

- ✅ **60-90 minutes coding per day** (writing posts is separate time)
- ✅ **Daily posts on Dev.to** with canonical links shared to Medium
- ✅ **Absolute zero start**: Day 1 assumes no dependencies, walks through everything
- ✅ **Tag at end of each day** for easy navigation

---

## Architecture Principles

### Domain-Driven Design with Web Components

Four primary domain boundaries, each as a vanilla Custom Element:

1. **`<ledger-view>`**: Accounting domain
   - Double-entry bookkeeping
   - Transaction history
   - Account balances
   - Educational overlays

2. **`<market-tracker>`**: Economics domain
   - Price history charts
   - Trade opportunities
   - Supply/demand analytics

3. **`<fleet-manager>`**: Operations domain
   - Ship status and locations
   - Route planning
   - Automation ("milk runs")

4. **`<captain-log>`**: Narrative domain
   - Event history
   - Achievements
   - Storytelling

### Storage Strategy

```
Player Action → SpaceTraders API → Response
                      ↓
                Store in IndexedDB (local-first)
                      ↓
                Sync to Supabase (remote)
                      ↓
           Generate Accounting Entries
                      ↓
              Update Ledger Views
```

### Why Vanilla Web Components (Not Lit.js)?

- **Portability**: True framework-agnostic components
- **Teaching value**: Shows how to build Custom Elements from scratch
- **Integration demo**: Demonstrates how they work within Svelte
- **Complexity trade-off**: Avoids additional framework juggling

---

## Important Technical Notes

### Svelte CLI Change (2026)

- ❌ **Old**: `pnpm create svelte@latest`
- ✅ **New**: `npx sv create`

The `sv` CLI is Svelte's new unified command-line tool. Day 1 documentation has been updated to reflect this.

### SvelteKit Setup Choices

When running `npx sv create stellar-ledger`:

1. **Template**: SvelteKit minimal
2. **TypeScript**: Yes, using TypeScript syntax
3. **Add-ons**: eslint, prettier, vitest (all three)
4. **Vitest options**: Both unit and component testing
5. **Package manager**: pnpm

---

## Game Design Philosophy

### Target Audience (Game)

- General users who don't know how to balance a checkbook
- Not focused on passing an Accounting 101 exam
- **Goal**: Financial literacy through gamification

### Target Audience (Build Series)

- Intermediate developers
- Those interested in domain-driven design
- Developers learning business concepts
- Anyone building API-based games

### Educational Scope (Accounting)

**Foundational** (Days 1-7):
- What is accounting?
- Accounts and entities
- Record-keeping importance

**Transactional** (Days 8-14):
- Transactions and journals
- Ledger structure
- Running balances

**Double-Entry** (Days 15-17):
- Debits and credits
- T-accounts
- Chart of accounts

**Financial Statements** (Days 18-21):
- Profit & Loss
- Balance Sheet
- Accounting equation (Assets = Liabilities + Equity)

**Advanced** (Days 22-30):
- Automation in accounting
- Audit trails
- Financial analysis

---

## SpaceTraders API Integration

### Key Characteristics

- **Stateless**: Each endpoint returns current state, NOT history
- **Text-based**: No graphics, perfect for adding our own UI
- **Barebones**: Minimal features, perfect for enhancement

### Planned Enhancements

1. **Market History Tracking**: Store price data over time
2. **Captain's Logs**: Narrative history for ships and fleets
3. **Milk Runs**: Automated trade routes
4. **Fleet Management**: Multi-ship coordination
5. **Transaction Recording**: Turn every API call into accounting entries

---

## 30-Day Milestone Overview

### Week 1 (Days 1-7): Foundation
- Day 1: Project setup (SvelteKit + tooling)
- Day 2: SpaceTraders API exploration
- Day 3: Routing and navigation
- Day 4: IndexedDB setup
- Day 5: First web component
- Day 6: Authentication flow
- Day 7: Ship and fleet display

### Week 2 (Days 8-14): Core Gameplay
- Days 8-9: Navigation system
- Days 10-11: Trading mechanics
- Day 12: Supabase integration
- Days 13-14: Transaction recording and basic ledger

### Week 3 (Days 15-21): Accounting Domain
- Days 15-16: `<ledger-view>` component (double-entry)
- Days 17-18: Market history and `<market-tracker>`
- Days 19-20: P&L statement
- Day 21: Balance sheet

### Week 4 (Days 22-30): Advanced Features + Polish
- Days 22-24: Fleet automation and `<fleet-manager>`
- Days 25-26: Captain's logs
- Day 27: Tutorial/onboarding
- Days 28-29: Testing and polish
- Day 30: Deployment and retrospective

---

## Project Structure

```
stellar-ledger/
├── local-docs/
│   ├── CONVERSATION_CONTEXT.md    # This file
│   ├── DAILY_LOG_TEMPLATE.md      # Template for each day's post
│   ├── PROJECT_PLAN.md            # Full 30-day detailed breakdown
│   └── daily-logs/
│       └── day-01.md              # Step-by-step guide for Day 1
├── src/                           # (Created on Day 1)
│   ├── components/                # Svelte components
│   ├── web-components/            # Vanilla Custom Elements
│   ├── lib/
│   │   ├── api/                   # SpaceTraders API client
│   │   ├── storage/               # IndexedDB + Supabase abstraction
│   │   └── accounting/            # Ledger logic
│   └── routes/                    # SvelteKit routes
├── static/                        # Static assets
├── tests/                         # Vitest tests
├── .gitignore
├── LICENSE                        # MIT
├── README.md                      # Project overview (will be replaced by sv create)
├── package.json                   # (Created on Day 1)
└── svelte.config.js               # (Created on Day 1)
```

---

## Git Workflow

### Daily Process

1. Work for 60-90 minutes on the day's objectives
2. Make incremental commits as you go
3. At end of day, create final commit with summary
4. Tag the commit: `git tag -a day-XX -m "Day XX: Description"`
5. Write the daily log post using the template
6. Publish to Dev.to

### Tag Strategy

- `day-00`: Initial repository structure (pre-Day 1)
- `day-01`: SvelteKit initialization
- `day-02`: SpaceTraders API setup
- etc.

### Comparing Days

Users can see what changed on any day:
```bash
git diff day-12..day-13
# Or via GitHub: compare/day-12...day-13
```

---

## Current Status

### Completed

✅ Repository created and initialized
✅ Initial documentation structure
✅ Day 1 planning document (with sv CLI updates)
✅ Project plan (full 30-day breakdown)
✅ Daily log template
✅ README with project vision
✅ LICENSE (MIT)
✅ .gitignore setup
✅ Tagged as `day-00`

### Next Step: Day 1

**When ready**, follow the guide in `/local-docs/daily-logs/day-01.md`:

```bash
cd /home/toby/Projects/stellar-ledger
npx sv create .
```

(Note: Using `.` to create in current directory since we already have the folder)

---

## Questions Answered During Planning

### Q: Monorepo or single repo?
**A**: Single repo. Monorepos add complexity we don't need unless we're publishing separate packages.

### Q: Svelte + Lit.js or pure Svelte?
**A**: Pure Svelte + vanilla web components. Lit adds unnecessary framework juggling.

### Q: How do people code along at Day 13 without doing Days 1-12?
**A**: Git tags. `git checkout day-13` gives them that exact state.

### Q: npm or pnpm?
**A**: pnpm. Faster, stricter, more modern. Worth the slight learning curve.

### Q: Should accounting be exam-focused or literacy-focused?
**A**: Literacy. Teaching financial concepts, not exam prep.

### Q: Should Supabase be from Day 1?
**A**: No, start local-only (IndexedDB). Introduce Supabase on Day 12.

---

## Risk Mitigation

### Scope Creep Prevention
- Strict 60-90 minute daily limit
- If feature takes longer, split across days
- Maintain "post-30-day" backlog for nice-to-haves

### Technical Unknowns
- Have mock data ready if SpaceTraders API is unreliable
- Start web components simple, add complexity gradually
- Use Day 12 for pure Supabase exploration if needed

### Time Management
- Pre-read API docs the night before
- Have clear daily plan (see PROJECT_PLAN.md)
- Set timer to avoid rabbit holes

---

## Resources

### Official Documentation
- [SvelteKit Docs](https://kit.svelte.dev/docs)
- [Svelte CLI (sv) Docs](https://svelte.dev/docs/cli)
- [SpaceTraders API Docs](https://docs.spacetraders.io/)
- [pnpm Documentation](https://pnpm.io/)
- [Vitest Docs](https://vitest.dev/)
- [Supabase Docs](https://supabase.com/docs)

### Learning Resources
- [Svelte Tutorial](https://learn.svelte.dev/)
- [MDN Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Dexie.js Guide](https://dexie.org/)

---

## Post-30-Day Ideas

Features to consider after core build:

- Multi-agent support (multiple game accounts)
- Social features (shareable captain's logs)
- Advanced automation (AI-driven trading)
- More accounting concepts (depreciation, accruals, ratios)
- Multiplayer elements
- Mobile app (PWA or Svelte Native)
- Teacher dashboard for classroom use

---

## Notes for Future Conversations

When starting a new conversation in this workspace, refer to:

1. **This file** for context and decisions made
2. **PROJECT_PLAN.md** for detailed day-by-day breakdown
3. **daily-logs/day-XX.md** for where we are in the journey
4. **Git tags** to see the actual code state at any point

All major architectural decisions and rationale are documented here or in the referenced files.

---

**Document Version**: 1.0
**Last Updated**: 2026-01-14 (Pre-Day 1)
**Git Tag**: day-00
