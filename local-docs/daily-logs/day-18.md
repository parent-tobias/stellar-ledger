# Day 18: Tutorial & Onboarding

**Week**: 4 of 4
**Day**: 18 of 20 (Wednesday)

**Objectives**:
- [ ] Design first-time user experience flow
- [ ] Build guided tour of accounting concepts
- [ ] Create interactive tutorial missions
- [ ] Implement progressive disclosure of features
- [ ] Add contextual help and tooltips throughout app
- [ ] Test onboarding with fresh user perspective

**Time Budget**: 90 minutes

---

## Overview

Today you're building the **onboarding experience** - the critical first 5-10 minutes that determines whether users understand and enjoy your game. You'll create a guided tour that teaches both the game mechanics and accounting fundamentals in an engaging, interactive way.

Good onboarding uses **progressive disclosure** - revealing features gradually rather than overwhelming users upfront. You'll design tutorial missions that introduce concepts one at a time, provide context-sensitive help, and celebrate early wins to build confidence and momentum.

---

## Tasks

### Task 1: First-Time User Flow
Design the complete onboarding sequence from account creation to first trade.

**Key decisions**:
- What to show first (story, mechanics, or both)
- How many steps before users can explore freely
- Skip/exit options for experienced users

### Task 2: Guided Tour System
Build tutorial system that highlights UI elements and provides instructions.

**Key decisions**:
- Tour library (custom vs existing solution like Shepherd.js)
- Visual style (overlays, arrows, modals)
- Navigation (linear steps vs branching)

### Task 3: Interactive Tutorial Missions
Create mini-missions teaching key concepts (first trade, reading ledger, viewing P&L).

**Key decisions**:
- How many missions (3-5 core missions)
- Success criteria and validation
- Rewards and motivation (achievements, progress tracking)

### Task 4: Progressive Feature Disclosure
Implement system to unlock features as users progress.

**Key decisions**:
- What starts locked (automation, advanced reports)
- Unlock triggers (tutorial completion, milestone achievements)
- Visual indicators for locked/unlocked state

### Task 5: Contextual Help
Add help icons and tooltips throughout the app explaining features.

**Key decisions**:
- Help content structure (tips, explainers, links to docs)
- Help icon placement (near every feature or strategic locations)
- Access to full help/glossary

### Task 6: Accounting Education Integration
Weave accounting lessons into tutorial naturally.

**Key decisions**:
- Which concepts to teach first (assets, transactions, ledger)
- Balance between game tutorial and accounting education
- Using game context to make accounting relatable

---

## Deliverable

By end of day, you should have:
- Complete first-time user onboarding flow
- Guided tour system highlighting key features
- Interactive tutorial missions teaching core concepts
- Progressive feature disclosure unlocking complexity
- Contextual help available throughout app
- Accounting education integrated into onboarding

---

## Key Learning

**Technical**: User onboarding patterns, progressive disclosure, tutorial UX design, feature flags
**Accounting**: Teaching accounting concepts in accessible, engaging ways (pedagogical design)

---

## Tomorrow's Plan

Day 19 focuses on testing and bug fixes, ensuring quality and reliability before deployment.

---

**Files to create/modify**:
- `src/lib/tutorial/tutorialSystem.ts`
- `src/lib/tutorial/missions.ts`
- `src/lib/tutorial/progressiveDisclosure.ts`
- `src/routes/tutorial/+page.svelte`
- `src/lib/components/TutorialOverlay.svelte`
- `src/lib/components/ContextualHelp.svelte`
- `src/lib/stores/tutorialProgress.ts`
- `src/lib/content/tutorialContent.ts`

**Tag**: `day-18`
