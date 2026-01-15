# Day 17: Supabase Integration

**Week**: 4 of 4
**Day**: 17 of 20 (Tuesday)

**Objectives**:
- [ ] Set up Supabase project and configuration
- [ ] Design database schema for cloud storage
- [ ] Implement authentication integration
- [ ] Build sync logic for transactions and game state
- [ ] Handle sync conflicts and offline scenarios
- [ ] Test cloud backup and restore functionality

**Time Budget**: 90 minutes

---

## Overview

Today you're adding cloud sync using **Supabase** - a Backend-as-a-Service platform built on PostgreSQL. This enables multiple devices, backup/restore, and future multiplayer features. Your local-first architecture stays intact, but now you can sync to the cloud when online.

This introduces the complexity of **distributed systems**: sync conflicts, offline handling, and data consistency. You'll implement a strategy to keep IndexedDB and Supabase in sync while respecting local-first principles - the app works offline, syncs when online.

---

## Tasks

### Task 1: Supabase Project Setup
Create Supabase project and configure environment variables.

**Key decisions**:
- Project name and region
- Environment variable management (local vs production)
- API key security

### Task 2: Database Schema Design
Design PostgreSQL schema matching IndexedDB structure.

**Key decisions**:
- Table structure (transactions, routes, events, settings)
- Relationships and foreign keys
- Indexes for performance

### Task 3: Authentication Integration
Implement Supabase auth for user accounts.

**Key decisions**:
- Auth method (email, OAuth, magic link)
- Where to gate features (sync only vs full app)
- User profile and preferences storage

### Task 4: Sync Logic
Build bidirectional sync between IndexedDB and Supabase.

**Key decisions**:
- Sync trigger (manual, on change, periodic)
- Sync strategy (full sync vs incremental)
- Handling large datasets

### Task 5: Conflict Resolution
Implement logic to handle sync conflicts (same data modified locally and remotely).

**Key decisions**:
- Conflict resolution strategy (last-write-wins, merge, user choice)
- How to detect conflicts (timestamps, version numbers)
- UI for conflict notification

### Task 6: Offline Handling
Ensure app works smoothly when offline and syncs when connection returns.

**Key decisions**:
- How to detect online/offline state
- Queue for pending sync operations
- User feedback for sync status

---

## Deliverable

By end of day, you should have:
- Supabase project configured and connected
- Database schema created in Supabase
- Authentication working with user accounts
- Bidirectional sync between IndexedDB and Supabase
- Conflict resolution logic handling edge cases
- Offline support with queue-based sync

---

## Key Learning

**Technical**: Backend-as-a-Service platforms, cloud sync patterns, conflict resolution, distributed systems basics
**Accounting**: Data integrity in distributed systems (ensuring books stay accurate across sync)

---

## Tomorrow's Plan

Day 18 builds the tutorial and onboarding experience to help new users learn the game and accounting concepts.

---

**Files to create/modify**:
- `src/lib/supabase/client.ts`
- `src/lib/supabase/schema.sql`
- `src/lib/supabase/sync.ts`
- `src/lib/supabase/auth.ts`
- `src/lib/supabase/conflictResolution.ts`
- `src/routes/auth/+page.svelte`
- `src/lib/stores/syncStatus.ts`
- `.env.local` and `.env.example`

**Tag**: `day-17`
