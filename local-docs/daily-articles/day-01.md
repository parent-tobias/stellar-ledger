# Day 01: Project Setup and SvelteKit Initialization

**Date**: 2026-01-15
**Time Spent**: 60 minutes
**Git Tag**: `day-01`

## Objectives

What we set out to accomplish today:

- [x] Initialize SvelteKit project with TypeScript
- [x] Configure ESLint, Prettier, and Vitest
- [x] Understand project structure and tooling
- [x] Exclude documentation from linting/formatting
- [x] Create initial commit and tag

## What We Built

### SvelteKit Project Foundation

Today we laid the groundwork for Stellar Ledger, an educational accounting game built on the SpaceTraders API. We used the new `sv` CLI (Svelte's unified tooling) to scaffold a SvelteKit project with TypeScript and modern development tools.

```bash
npx sv create stellar-ledger
# Selected: SvelteKit minimal, TypeScript, eslint, prettier, vitest, pnpm
```

**Why SvelteKit over plain Svelte?**
- File-based routing (easier to scale)
- Built-in layouts and data loading patterns
- Better developer experience with less configuration
- SSR capabilities if we need them later

**Files created**:
- `src/routes/+page.svelte` - Homepage component
- `src/app.html` - HTML shell
- `svelte.config.js` - SvelteKit configuration
- `vite.config.ts` - Build tool configuration
- `eslint.config.js` - Linting configuration (flat config format)
- `.prettierrc` & `.prettierignore` - Code formatting

### Tooling Configuration

We configured the project to exclude documentation from linting and formatting, keeping the tools focused on actual code.

**`.prettierignore`**:
```
local-docs/
```

**`eslint.config.js`**:
```javascript
export default defineConfig(
	includeIgnoreFile(gitignorePath),
	{
		ignores: ['local-docs/**']
	},
	// ... rest of config
```

### Custom Welcome Page

Replaced the default homepage with a custom landing page introducing the project.

```svelte
<script lang="ts">
	let projectName = 'Stellar Ledger';
</script>

<div class="container">
	<h1>Welcome to {projectName}</h1>
	<p>A 20-day journey building an educational accounting game on SpaceTraders.</p>
	<!-- ... -->
</div>
```

## Accounting Concept Introduced

**Concept**: Setting Up the Books

**Explanation**: Before a business can track anything, it needs to set up its accounting system - its "books." This includes choosing software, establishing chart of accounts structure, and determining how transactions will be recorded.

**Implementation**: Day 1 is about setting up our development environment - the equivalent of a business setting up its accounting infrastructure before it can start recording transactions.

**Player Experience**: Players won't see accounting concepts on Day 1, but the foundation we're building today will support all the financial education features to come.

## Technical Deep Dive

### Why pnpm Over npm?

**Why this approach**:
- **Faster**: Uses hard links and content-addressable storage
- **Stricter**: Prevents "phantom dependencies" (importing packages not declared in package.json)
- **Disk efficient**: Shares packages across projects globally
- **Better for learning**: Catches mistakes that npm might silently allow

**Alternatives considered**:
- **npm**: Most common, but slower and less strict
- **yarn**: Good alternative, but pnpm is gaining momentum
- **bun**: Bleeding edge, might be too unstable for a tutorial series

**Trade-offs**:
- **Pro**: Better DX, catches errors earlier
- **Con**: One more tool to install, slightly different commands

### Modern ESLint Flat Config

SvelteKit now uses ESLint's flat config format (`eslint.config.js`) instead of the legacy `.eslintrc.cjs` format.

**Why this matters**:
- More flexible and composable
- Better TypeScript support
- Easier to understand (just JavaScript)
- The future of ESLint configuration

```javascript
import { defineConfig } from 'eslint/config';

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	{ ignores: ['local-docs/**'] },
	js.configs.recommended,
	...ts.configs.recommended
);
```

## Gotchas Encountered

### TypeScript Exclusions Don't Propagate

**What happened**: Initially tried to exclude `local-docs/` only in `.gitignore`, but ESLint and Prettier still tried to process those files.

**Why it happened**: Each tool has its own ignore mechanism. `.gitignore` only affects git, not other tools.

**How we fixed it**: Added explicit exclusions to both `.prettierignore` and `eslint.config.js`.

**Prevention**: Always configure tool-specific ignore patterns when you have non-code directories.

## Gotchas Avoided

- **Over-engineering**: We chose "SvelteKit minimal" template specifically to avoid example code we'd delete
- **Testing overwhelm**: Selected Vitest but didn't add Playwright yet - we'll add E2E testing later if needed
- **Custom domain complexity**: Keeping deployment simple (Day 20) by not committing to custom domains upfront

## Abstracted Learnings

1. **Start minimal, add incrementally**: It's easier to add tools later than to fight with a bloated starter template
2. **Tool-specific configuration**: Each tool (git, ESLint, Prettier) needs its own ignore patterns
3. **Modern defaults**: Using the latest CLI (`sv create`) and config formats (flat ESLint) sets us up for long-term maintainability
4. **Package manager choice matters**: pnpm's strictness will catch errors early, helping us build better code

## Tomorrow's Plan

What we'll tackle on Day 2:

- Register for SpaceTraders API account
- Create TypeScript API client service
- Implement authentication flow with token storage
- Display agent information in dashboard
- Learn about API client patterns and TypeScript type generation

## Resources Referenced

- [SvelteKit Docs](https://kit.svelte.dev/docs) - Official documentation
- [Svelte CLI (`sv`) Docs](https://svelte.dev/docs/cli) - New unified tooling
- [pnpm Documentation](https://pnpm.io/) - Package manager reference
- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files) - New config format

## Code Stats

- **Files added**: ~15 (entire SvelteKit scaffold)
- **Files modified**: 3 (`.prettierignore`, `eslint.config.js`, `src/routes/+page.svelte`)
- **Lines added**: ~500 (mostly generated)
- **Lines removed**: ~20 (default homepage content)
- **Tests added**: 0 (test infrastructure ready, tests coming later)

## Commits

Key commits:
- Initial SvelteKit setup with TypeScript, ESLint, Prettier, and Vitest
- Configure documentation exclusions
- Custom welcome page

---

**Status**: ✅ All objectives completed

**Next Session**: Day 2 - SpaceTraders API & Authentication
