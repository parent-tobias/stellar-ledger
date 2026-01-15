# Day 04: Markets & Trading

**Week**: 1 of 4
**Day**: 4 of 20 (Wednesday)

**Objectives**:
- [ ] Fetch market data and display available goods with prices
- [ ] Build buy/sell interface with quantity inputs
- [ ] Implement trading logic with SpaceTraders API
- [ ] Handle inventory management and cargo updates
- [ ] Add optimistic UI updates for better UX
- [ ] Record first real accounting transactions (purchases and sales)

**Time Budget**: 90 minutes

---

## Overview

Today is where the trading game comes alive. You'll build the market interface that lets players buy and sell goods, manage cargo space, and start making (or losing) credits. This is the economic engine that drives the entire game.

From an accounting perspective, this is huge - you're implementing **transactions**. Every purchase and sale creates an accounting entry. Purchases reduce cash and increase inventory (both assets). Sales increase cash and reduce inventory while generating revenue. This is practical, real-world accounting in action.

---

## Tasks

### Task 1: Market Data API
Fetch market data for the current location showing available goods and prices.

**Key decisions**:
- How to identify which market to query (ship location)
- Market data structure and TypeScript types
- Caching strategy for market data

### Task 2: Market Display
Create a market view showing all tradeable goods with buy/sell prices.

**Key decisions**:
- Table vs card layout for goods
- How to show supply/demand indicators
- Price display formatting

### Task 3: Buy/Sell Interface
Build forms to purchase and sell goods with quantity selection.

**Key decisions**:
- How to validate cargo space and credits
- Quantity input UX (slider, number input, or max button)
- Confirmation before large trades

### Task 4: Trading Logic
Implement API calls for buy/sell operations and handle responses.

**Key decisions**:
- Error handling for insufficient funds or cargo space
- Optimistic updates vs waiting for API response
- Transaction success feedback

### Task 5: Inventory Management
Update ship cargo display after trades and sync with API state.

**Key decisions**:
- Where to store inventory state (local store vs fetching fresh)
- How to reflect cargo capacity limits
- Handling cargo across multiple ships

### Task 6: Transaction Recording
Log all trades as the foundation for accounting system.

**Key decisions**:
- What data to capture (price, quantity, timestamp, location)
- Where to store temporarily before IndexedDB (next day)
- Transaction data structure

---

## Deliverable

By end of day, you should have:
- Functional market interface showing goods and prices
- Working buy/sell system that updates credits and cargo
- Inventory display reflecting current cargo
- Transaction log capturing all trades
- First experience with accounting transactions

---

## Key Learning

**Technical**: Form handling, optimistic updates, error handling, API integration patterns
**Accounting**: First real transactions - purchases (asset exchange) and sales (revenue generation)

---

## Tomorrow's Plan

Day 05 will add IndexedDB persistence using Dexie.js, storing all transactions locally for the accounting system.

---

**Files to create/modify**:
- `src/routes/markets/+page.svelte`
- `src/routes/markets/[marketId]/+page.svelte`
- `src/lib/api/markets.ts`
- `src/lib/api/trading.ts`
- `src/lib/stores/markets.ts`
- `src/lib/stores/inventory.ts`
- `src/lib/types/transactions.ts`

**Tag**: `day-04`
