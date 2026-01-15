# Day 10: Profit & Loss Statement

**Week**: 2 of 4
**Day**: 10 of 20 (Friday)

**Objectives**:
- [ ] Calculate revenue and expenses from ledger accounts
- [ ] Build period selection interface (daily, weekly, all-time)
- [ ] Display formatted P&L statement with proper structure
- [ ] Show gross profit vs net profit calculations
- [ ] Add period comparison functionality
- [ ] Create visual representation of profitability

**Time Budget**: 90 minutes

---

## Overview

Today you're building the **Profit & Loss statement** (also called Income Statement), one of the three core financial statements. This shows whether your trading operation is actually making money. Revenue minus expenses equals profit (or loss).

The P&L is where players see if their trading strategy is working. Are they profitable? Which goods generate the most revenue? What are the biggest expenses? This is practical financial analysis that applies to any business, from space trading to running a coffee shop.

---

## Tasks

### Task 1: P&L Data Calculation
Extract revenue and expense data from the ledger for a given time period.

**Key decisions**:
- How to identify revenue vs expense accounts
- Time period calculation (start/end dates)
- Handling multiple revenue and expense types

### Task 2: Period Selection Interface
Build UI to select reporting period (today, last 7 days, last 30 days, all-time, custom).

**Key decisions**:
- Date picker vs preset periods
- Default period to show
- How to handle no-data states for new periods

### Task 3: P&L Statement Layout
Create structured display following standard P&L format.

**Key decisions**:
- Layout: traditional format (revenue, expenses, net income)
- Level of detail (summary vs detailed)
- Visual formatting (alignment, borders, totals)

### Task 4: Gross vs Net Profit
Calculate and display both gross profit (revenue - cost of goods sold) and net profit.

**Key decisions**:
- How to categorize costs (COGS vs operating expenses)
- Whether to include non-cash items
- Terminology for game context

### Task 5: Period Comparison
Add ability to compare current period to previous period.

**Key decisions**:
- What to compare (absolute values, percentages, trends)
- Visual display of changes (arrows, colors, charts)
- How to handle periods of different lengths

### Task 6: Visual Enhancements
Add charts or visual indicators showing profitability trends.

**Key decisions**:
- Chart type (bar, line, pie for expense breakdown)
- Where to place visualizations
- Mobile-responsive chart sizing

---

## Deliverable

By end of day, you should have:
- Working P&L statement calculating revenue and expenses
- Period selection allowing different time ranges
- Properly formatted financial statement display
- Gross profit and net profit calculations
- Period comparison showing trends
- Visual representation of profitability

---

## Key Learning

**Technical**: Financial calculations, date range handling, data aggregation, chart/visualization basics
**Accounting**: P&L statement structure, revenue vs expenses, gross vs net profit, profitability analysis

---

## Tomorrow's Plan

Week 3 begins on Monday (Day 11) with building the Balance Sheet showing assets, liabilities, and equity.

---

**Files to create/modify**:
- `src/lib/accounting/profitLoss.ts`
- `src/lib/accounting/financialStatements.ts`
- `src/routes/reports/profit-loss/+page.svelte`
- `src/lib/components/ProfitLossStatement.svelte`
- `src/lib/components/PeriodSelector.svelte`
- `src/lib/utils/dateRanges.ts`
- `src/lib/components/ProfitChart.svelte`

**Tag**: `day-10`
