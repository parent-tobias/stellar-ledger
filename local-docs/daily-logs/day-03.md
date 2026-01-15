# Day 03: Ships & Navigation UI

**Week**: 1 of 4
**Day**: 3 of 20 (Tuesday)

**Objectives**:
- [ ] Fetch and display ship data from SpaceTraders API
- [ ] Create ship detail views with status and cargo information
- [ ] Build navigation structure with layouts and routing
- [ ] Implement Dashboard, Ships, Markets, and Ledger pages
- [ ] Set up SvelteKit file-based routing structure
- [ ] Introduce ships as assets in accounting context

**Time Budget**: 90 minutes

---

## Overview

Today we're building the core navigation and ship management interface. This is where the game starts to feel real - you'll see your fleet, understand what each ship carries, and be able to navigate between different sections of the application.

From an accounting perspective, this is your first encounter with **assets** - the ships are valuable resources that your agent owns. Understanding assets is fundamental to accounting, and ships make this concept tangible and visual.

---

## Tasks

### Task 1: Fetch Ship Data
Build API client methods to retrieve ship information from SpaceTraders.

**Key decisions**:
- How to type ship data structures in TypeScript
- Where to store ship state (stores vs component state)
- How to handle loading and error states

### Task 2: Ship List View
Create a page that displays all ships in a scannable list format.

**Key decisions**:
- What information to show in list view (name, status, location, cargo)
- How to make ships clickable for detail view
- Visual design for ship cards

### Task 3: Ship Detail View
Build detailed view showing full ship information including cargo, fuel, and status.

**Key decisions**:
- How to structure the detail route (e.g., `/ships/[shipId]`)
- What data to emphasize (current location, cargo capacity, condition)
- Navigation back to list view

### Task 4: Navigation Layout
Set up SvelteKit layouts with navigation menu for Dashboard, Ships, Markets, and Ledger sections.

**Key decisions**:
- Where to place navigation (sidebar, top bar, or both)
- Active route highlighting
- Mobile-responsive navigation approach

### Task 5: Page Structure
Create placeholder pages for Dashboard, Markets, and Ledger to complete navigation.

**Key decisions**:
- What to show on Dashboard (summary of key metrics)
- How to organize the overall information architecture
- Consistent page layout patterns

### Task 6: Accounting Context
Add educational notes explaining ships as assets in accounting terms.

**Key decisions**:
- Where to display educational content (tooltips, info boxes)
- How much detail to include without overwhelming users
- Visual indicators for accounting concepts

---

## Deliverable

By end of day, you should have:
- Working ship list displaying all agent's ships
- Detail view for individual ships with full information
- Navigation menu connecting Dashboard, Ships, Markets, and Ledger
- Basic page structure for all main sections
- Understanding of ships as accounting assets

---

## Key Learning

**Technical**: SvelteKit file-based routing, layouts, and component composition patterns
**Accounting**: Assets as the first account type - understanding what you own and its value

---

## Tomorrow's Plan

Day 04 will build the markets and trading interface, allowing you to buy and sell goods, which creates your first real accounting transactions.

---

**Files to create/modify**:
- `src/routes/ships/+page.svelte`
- `src/routes/ships/[shipId]/+page.svelte`
- `src/routes/+layout.svelte`
- `src/routes/dashboard/+page.svelte`
- `src/routes/markets/+page.svelte`
- `src/routes/ledger/+page.svelte`
- `src/lib/api/ships.ts`
- `src/lib/stores/ships.ts`

**Tag**: `day-03`
