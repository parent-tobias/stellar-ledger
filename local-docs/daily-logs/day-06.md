# Day 06: Basic Ledger

**Week**: 2 of 4
**Day**: 6 of 20 (Monday)

**Objectives**:
- [ ] Design ledger data structure with accounts and balances
- [ ] Create simple ledger view listing all transactions
- [ ] Implement account balance calculation from transactions
- [ ] Add filtering by account type and time period
- [ ] Build sorting functionality for ledger entries
- [ ] Introduce chart of accounts concept

**Time Budget**: 90 minutes

---

## Overview

Welcome to Week 2, where we dive deep into accounting. Today you're building the **ledger** - the central record-keeping system that organizes all your transactions into accounts. Think of it as upgrading from a shoebox full of receipts to a proper accounting book.

The ledger is where accounting gets structured. Instead of just a list of transactions, you're organizing them by **account** - cash, inventory, revenue, etc. Each account has a balance that changes with every transaction. This structure is what makes financial analysis possible.

---

## Tasks

### Task 1: Ledger Data Structure
Design the ledger structure with accounts, categories, and transaction entries.

**Key decisions**:
- Account types (Assets, Liabilities, Equity, Revenue, Expenses)
- How to link transactions to accounts
- Running balance calculation approach

### Task 2: Chart of Accounts
Create the initial chart of accounts for the game (Cash, Inventory, Revenue, etc.).

**Key decisions**:
- Which accounts to include initially
- Account naming conventions
- Account numbering system (if any)

### Task 3: Ledger View Component
Build a page displaying all ledger entries organized by account.

**Key decisions**:
- Layout (list, table, or card view)
- How to group entries (by account, by date, or both)
- How to display running balances

### Task 4: Balance Calculation
Implement logic to calculate account balances from transaction history.

**Key decisions**:
- Calculate on-the-fly vs pre-computed
- How to handle balance changes over time
- Performance considerations for large transaction sets

### Task 5: Filtering Interface
Add controls to filter ledger by account, date range, or transaction type.

**Key decisions**:
- Filter UI design and placement
- How to combine multiple filters
- Default filter state

### Task 6: Sorting and Organization
Implement sorting by date, amount, or account with visual organization.

**Key decisions**:
- Default sort order (newest first or oldest first)
- Multi-column sorting
- Visual indicators for sort state

---

## Deliverable

By end of day, you should have:
- Complete ledger data structure with accounts
- Chart of accounts defining all account types
- Ledger view showing all transactions organized by account
- Running balance calculations for each account
- Filtering and sorting functionality
- Understanding of ledger structure and purpose

---

## Key Learning

**Technical**: Data aggregation, state management, efficient list rendering, filter composition
**Accounting**: Ledger structure, chart of accounts, running balances, account organization

---

## Tomorrow's Plan

Day 07 introduces double-entry bookkeeping - the cornerstone of accounting where every transaction affects two accounts.

---

**Files to create/modify**:
- `src/lib/accounting/ledger.ts`
- `src/lib/accounting/accounts.ts`
- `src/lib/accounting/chartOfAccounts.ts`
- `src/routes/ledger/+page.svelte`
- `src/lib/components/LedgerView.svelte`
- `src/lib/types/accounting.ts`
- `src/lib/utils/balanceCalculation.ts`

**Tag**: `day-06`
