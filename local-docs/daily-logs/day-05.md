# Day 05: IndexedDB & Transaction Recording

**Week**: 1 of 4
**Day**: 5 of 20 (Friday)

**Objectives**:
- [ ] Install and configure Dexie.js for IndexedDB access
- [ ] Design database schema for game state and transactions
- [ ] Store all trades as transaction records locally
- [ ] Build transaction history view with filtering
- [ ] Implement local-first architecture pattern
- [ ] Establish transaction logs as foundation of accounting

**Time Budget**: 90 minutes

---

## Overview

Today we're adding persistence - the critical piece that makes your game state survive page refreshes and browser restarts. Using IndexedDB through Dexie.js, you'll store every transaction, creating an immutable audit trail that will power the entire accounting system.

This is a foundational accounting concept: **transaction logs are the source of truth**. Every financial statement, every balance, every insight comes from analyzing the transaction history. By storing every trade, you're building the bedrock of your accounting system.

---

## Tasks

### Task 1: Install Dexie.js
Add Dexie.js to the project and create initial database configuration.

**Key decisions**:
- Dexie.js version and configuration
- Where to initialize database (lib/db.ts)
- Database naming and versioning strategy

### Task 2: Database Schema Design
Define tables and schema for transactions, ships, inventory, and agent state.

**Key decisions**:
- What data to persist (transactions, game state, both)
- Table relationships and indexes
- Schema versioning for future migrations

### Task 3: Transaction Recording
Update trading logic to save every transaction to IndexedDB.

**Key decisions**:
- Transaction data structure (amount, type, timestamp, metadata)
- When to write (immediately after API success)
- How to handle write failures

### Task 4: Transaction History View
Build a page displaying all past transactions with details.

**Key decisions**:
- List view design (chronological, grouped by day)
- What information to show for each transaction
- Pagination vs infinite scroll

### Task 5: Filtering and Sorting
Add controls to filter transactions by type, date, ship, or trade good.

**Key decisions**:
- Filter UI design (dropdowns, checkboxes, search)
- Sort options (date, amount, type)
- How to query IndexedDB efficiently

### Task 6: Data Migration
Ensure existing session data is captured and stored.

**Key decisions**:
- How to backfill any missing transactions
- Handling browser storage limits
- Export/import functionality for backup

---

## Deliverable

By end of day, you should have:
- Dexie.js configured and working with IndexedDB
- Database schema for transactions and game state
- All trades automatically saved to local database
- Transaction history view showing all past trades
- Functional filtering and sorting of transaction history
- Local-first architecture established

---

## Key Learning

**Technical**: Local-first architecture, IndexedDB patterns, Dexie.js usage, efficient client-side storage
**Accounting**: Transaction logs as foundation - every accounting system starts with immutable transaction records

---

## Tomorrow's Plan

Week 2 begins on Monday (Day 06) with building the basic ledger structure and account balance calculations.

---

**Files to create/modify**:
- `src/lib/db/index.ts`
- `src/lib/db/schema.ts`
- `src/lib/db/transactions.ts`
- `src/routes/transactions/+page.svelte`
- `src/lib/api/trading.ts` (update to save to DB)
- `src/lib/types/database.ts`
- `package.json` (add dexie dependency)

**Tag**: `day-05`
