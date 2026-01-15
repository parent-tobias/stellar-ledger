# Week 4: Polish & Deployment

**Days**: 16-20 (Monday-Friday)
**Goal**: Add finishing touches, sync capabilities, and deploy the application.

---

## Overview

Final week! By Friday, you should have:
- ✅ Captain's log with the `<captain-log>` web component (all 4 domains complete!)
- ✅ Cloud sync with Supabase
- ✅ Tutorial/onboarding system
- ✅ Tests for critical functionality
- ✅ Deployed application accessible to the world

This is the "make it real" phase. We're taking this from a development project to a production application that others can use.

---

## Weekly Learning Themes

### Technical Skills
- **Event logging**: Capturing and displaying narrative history
- **Cloud sync**: BaaS integration with Supabase
- **User onboarding**: Progressive disclosure and tutorials
- **Testing**: Unit tests for business logic
- **Deployment**: Production configuration and hosting

### Accounting Concepts
- **Audit trails**: Why we keep logs
- **Data integrity**: Ensuring accuracy across systems
- **Record retention**: What to keep and why

---

## Daily Breakdown

### Day 16 (Monday): Captain's Log & `<captain-log>` Component
**Time**: 90 minutes

**What we'll build**:
- Event capture system (trades, travels, errors, milestones)
- Rich log entry structure (timestamp, type, data, narrative)
- Fourth and final vanilla Custom Element!
- Timeline visualization
- Filtering and search

**Key decisions to make**:
- What events to log
- Log entry data structure
- Timeline UI design

**Expected challenges**:
- Deciding what's worth logging
- Timeline UI complexity
- Search/filter implementation

**Deliverable**: Working captain's log with event history

**UX focus**: The log should tell a story - make it engaging!

**All 4 domain components complete!** 🎉
- ✅ `<ledger-view>` - Accounting
- ✅ `<market-tracker>` - Economics
- ✅ `<fleet-manager>` - Operations
- ✅ `<captain-log>` - Narrative

---

### Day 17 (Tuesday): Supabase Integration
**Time**: 90 minutes

**What we'll build**:
- Supabase project setup
- Database schema (users, transactions, game_state, logs)
- Authentication integration
- Sync service for uploading data
- Conflict resolution strategy

**Key decisions to make**:
- What data to sync (everything? just transactions?)
- Sync frequency (real-time? periodic?)
- Offline-first vs online-first

**Expected challenges**:
- Supabase learning curve
- Schema design for flexibility
- Handling sync conflicts
- Managing API keys securely

**Deliverable**: Data syncing to cloud, accessible across devices

**Technical deep-dive**: Backend as a Service (BaaS), real-time subscriptions, authentication flows.

---

### Day 18 (Wednesday): Tutorial & Onboarding
**Time**: 90 minutes

**What we'll build**:
- First-time user flow
- Interactive tutorial (make first trade, view ledger, etc.)
- Contextual help system
- Accounting concept explanations
- Progressive feature introduction

**Key decisions to make**:
- Tutorial style (modal overlay? embedded? separate page?)
- How much to teach upfront
- When to introduce advanced features

**Expected challenges**:
- Making it engaging (not boring)
- Balancing education with action
- Avoiding information overload

**Deliverable**: New users can get started without confusion

**UX focus**: First impressions matter - make onboarding smooth and educational.

---

### Day 19 (Thursday): Testing & Bug Fixes
**Time**: 90 minutes

**What we'll focus on**:
- Unit tests for accounting logic
- Test double-entry validation
- Test P&L and balance sheet calculations
- Manual testing of all features
- Bug fixes discovered during testing
- Performance profiling

**Key decisions to make**:
- What to test (critical paths vs edge cases)
- Test data strategy
- When to stop (good enough vs perfect)

**Expected challenges**:
- Writing tests for complex logic
- Finding time to fix all bugs
- Balancing testing vs shipping

**Deliverable**: Core accounting logic tested, major bugs fixed

**Quality focus**: We don't need 100% coverage, but critical paths must work correctly.

---

### Day 20 (Friday): Deployment & Retrospective
**Time**: 90 minutes

**What we'll do**:
- Deploy to Vercel (or Netlify, or your preferred host)
- Production environment configuration
- Environment variables setup
- Final UI polish
- Write comprehensive retrospective
- Celebrate! 🎉

**Key decisions to make**:
- Hosting platform
- Custom domain (optional)
- Analytics/monitoring (optional)

**Expected challenges**:
- Deployment configuration issues
- Environment variable management
- Last-minute bugs in production

**Deliverable**: Live application accessible at a URL!

**Retrospective topics**:
- What went well?
- What was harder than expected?
- What would you do differently?
- What did you learn?
- What's next?

---

## Week 4 Success Criteria

By end of Friday, you should have:

**Functional**:
- [x] Captain's log recording events
- [x] All 4 domain web components complete
- [x] Supabase sync working
- [x] Tutorial for new users
- [x] Critical paths tested
- [x] Application deployed and accessible

**Technical**:
- [x] Clean, documented codebase
- [x] Tests for core logic
- [x] Production configuration
- [x] Deployed to hosting platform

**Documentation**:
- [x] 5 daily blog posts published
- [x] Final retrospective written
- [x] README updated with live link
- [x] Day 20 tagged as `day-20`
- [x] Architecture documented

---

## After Week 4

You did it! 🎉

**20 days of building in public complete!**

Now you have:
- A fully functional accounting game
- 4 production-ready vanilla web components
- 20 detailed blog posts documenting the journey
- A deployed application others can use
- Deep knowledge of SvelteKit, accounting, and domain-driven design

### What's Next?

**Option 1: Keep Building**
- Add features from the "Post-20-Day Ideas" list
- Expand accounting concepts (depreciation, accruals, ratios)
- Add social features
- Build a teacher dashboard

**Option 2: Polish & Promote**
- Improve UI/UX based on user feedback
- Add more tutorial content
- Create video walkthroughs
- Share on Product Hunt, Hacker News, etc.

**Option 3: Pivot to Education**
- Write a comprehensive course based on your learnings
- Create video tutorials
- Develop a teaching curriculum
- Offer it to schools or bootcamps

**Option 4: Extract & Package**
- Extract the web components as a library
- Publish accounting utilities to npm
- Create a template for similar projects
- Share patterns as reusable code

### Community

If you built this by following along:
- Share your deployment!
- Write about what you learned
- Contribute improvements via PR
- Help others who are starting

---

## Reflection Questions

Take time to reflect:

1. **Technical Growth**: What technical skills did you gain?
2. **Domain Knowledge**: How well do you understand accounting now?
3. **Process**: What worked well in your daily rhythm?
4. **Challenges**: What was harder than expected?
5. **Surprises**: What was easier than expected?
6. **Pride**: What are you most proud of?
7. **Future**: Would you do another 20-day build?

---

## Thank You

Thank you for following this journey. Whether you built it yourself or just read along, I hope you found value in the process.

Building in public is vulnerable but rewarding. Sharing both successes and struggles helps everyone learn.

Here's to your next project! 🚀

---

**Week Status**: Not Started
**Last Updated**: Day 1
