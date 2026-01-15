# Day 19: Testing & Bug Fixes

**Week**: 4 of 4
**Day**: 19 of 20 (Thursday)

**Objectives**:
- [ ] Write unit tests for critical accounting logic
- [ ] Test double-entry bookkeeping validation thoroughly
- [ ] Fix bugs discovered during manual testing
- [ ] Perform performance profiling and optimization
- [ ] Test sync and offline scenarios
- [ ] Conduct end-to-end user journey testing

**Time Budget**: 90 minutes

---

## Overview

Today is all about **quality assurance** - making sure your application works correctly, handles edge cases gracefully, and performs well. You'll write tests for the most critical parts (especially accounting logic where accuracy is non-negotiable), fix bugs, and optimize performance.

Testing accounting software is particularly important because errors compound. If your double-entry system has a bug, every transaction after that might be wrong. Today you'll build confidence that your ledger stays balanced, transactions are recorded correctly, and financial statements are accurate.

---

## Tasks

### Task 1: Unit Tests for Accounting Logic
Write comprehensive tests for double-entry system and calculations.

**Key decisions**:
- What to test (debit/credit rules, accounting equation, balance calculations)
- Test framework usage (Vitest configuration)
- Mock data for test scenarios

### Task 2: Integration Tests
Test critical user flows end-to-end (register, trade, view ledger, sync).

**Key decisions**:
- Which flows are most critical
- How to set up test environment (test database, mock API)
- Assertion strategy for complex flows

### Task 3: Bug Fixing
Fix issues discovered during testing and prior development.

**Key decisions**:
- Priority (critical bugs first, polish later)
- Root cause analysis vs quick fixes
- Documentation of known issues

### Task 4: Performance Profiling
Identify and optimize performance bottlenecks.

**Key decisions**:
- Profiling tools (browser DevTools, Lighthouse)
- What to optimize (large list rendering, database queries)
- Balance between optimization and time budget

### Task 5: Sync and Offline Testing
Test cloud sync edge cases and offline functionality.

**Key decisions**:
- Scenarios to test (slow network, interrupted sync, conflicts)
- How to simulate offline (DevTools network throttling)
- Validating data consistency after sync

### Task 6: User Journey Testing
Walk through complete user flows as a new user would experience them.

**Key decisions**:
- Fresh browser session for realistic testing
- Taking notes on friction points
- Quick UX improvements vs major changes

---

## Deliverable

By end of day, you should have:
- Unit tests covering critical accounting logic
- Integration tests for key user flows
- Bugs fixed and edge cases handled
- Performance issues identified and addressed
- Sync and offline scenarios validated
- Confidence in application quality and reliability

---

## Key Learning

**Technical**: Testing strategies, debugging techniques, performance optimization, quality assurance
**Accounting**: Importance of accuracy in financial systems (testing financial calculations thoroughly)

---

## Tomorrow's Plan

Day 20 is deployment day - launching the application and writing a comprehensive retrospective.

---

**Files to create/modify**:
- `src/lib/accounting/__tests__/doubleEntry.test.ts`
- `src/lib/accounting/__tests__/balanceSheet.test.ts`
- `src/lib/accounting/__tests__/profitLoss.test.ts`
- `tests/integration/trading.test.ts`
- `tests/integration/sync.test.ts`
- Various bug fixes across the codebase
- Performance optimization changes

**Tag**: `day-19`
