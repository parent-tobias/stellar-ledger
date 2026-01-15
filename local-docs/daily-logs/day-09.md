# Day 09: `<ledger-view>` Component Part 2

**Week**: 2 of 4
**Day**: 9 of 20 (Thursday)

**Objectives**:
- [ ] Add educational tooltips explaining accounting concepts
- [ ] Build interactive overlays for learning moments
- [ ] Implement color coding and visual hierarchy
- [ ] Add hover states and explanatory animations
- [ ] Create progressive disclosure UI patterns
- [ ] Finalize Svelte app integration

**Time Budget**: 90 minutes

---

## Overview

Today you're making the `<ledger-view>` component educational. The goal isn't just to display data - it's to *teach* double-entry bookkeeping. You'll add tooltips, explanatory overlays, and visual cues that help users understand what debits and credits mean.

This is where educational game design meets accounting. Every element should help players learn. Color coding shows relationships. Tooltips explain terminology. Animations show how transactions flow between accounts. By the end of today, your ledger is a teaching tool.

---

## Tasks

### Task 1: Educational Tooltips
Add informative tooltips to key elements (debit, credit, account names).

**Key decisions**:
- Tooltip trigger (hover, click, or focus)
- Content: what to explain and how much detail
- Tooltip positioning and accessibility

### Task 2: Interactive Overlays
Build modal or popover overlays explaining concepts in depth.

**Key decisions**:
- When to show overlays (first time, on request)
- Overlay content (text, diagrams, examples)
- How users dismiss or navigate overlays

### Task 3: Color Coding System
Implement consistent color coding for debits, credits, and account types.

**Key decisions**:
- Color choices (accessible, meaningful, aesthetically pleasing)
- Where to apply colors (text, backgrounds, borders)
- Dark mode support

### Task 4: Visual Hierarchy
Use typography, spacing, and size to guide attention.

**Key decisions**:
- What information is most important (balance, recent transactions)
- How to de-emphasize less critical data
- Font sizes, weights, and spacing

### Task 5: Animations and Transitions
Add subtle animations showing transaction flow and balance changes.

**Key decisions**:
- What to animate (entries appearing, balances updating)
- Animation duration and easing
- Performance considerations

### Task 6: Progressive Disclosure
Implement "learn more" patterns to avoid overwhelming beginners.

**Key decisions**:
- What starts collapsed vs expanded
- How to indicate expandable content
- Persistence of user preferences

---

## Deliverable

By end of day, you should have:
- Educational tooltips on all key accounting terms
- Interactive overlays explaining debits, credits, and T-accounts
- Color-coded visual system for easy understanding
- Polished visual hierarchy and typography
- Subtle animations enhancing comprehension
- Fully integrated and educational `<ledger-view>` component

---

## Key Learning

**Technical**: Accessible UI patterns, progressive disclosure, CSS animations, educational UX design
**Accounting**: How to teach debits and credits interactively through visualization

---

## Tomorrow's Plan

Day 10 builds the Profit & Loss statement, calculating revenue and expenses to show profitability.

---

**Files to create/modify**:
- `src/lib/components/web-components/LedgerView.ts` (update)
- `src/lib/components/web-components/Tooltip.ts`
- `src/lib/components/web-components/EducationalOverlay.ts`
- `src/lib/styles/web-components/ledger-view.css` (update)
- `src/lib/content/accountingGlossary.ts`
- `src/routes/ledger/+page.svelte` (update)

**Tag**: `day-09`
