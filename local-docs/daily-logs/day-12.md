# Day 12: Market History Tracking

**Week**: 3 of 4
**Day**: 12 of 20 (Tuesday)

**Objectives**:
- [ ] Design time-series data structure for price history
- [ ] Create IndexedDB schema for market data storage
- [ ] Implement background process to track prices periodically
- [ ] Build historical data aggregation queries
- [ ] Add data cleanup for storage management
- [ ] Introduce market-to-market accounting concept

**Time Budget**: 90 minutes

---

## Overview

Today you're building a **market intelligence system** - tracking prices over time so you can identify trends and opportunities. This transforms you from a reactive trader into a strategic one. You'll see which goods are increasing in price, which markets have the best deals, and when to buy or sell.

From an accounting perspective, this introduces **mark-to-market accounting** - valuing your inventory at current market prices rather than historical cost. This gives a more accurate picture of your financial position and helps you understand unrealized gains and losses.

---

## Tasks

### Task 1: Time-Series Data Structure
Design efficient structure for storing price history with timestamps.

**Key decisions**:
- Data granularity (every minute, hour, or on-demand)
- What to store (price, volume, supply/demand indicators)
- Index strategy for fast time-range queries

### Task 2: IndexedDB Schema Extension
Add tables/collections for market history data.

**Key decisions**:
- Schema design (one table vs per-market)
- Compound indexes for queries (market + date)
- Data retention policy (keep all data vs rolling window)

### Task 3: Price Tracking Process
Implement background polling or event-driven price capture.

**Key decisions**:
- When to capture prices (on page load, on timer, on trade)
- How often to poll (balance freshness vs API limits)
- Handling offline/errors gracefully

### Task 4: Historical Data Queries
Build queries to retrieve price history for analysis.

**Key decisions**:
- Query patterns (single good, all goods in market, time range)
- Aggregation (raw data vs OHLC candles)
- Performance optimization for large datasets

### Task 5: Data Cleanup and Management
Implement storage limits and old data removal.

**Key decisions**:
- How much history to keep (30 days, 90 days, forever)
- Cleanup strategy (automatic vs manual)
- Export functionality for archiving

### Task 6: Mark-to-Market Calculations
Add ability to value inventory at current market prices.

**Key decisions**:
- Where to display (balance sheet, inventory view)
- How to show difference from cost basis
- Unrealized gain/loss calculation

---

## Deliverable

By end of day, you should have:
- Time-series data structure for price history
- IndexedDB schema storing market data
- Background process capturing prices regularly
- Historical data queries for analysis
- Storage management and cleanup
- Mark-to-market inventory valuation

---

## Key Learning

**Technical**: Time-series data, efficient storage patterns, background processing, data aggregation
**Accounting**: Mark-to-market accounting, inventory valuation methods, unrealized gains/losses

---

## Tomorrow's Plan

Day 13 builds the `<market-tracker>` web component to visualize price history with charts and trends.

---

**Files to create/modify**:
- `src/lib/db/marketHistory.ts`
- `src/lib/db/schema.ts` (update)
- `src/lib/services/priceTracker.ts`
- `src/lib/accounting/markToMarket.ts`
- `src/lib/utils/timeSeriesQueries.ts`
- `src/lib/utils/dataCleanup.ts`
- `src/routes/inventory/+page.svelte` (update with mark-to-market)

**Tag**: `day-12`
