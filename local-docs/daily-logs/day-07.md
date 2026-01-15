# Day 07: Double-Entry Bookkeeping

**Week**: 2 of 4
**Day**: 7 of 20 (Tuesday)

**Objectives**:
- [ ] Implement double-entry transaction recording system
- [ ] Create debits and credits for each trade automatically
- [ ] Define account categories (Assets, Liabilities, Equity, Revenue, Expenses)
- [ ] Validate accounting equation (Assets = Liabilities + Equity)
- [ ] Update transaction recording to use double-entry
- [ ] Build validation logic for balanced entries

**Time Budget**: 90 minutes

---

## Overview

Today you're implementing the most important concept in accounting: **double-entry bookkeeping**. This 600-year-old system (thanks, Luca Pacioli!) ensures that your books always balance. Every transaction affects at least two accounts - if you buy inventory, cash goes down (credit) and inventory goes up (debit).

This might seem complicated, but it's actually beautiful - the system is self-checking. If your books don't balance, you know there's an error. This is why every accounting system in the world uses double-entry bookkeeping.

---

## Tasks

### Task 1: Account Categories
Define the five account categories and their normal balances (debit or credit).

**Key decisions**:
- Account category structure (Assets, Liabilities, Equity, Revenue, Expenses)
- Normal balance for each category (which side increases it)
- How to represent this in TypeScript types

### Task 2: Debit and Credit Rules
Implement the rules for debits and credits based on account type.

**Key decisions**:
- How to encode debit/credit rules in code
- Function to determine which accounts to debit/credit for each transaction type
- Error handling for invalid combinations

### Task 3: Double-Entry Transaction Creation
Update transaction recording to create paired debit/credit entries.

**Key decisions**:
- Transaction structure (one transaction, two entries)
- How to link debit and credit entries
- Metadata to store with each entry

### Task 4: Trading Transaction Mapping
Map trading actions to proper double-entry transactions.

**Key decisions**:
- Purchase: Debit Inventory, Credit Cash
- Sale: Debit Cash, Credit Revenue; Debit Cost of Goods Sold, Credit Inventory
- How to handle transaction fees and costs

### Task 5: Accounting Equation Validation
Implement validation that Assets = Liabilities + Equity at all times.

**Key decisions**:
- When to validate (after each transaction or periodically)
- What to do if equation doesn't balance (error, warning, auto-correct)
- How to surface validation results

### Task 6: Update Ledger Display
Modify ledger view to show debit and credit columns properly.

**Key decisions**:
- Traditional T-account layout vs modern format
- How to display paired entries visually
- Color coding for debits and credits

---

## Deliverable

By end of day, you should have:
- Complete double-entry bookkeeping system
- All transactions creating balanced debit/credit entries
- Account categories properly defined
- Accounting equation validation working
- Ledger view showing debits and credits
- Deep understanding of double-entry fundamentals

---

## Key Learning

**Technical**: Domain modeling, business logic encapsulation, type safety for accounting rules
**Accounting**: Double-entry bookkeeping fundamentals, debits and credits, accounting equation, account categories

---

## Tomorrow's Plan

Day 08 starts building the `<ledger-view>` web component for interactive T-account visualization.

---

**Files to create/modify**:
- `src/lib/accounting/doubleEntry.ts`
- `src/lib/accounting/debitCredit.ts`
- `src/lib/accounting/accountingEquation.ts`
- `src/lib/accounting/transactionMapper.ts`
- `src/lib/types/accounting.ts` (update)
- `src/lib/db/transactions.ts` (update)
- `src/routes/ledger/+page.svelte` (update)

**Tag**: `day-07`
