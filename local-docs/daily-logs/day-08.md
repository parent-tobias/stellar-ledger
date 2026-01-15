# Day 08: `<ledger-view>` Component Part 1

**Week**: 2 of 4
**Day**: 8 of 20 (Wednesday)

**Objectives**:
- [ ] Create vanilla web component structure (Custom Element)
- [ ] Build T-account visualization layout
- [ ] Implement debit and credit display columns
- [ ] Define component properties and events API
- [ ] Add Shadow DOM for style encapsulation
- [ ] Set up component registration and usage

**Time Budget**: 90 minutes

---

## Overview

Today you're building your first **web component** from scratch - not a Svelte component, but a vanilla Custom Element using the Web Components API. This is a deep dive into web standards and domain boundaries.

The `<ledger-view>` component encapsulates the entire accounting domain. It can be used in any web application (React, Vue, vanilla JS) because it's built on web standards. This is powerful architecture - creating reusable, framework-agnostic components for distinct domains.

---

## Tasks

### Task 1: Web Component Skeleton
Create the basic Custom Element class structure.

**Key decisions**:
- Component naming (LedgerView vs ledger-view)
- Where to define the component (src/lib/components/web-components/)
- How to handle TypeScript with Custom Elements

### Task 2: Shadow DOM Setup
Implement Shadow DOM for style and markup encapsulation.

**Key decisions**:
- Open vs closed shadow root
- How to inject styles (style tag, constructed stylesheets)
- CSS custom properties for theming

### Task 3: T-Account Layout
Build the visual structure for displaying T-accounts (debit left, credit right).

**Key decisions**:
- HTML structure for T-account display
- CSS Grid or Flexbox for layout
- Responsive design considerations

### Task 4: Component Properties
Define the component's attribute/property API for passing data.

**Key decisions**:
- What data to accept (account name, transactions, balance)
- Attribute vs property handling
- Type conversion for complex data

### Task 5: Render Logic
Implement the rendering method to display transactions in T-account format.

**Key decisions**:
- When to re-render (attribute change, property change)
- How to efficiently update DOM
- Handling empty states

### Task 6: Component Registration
Register the component and integrate into the Svelte application.

**Key decisions**:
- Where to register (app initialization, lazy load)
- How to use in Svelte templates
- TypeScript definitions for component

---

## Deliverable

By end of day, you should have:
- Working vanilla web component structure
- T-account visualization displaying debits and credits
- Component properties API defined
- Shadow DOM with encapsulated styles
- Component registered and usable in Svelte app
- Understanding of Web Components API

---

## Key Learning

**Technical**: Web Components API, Custom Elements, Shadow DOM, framework-agnostic component design
**Accounting**: T-accounts as visual representation of debits and credits

---

## Tomorrow's Plan

Day 09 continues the `<ledger-view>` component with educational tooltips and interactive learning elements.

---

**Files to create/modify**:
- `src/lib/components/web-components/LedgerView.ts`
- `src/lib/components/web-components/index.ts`
- `src/lib/components/web-components/types.ts`
- `src/routes/ledger/+page.svelte` (integrate component)
- `src/app.ts` or `src/routes/+layout.svelte` (register component)
- `src/lib/styles/web-components/ledger-view.css`

**Tag**: `day-08`
