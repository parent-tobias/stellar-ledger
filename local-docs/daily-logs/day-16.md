# Day 16: Captain's Log & `<captain-log>` Component

**Week**: 4 of 4
**Day**: 16 of 20 (Monday)

**Objectives**:
- [ ] Design event capture system for game activities
- [ ] Create rich log entry structure with text and metadata
- [ ] Build `<captain-log>` web component for display
- [ ] Implement timeline visualization of events
- [ ] Add filtering and search functionality
- [ ] Connect log system to accounting audit trail concept

**Time Budget**: 90 minutes

---

## Overview

Welcome to the final week! Today you're building the **Captain's Log** - a narrative layer that captures the story of your trading journey. Every significant event (first trade, first profit, fleet milestones, errors, achievements) gets logged with rich context.

From an accounting perspective, this is your **audit trail** - a chronological record of everything that happened. Accountants love audit trails because they provide transparency and accountability. If something goes wrong, you can trace back through the log to understand what happened and when.

---

## Tasks

### Task 1: Event Capture System
Build system to capture significant game events automatically.

**Key decisions**:
- What events to capture (trades, achievements, errors, milestones)
- Event data structure (timestamp, type, description, metadata)
- Where to trigger captures (centralized vs distributed)

### Task 2: Rich Log Entries
Design log entry format with structured data and narrative text.

**Key decisions**:
- What makes a good log entry (readable, informative, searchable)
- Metadata to include (location, ship, credits, profit)
- Auto-generated vs manual entries

### Task 3: `<captain-log>` Web Component
Build the fourth and final domain web component for displaying logs.

**Key decisions**:
- Component API (log entries, filters, configuration)
- Shadow DOM and styling approach
- Responsive design for different screen sizes

### Task 4: Timeline Visualization
Create timeline UI showing events chronologically with visual hierarchy.

**Key decisions**:
- Timeline layout (vertical, horizontal, grouped)
- Visual treatment for different event types
- Density (show all vs summary view)

### Task 5: Filtering and Search
Add controls to filter by event type, date, or search text.

**Key decisions**:
- Filter UI design (dropdowns, chips, search bar)
- What fields are searchable
- Performance for large log sets

### Task 6: Audit Trail Integration
Connect captain's log to accounting concept of audit trails.

**Key decisions**:
- Which accounting events appear in log
- How to link log entries to ledger transactions
- Educational content explaining audit trails

---

## Deliverable

By end of day, you should have:
- Event capture system logging game activities
- Rich log entries with structured data
- Working `<captain-log>` web component
- Timeline visualization of all events
- Filtering and search functionality
- Connection to accounting audit trail concept

---

## Key Learning

**Technical**: Event logging patterns, timeline UI, search implementation, data structure design
**Accounting**: Audit trails, historical record keeping, transparency in financial systems

---

## Tomorrow's Plan

Day 17 integrates Supabase for cloud storage and sync capabilities.

---

**Files to create/modify**:
- `src/lib/events/captainLog.ts`
- `src/lib/events/eventCapture.ts`
- `src/lib/components/web-components/CaptainLog.ts`
- `src/lib/db/events.ts`
- `src/lib/styles/web-components/captain-log.css`
- `src/routes/log/+page.svelte`
- `src/lib/utils/eventFiltering.ts`

**Tag**: `day-16`
