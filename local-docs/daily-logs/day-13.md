# Day 13: `<market-tracker>` Component

**Week**: 3 of 4
**Day**: 13 of 20 (Wednesday)

**Objectives**:
- [ ] Build vanilla web component for market data visualization
- [ ] Create price history charts using Canvas or SVG
- [ ] Implement trend indicators (moving averages, slopes)
- [ ] Add trade opportunity alerts and highlighting
- [ ] Design responsive chart layout
- [ ] Integrate component into market pages

**Time Budget**: 90 minutes

---

## Overview

Today you're building the second domain web component: `<market-tracker>`. This component encapsulates all market analytics and visualization, making it reusable across different pages and even different applications.

You'll implement data visualization from scratch - either with Canvas for performance or SVG for simplicity. This is where you transform raw price data into insights: trend lines, moving averages, support/resistance levels, and opportunity alerts. This is the economics domain made visual.

---

## Tasks

### Task 1: Web Component Structure
Create the vanilla Custom Element for market tracking.

**Key decisions**:
- Component API (what data to accept as properties)
- Shadow DOM setup for isolation
- Event system for user interactions

### Task 2: Chart Rendering
Implement price chart visualization using Canvas or SVG.

**Key decisions**:
- Canvas vs SVG (performance vs simplicity)
- Chart type (line, candlestick, area)
- Axis scaling and labeling

### Task 3: Trend Indicators
Add technical analysis indicators like moving averages.

**Key decisions**:
- Which indicators to include (SMA, EMA, trend lines)
- How to calculate efficiently
- Visual styling for indicators

### Task 4: Trade Opportunities
Implement logic to identify and highlight good trading opportunities.

**Key decisions**:
- What constitutes an opportunity (price drops, trends, arbitrage)
- Alert system (visual highlighting, notifications)
- Customizable thresholds

### Task 5: Responsive Design
Make charts work across different screen sizes.

**Key decisions**:
- How to handle chart resizing
- Mobile-specific interactions (touch, pan, zoom)
- Layout adjustments for small screens

### Task 6: Integration
Add the component to market pages and inventory views.

**Key decisions**:
- Where to show market tracker (market page, dashboard, inventory)
- What data to pass to component
- How to handle loading and error states

---

## Deliverable

By end of day, you should have:
- Working `<market-tracker>` web component
- Price history charts rendering correctly
- Trend indicators showing market movements
- Trade opportunity alerts highlighting good deals
- Responsive chart layout
- Component integrated into market pages

---

## Key Learning

**Technical**: Data visualization, Canvas/SVG APIs, charting fundamentals, technical analysis calculations
**Accounting**: Market analysis, pricing trends (indirectly related to inventory valuation)

---

## Tomorrow's Plan

Day 14 starts building fleet automation with route definitions and basic automation logic.

---

**Files to create/modify**:
- `src/lib/components/web-components/MarketTracker.ts`
- `src/lib/components/web-components/Chart.ts`
- `src/lib/utils/technicalAnalysis.ts`
- `src/lib/utils/tradeOpportunities.ts`
- `src/lib/styles/web-components/market-tracker.css`
- `src/routes/markets/+page.svelte` (update)
- `src/routes/dashboard/+page.svelte` (update)

**Tag**: `day-13`
