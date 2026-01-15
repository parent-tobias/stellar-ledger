# Day 11: Balance Sheet

**Week**: 3 of 4
**Day**: 11 of 20 (Monday)

**Objectives**:
- [ ] Calculate Assets, Liabilities, and Equity from ledger
- [ ] Build Balance Sheet display with proper formatting
- [ ] Validate accounting equation (Assets = Liabilities + Equity)
- [ ] Add point-in-time selection (balance sheet at specific date)
- [ ] Implement period comparison functionality
- [ ] Create visual representation of financial position

**Time Budget**: 90 minutes

---

## Overview

Welcome to Week 3! Today you're building the **Balance Sheet** - the financial statement that shows what you own (assets), what you owe (liabilities), and your net worth (equity) at a specific point in time. Unlike the P&L which shows a period, the balance sheet is a snapshot.

The balance sheet is where the **accounting equation** lives: Assets = Liabilities + Equity. This equation must always balance - hence the name. If it doesn't, something is wrong with your bookkeeping. This is the fundamental check that keeps accounting systems honest.

---

## Tasks

### Task 1: Balance Sheet Data Calculation
Extract and calculate Assets, Liabilities, and Equity from the ledger at a specific date.

**Key decisions**:
- How to get balances as of a specific date
- Which accounts belong to each category
- Handling accumulated retained earnings (equity)

### Task 2: Balance Sheet Layout
Create structured display following standard balance sheet format.

**Key decisions**:
- Format: account form (vertical) vs report form (horizontal)
- Level of detail (current vs non-current assets)
- Visual hierarchy and alignment

### Task 3: Accounting Equation Validation
Implement and display validation that A = L + E.

**Key decisions**:
- Where to show validation (header, footer, separate indicator)
- What to do if equation doesn't balance
- Visual feedback for balanced state

### Task 4: Point-in-Time Selection
Build date picker to view balance sheet at any historical date.

**Key decisions**:
- Default date (today, end of period, custom)
- Date picker UI and UX
- Handling dates before any transactions

### Task 5: Period Comparison
Add ability to compare balance sheet across different dates.

**Key decisions**:
- Side-by-side vs overlay comparison
- What metrics to compare (values, percentages, changes)
- Visual indicators for increases/decreases

### Task 6: Visual Enhancements
Add charts showing asset composition or equity changes over time.

**Key decisions**:
- Chart types (pie for composition, line for trends)
- What to visualize (asset breakdown, equity history)
- Integration with tabular display

---

## Deliverable

By end of day, you should have:
- Working Balance Sheet calculating A, L, and E
- Point-in-time selection for any date
- Properly formatted financial statement display
- Accounting equation validation with visual feedback
- Period comparison showing changes
- Understanding of balance sheet structure and purpose

---

## Key Learning

**Technical**: Point-in-time data queries, financial statement relationships, data validation
**Accounting**: Balance sheet fundamentals, accounting equation, assets vs liabilities vs equity

---

## Tomorrow's Plan

Day 12 builds market history tracking, storing price data over time for analytics and trading insights.

---

**Files to create/modify**:
- `src/lib/accounting/balanceSheet.ts`
- `src/lib/accounting/accountingEquation.ts` (update)
- `src/routes/reports/balance-sheet/+page.svelte`
- `src/lib/components/BalanceSheetStatement.svelte`
- `src/lib/components/DateSelector.svelte`
- `src/lib/components/BalanceSheetChart.svelte`
- `src/lib/utils/pointInTimeCalculations.ts`

**Tag**: `day-11`
