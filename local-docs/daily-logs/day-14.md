# Day 14: Fleet Automation Part 1

**Week**: 3 of 4
**Day**: 14 of 20 (Thursday)

**Objectives**:
- [ ] Design route definition data structure
- [ ] Build UI for creating and editing routes
- [ ] Implement waypoint sequencing and ordering
- [ ] Create basic automation logic for executing routes
- [ ] Save routes to IndexedDB for persistence
- [ ] Set up framework for automated transaction recording

**Time Budget**: 90 minutes

---

## Overview

Today you're introducing **automation** - the ability to create routes that ships can follow automatically. This is where the game becomes scalable. Instead of manually trading on every ship, you define "milk runs" (profitable repeated routes) and let ships execute them.

From an accounting perspective, automation means **automated transaction recording**. Every automated trade must be logged in the ledger just like manual trades. This ensures your books stay accurate even as your fleet grows and operations become more complex.

---

## Tasks

### Task 1: Route Data Structure
Design the structure for storing routes (waypoints, actions, conditions).

**Key decisions**:
- What defines a route (sequence of waypoints with actions)
- Actions at each waypoint (buy, sell, refuel, wait)
- Conditional logic (if/then rules) vs simple sequences

### Task 2: Route Creation UI
Build interface to define new routes with waypoints and actions.

**Key decisions**:
- UI pattern (wizard, form, visual map)
- How to select waypoints (dropdown, map click, search)
- Action configuration per waypoint

### Task 3: Waypoint Sequencing
Implement logic to order waypoints and calculate route efficiency.

**Key decisions**:
- How to handle circular routes (return to start)
- Route optimization (shortest path, most profitable)
- Validation (ensure route is viable)

### Task 4: Basic Automation Logic
Create execution engine that follows route steps.

**Key decisions**:
- State machine for route execution
- How to handle ship status (in transit, docked, executing)
- Error handling and recovery

### Task 5: Route Persistence
Save and load routes from IndexedDB.

**Key decisions**:
- Route schema in database
- How to version routes (for future updates)
- Associating routes with ships

### Task 6: Transaction Recording Hook
Ensure automated trades are recorded in the ledger.

**Key decisions**:
- Reuse existing transaction recording logic
- Additional metadata for automated vs manual trades
- Audit trail for automation

---

## Deliverable

By end of day, you should have:
- Route data structure defined
- UI for creating and editing routes
- Waypoint sequencing working
- Basic automation engine executing simple routes
- Routes persisted in IndexedDB
- Automated transactions recorded in ledger

---

## Key Learning

**Technical**: State machines, task scheduling, automation patterns, route optimization basics
**Accounting**: Automated transaction recording, maintaining accuracy with automation

---

## Tomorrow's Plan

Day 15 builds the `<fleet-manager>` web component for assigning ships to routes and monitoring execution.

---

**Files to create/modify**:
- `src/lib/automation/route.ts`
- `src/lib/automation/routeExecutor.ts`
- `src/lib/automation/stateMachine.ts`
- `src/lib/db/routes.ts`
- `src/routes/automation/+page.svelte`
- `src/routes/automation/create/+page.svelte`
- `src/lib/components/RouteEditor.svelte`

**Tag**: `day-14`
