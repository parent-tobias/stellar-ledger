# Week 3: Domain Components & Analytics

**Days**: 11-15 (Monday-Friday)
**Goal**: Complete the core web components and add market analytics.

---

## Overview

This week we're building the remaining domain components and adding intelligence to the game. By Friday, you should have:
- ✅ Complete financial statements (balance sheet)
- ✅ Market history tracking and analytics
- ✅ The `<market-tracker>` web component
- ✅ Fleet automation framework
- ✅ The `<fleet-manager>` web component

This is the "make it smart" phase. We're adding features that help players make informed decisions and automate repetitive tasks.

---

## Weekly Learning Themes

### Technical Skills
- **Time-series data**: Storing and querying historical data
- **Data visualization**: Building charts with Canvas/SVG
- **Task automation**: State machines and scheduling
- **Real-time updates**: Component communication patterns

### Accounting Concepts
- **Balance sheet**: Snapshot of financial position
- **Accounting equation**: Assets = Liabilities + Equity
- **Market-to-market**: Valuing assets at current prices
- **Automation in accounting**: How businesses automate bookkeeping

---

## Daily Breakdown

### Day 11 (Monday): Balance Sheet
**Time**: 90 minutes

**What we'll build**:
- Balance sheet calculation from ledger
- Assets section (cash, inventory, ships)
- Liabilities section (if any - probably none yet)
- Equity section (starting capital, retained earnings)
- Validate accounting equation

**Key decisions to make**:
- How to value inventory (cost vs market value)
- How to structure equity accounts
- Display format for the sheet

**Expected challenges**:
- Understanding balance sheet structure
- Ensuring equation balances
- Handling edge cases (negative equity, etc.)

**Deliverable**: Working balance sheet alongside P&L

**Accounting deep-dive**: How balance sheet complements P&L, what it tells us, why it always balances.

---

### Day 12 (Tuesday): Market History Tracking
**Time**: 90 minutes

**What we'll build**:
- Background process to capture market prices
- Time-series data structure in IndexedDB
- Historical price queries
- Data aggregation (hourly, daily averages)

**Key decisions to make**:
- How often to capture prices
- Data retention policy (how much history)
- Query optimization for time-series data

**Expected challenges**:
- Efficient storage of time-series data
- Background task management
- Query performance with large datasets

**Deliverable**: Market prices captured and queryable over time

**Technical deep-dive**: Time-series databases, efficient storage patterns, data aggregation strategies.

---

### Day 13 (Wednesday): `<market-tracker>` Component
**Time**: 90 minutes

**What we'll build**:
- Second vanilla Custom Element!
- Price history chart (Canvas or SVG)
- Trend indicators (up/down, percentage change)
- Trade opportunity alerts (buy low, sell high)
- Good selection for comparison

**Key decisions to make**:
- Charting library vs vanilla (probably vanilla for learning)
- Chart type (line, candlestick, etc.)
- How to identify opportunities

**Expected challenges**:
- Canvas/SVG charting from scratch
- Making charts responsive
- Calculating meaningful trends

**Deliverable**: Working `<market-tracker>` with price charts

**Technical deep-dive**: Canvas API basics, charting fundamentals, data visualization best practices.

---

### Day 14 (Thursday): Fleet Automation (Part 1)
**Time**: 90 minutes

**What we'll build**:
- Route definition interface
- Waypoint selection and ordering
- Buy/sell action configuration per waypoint
- Route persistence in IndexedDB
- Basic route validation

**Key decisions to make**:
- Route data structure
- UI for route building (drag-drop? list?)
- Validation rules

**Expected challenges**:
- Complex form state management
- User-friendly route building UX
- Validating routes before execution

**Deliverable**: Can define and save trade routes

**Accounting connection**: Automated trades still need accounting - every transaction recorded.

---

### Day 15 (Friday): `<fleet-manager>` Component
**Time**: 90 minutes

**What we'll build**:
- Third vanilla Custom Element!
- Fleet overview with ship status
- Route assignment interface
- Route execution controls (start, pause, stop)
- Status monitoring and updates

**Key decisions to make**:
- Component API for controlling automation
- How to communicate status
- Error handling for automation failures

**Expected challenges**:
- Managing async automation state
- Component ↔ app communication
- Displaying real-time status

**Deliverable**: Working `<fleet-manager>` with basic automation

**Technical deep-dive**: State machines, task scheduling, real-time UI updates.

---

## Week 3 Success Criteria

By end of Friday, you should have:

**Functional**:
- [x] Balance sheet generating correctly
- [x] Market prices tracked over time
- [x] `<market-tracker>` showing price charts
- [x] Trade routes definable
- [x] `<fleet-manager>` controlling automation
- [x] Basic "milk run" working

**Technical**:
- [x] Three domain web components built
- [x] Time-series data handling working
- [x] Charting capability in place
- [x] Automation framework functioning

**Documentation**:
- [x] 5 daily blog posts published
- [x] Component architecture explained
- [x] Day 15 tagged as `day-15`

---

## Looking Ahead to Week 4

Final week! We'll:
- Add the captain's log and final web component
- Integrate Supabase for cloud sync
- Build tutorial/onboarding
- Test, polish, and deploy

The finish line is in sight!

---

## Common Pitfalls to Avoid

1. **Over-complex charting**: Start simple, add features later
2. **Automation edge cases**: Test failure scenarios thoroughly
3. **Poor route UX**: Route building should be intuitive
4. **Forgetting accounting**: Automated trades need transaction records too
5. **Performance issues**: Time-series queries can be slow without indexes

---

## Weekend Tasks (Optional)

Use the weekend to:
- Write the Week 3 wrap-up blog post
- Test the automation with real gameplay
- Refine chart visualizations
- Research Supabase for next week
- Plan your tutorial content
- Rest and recharge!

---

**Week Status**: Not Started
**Last Updated**: Day 1
