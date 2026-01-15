# Week 2: Core Accounting Features

**Days**: 6-10 (Monday-Friday)
**Goal**: Build the accounting domain - ledgers, double-entry bookkeeping, and financial statements.

---

## Overview

This week we transition from a simple trading game to an educational accounting tool. By Friday, you should have:
- ✅ A proper ledger with all transactions
- ✅ Double-entry bookkeeping implementation
- ✅ The `<ledger-view>` web component (first domain component!)
- ✅ A working Profit & Loss statement

This is where Stellar Ledger becomes unique. We're not just recording trades - we're teaching accounting fundamentals through gameplay.

---

## Weekly Learning Themes

### Technical Skills
- **Domain modeling**: Translating accounting concepts to code
- **Web Components**: Building vanilla Custom Elements
- **Data aggregation**: Computing balances and statements
- **Component integration**: Using web components in Svelte

### Accounting Concepts
- **Chart of accounts**: Organizing accounts by type
- **Double-entry bookkeeping**: Every transaction has two sides
- **Debits and credits**: The fundamental accounting operations
- **T-accounts**: Visual representation of account balances
- **Profit & Loss**: Revenue minus expenses = profit

---

## Daily Breakdown

### Day 6 (Monday): Basic Ledger
**Time**: 90 minutes

**What we'll build**:
- Ledger data structure
- Chart of accounts (Assets, Liabilities, Equity, Revenue, Expenses)
- Simple ledger view showing all transactions
- Account balance calculations
- Filtering by account type

**Key decisions to make**:
- How to structure account hierarchy
- Balance calculation approach
- UI for ledger display

**Expected challenges**:
- Designing a flexible account structure
- Computing running balances efficiently
- Displaying complex data clearly

**Deliverable**: Can view all transactions organized by account

**Accounting deep-dive**: Chart of accounts, account types, how businesses organize financial data.

---

### Day 7 (Tuesday): Double-Entry Bookkeeping
**Time**: 90 minutes

**What we'll build**:
- Double-entry transaction recording
- For each trade: debit one account, credit another
- Account balance validation
- Accounting equation checker (Assets = Liabilities + Equity)

**Key decisions to make**:
- How to represent debits and credits
- Validation rules for transactions
- Error handling for imbalanced entries

**Expected challenges**:
- Understanding double-entry mechanics
- Ensuring transaction integrity
- Validating the accounting equation

**Deliverable**: All trades create balanced double-entry transactions

**Accounting deep-dive**: Why double-entry? How it prevents errors and provides complete financial picture.

**Example trade**:
```
Buy 100 units of IRON for 5000 credits:
  Debit:  Inventory (Asset)      +5000
  Credit: Cash (Asset)            -5000
```

---

### Day 8 (Wednesday): `<ledger-view>` Component (Part 1)
**Time**: 90 minutes

**What we'll build**:
- First vanilla Custom Element!
- Basic T-account visualization
- Display debits on left, credits on right
- Show running balance
- Properties for account selection

**Key decisions to make**:
- Component API (properties, events, slots)
- Styling approach (Shadow DOM vs global CSS)
- How to pass data to the component

**Expected challenges**:
- Web Components API learning curve
- Shadow DOM styling quirks
- Component lifecycle management

**Deliverable**: Working `<ledger-view>` component showing T-accounts

**Technical deep-dive**: Custom Elements API, component lifecycle (connectedCallback, disconnectedCallback, attributeChangedCallback).

---

### Day 9 (Thursday): `<ledger-view>` Component (Part 2)
**Time**: 90 minutes

**What we'll build**:
- Educational tooltips explaining debits/credits
- Color coding by account type
- Interactive elements (click to see transaction details)
- Integration with Svelte pages

**Key decisions to make**:
- Tooltip implementation (HTML title vs custom)
- How much interactivity to add
- Accessibility considerations

**Expected challenges**:
- Making it actually educational (not just functional)
- Balancing information density with clarity
- Svelte ↔ Web Component communication

**Deliverable**: Fully functional, educational `<ledger-view>` component

**UX focus**: How do we teach accounting through the interface?

---

### Day 10 (Friday): Profit & Loss Statement
**Time**: 90 minutes

**What we'll build**:
- P&L calculation from ledger
- Period selection (all-time, last 7 days, last 30 days)
- Display revenue, expenses, gross profit, net profit
- Basic formatting for readability

**Key decisions to make**:
- How to categorize revenue vs expenses
- Date range implementation
- Display format (table vs chart)

**Expected challenges**:
- Aggregating data correctly
- Handling different time periods
- Making numbers understandable

**Deliverable**: Working P&L statement with period selection

**Accounting deep-dive**: How P&L differs from balance sheet, why it matters, how to read it.

---

## Week 2 Success Criteria

By end of Friday, you should have:

**Functional**:
- [x] Ledger showing all accounts with balances
- [x] Double-entry bookkeeping working correctly
- [x] `<ledger-view>` web component built and integrated
- [x] P&L statement generating correctly
- [x] Educational content explaining accounting concepts

**Technical**:
- [x] First vanilla Custom Element working
- [x] Accounting logic tested and validated
- [x] Clean separation between game logic and accounting logic

**Documentation**:
- [x] 5 daily blog posts published
- [x] Accounting concepts explained clearly
- [x] Day 10 tagged as `day-10`

---

## Looking Ahead to Week 3

Next week we'll:
- Complete the financial statements with a balance sheet
- Build the market analytics features
- Create the `<market-tracker>` web component
- Start fleet automation

We're shifting from pure accounting to operations - but accounting remains the foundation.

---

## Common Pitfalls to Avoid

1. **Oversimplifying accounting**: Double-entry can seem complex, but don't skip it
2. **Poor component API**: Think carefully about properties and events
3. **Shadow DOM struggles**: Be prepared for CSS scoping challenges
4. **Not actually educational**: The goal is teaching - make sure tooltips explain well
5. **Ignoring validation**: Accounting errors compound - validate everything

---

## Weekend Tasks (Optional)

Use the weekend to:
- Write the Week 2 wrap-up blog post
- Research more about accounting fundamentals
- Review Web Components best practices
- Read about financial statement analysis
- Play with the ledger and ensure it makes sense
- Rest and recharge!

---

**Week Status**: Not Started
**Last Updated**: Day 1
