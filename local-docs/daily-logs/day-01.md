# Day 01: Project Setup and SvelteKit Initialization

**Objectives**:
- [ ] Verify development environment prerequisites
- [ ] Initialize SvelteKit project with TypeScript
- [ ] Configure tooling (ESLint, Prettier, Vitest)
- [ ] Understand the generated project structure
- [ ] Run the development server
- [ ] Make first commit

**Time Budget**: 60-90 minutes

---

## Prerequisites Check

Before we begin, verify you have the required tools installed.

### Node.js

```bash
node --version
```

**Required**: Node.js 18.x or higher (20.x LTS recommended)

If you need to install Node.js:
- **Recommended**: Use [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager)
- **Alternative**: Download from [nodejs.org](https://nodejs.org)

### pnpm

We're using **pnpm** instead of npm for this project. Here's why:

**Why pnpm?**
1. **Faster**: Uses hard links and content-addressable storage
2. **Stricter**: Prevents "phantom dependencies" (importing packages not in package.json)
3. **Disk efficient**: Shares packages across projects
4. **Better for learning**: Catches mistakes that npm might silently allow
5. **Future-focused**: Growing ecosystem adoption

Install pnpm globally:

```bash
npm install -g pnpm
```

Verify installation:

```bash
pnpm --version
```

**Note for followers using npm**: All pnpm commands have npm equivalents:
- `pnpm install` → `npm install`
- `pnpm add <package>` → `npm install <package>`
- `pnpm run dev` → `npm run dev`

### Git

```bash
git --version
```

If not installed: [git-scm.com/downloads](https://git-scm.com/downloads)

---

## Step 1: Create the SvelteKit Project

SvelteKit provides an interactive CLI to scaffold a new project.

```bash
cd /path/to/your/projects/folder
pnpm create svelte@latest stellar-ledger
```

### Interactive Prompts

The CLI will ask several questions. Here's what we'll choose and why:

**1. Which Svelte app template?**
```
◯ SvelteKit demo app
◉ Skeleton project
◯ Library project
```

Choose: **Skeleton project**

**Why**: We're building from scratch to understand every piece. The demo app includes example code we'd just delete.

---

**2. Add type checking with TypeScript?**
```
◯ Yes, using JavaScript with JSDoc comments
◉ Yes, using TypeScript syntax
◯ No
```

Choose: **Yes, using TypeScript syntax**

**Why**:
- Type safety catches bugs early
- Better IDE autocomplete and refactoring
- Self-documenting code
- Essential for a 30-day project where we need to move fast without breaking things

---

**3. Select additional options:**
```
◯ Add ESLint for code linting
◯ Add Prettier for code formatting
◯ Add Playwright for browser testing
◯ Add Vitest for unit testing
```

Choose: **ESLint, Prettier, and Vitest** (use spacebar to select multiple)

**Why ESLint**: Catches common mistakes and enforces code quality standards

**Why Prettier**: Automatic code formatting means zero time spent on formatting debates. We focus on logic, not spacing.

**Why Vitest**: Fast, modern testing framework. We'll add tests as we go (not every day, but for critical logic).

**Why NOT Playwright (for now)**: E2E testing is valuable but adds complexity. We can add it later if needed. For a 30-day journey, we'll focus on unit tests and manual testing.

---

The CLI will create the project and install dependencies.

---

## Step 2: Explore the Generated Structure

```bash
cd stellar-ledger
ls -la
```

You should see:

```
stellar-ledger/
├── .svelte-kit/          # Build output (gitignored)
├── node_modules/         # Dependencies (gitignored)
├── src/
│   ├── routes/           # File-based routing
│   │   └── +page.svelte  # Homepage
│   ├── app.d.ts          # TypeScript definitions
│   ├── app.html          # HTML template
│   └── lib/              # Shared utilities and components
├── static/               # Static assets (served as-is)
├── tests/                # Vitest test files
├── .eslintrc.cjs         # ESLint configuration
├── .gitignore
├── .prettierrc
├── package.json
├── svelte.config.js      # SvelteKit configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite bundler configuration
```

### Understanding Key Files

**`src/routes/+page.svelte`**:
- The homepage component
- SvelteKit uses file-based routing: the file path determines the URL
- `+page.svelte` files are routes
- We'll learn more about `+layout.svelte`, `+server.ts`, `+page.ts` in coming days

**`src/app.html`**:
- The HTML shell that wraps your app
- Notice `%sveltekit.head%` and `%sveltekit.body%` placeholders

**`svelte.config.js`**:
- SvelteKit configuration
- Adapters (for deployment targets)
- Preprocessing options

**`vite.config.ts`**:
- Vite is the build tool SvelteKit uses
- We'll configure Vitest here later

---

## Step 3: Run the Development Server

```bash
pnpm dev
```

You should see output like:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

**Open** `http://localhost:5173/` in your browser.

You should see a minimal welcome page.

### Understanding What Just Happened

1. **Vite** started a dev server with Hot Module Replacement (HMR)
2. **SvelteKit** compiled your routes
3. Changes to `.svelte` files will auto-reload in the browser

Leave this running and open a new terminal for the next steps.

---

## Step 4: Make Our First Change

Open `src/routes/+page.svelte` in your editor.

**Replace the entire contents** with:

```svelte
<script lang="ts">
	let projectName = 'Stellar Ledger';
</script>

<div class="container">
	<h1>Welcome to {projectName}</h1>
	<p>A 30-day journey building an educational accounting game on SpaceTraders.</p>

	<div class="status">
		<p><strong>Day 1:</strong> Project Setup Complete ✓</p>
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		font-family: system-ui, -apple-system, sans-serif;
	}

	h1 {
		color: #4a5568;
		margin-bottom: 0.5rem;
	}

	p {
		color: #718096;
		line-height: 1.6;
	}

	.status {
		margin-top: 2rem;
		padding: 1rem;
		background-color: #f0fff4;
		border-left: 4px solid #48bb78;
		border-radius: 4px;
	}

	.status p {
		margin: 0;
		color: #2d3748;
	}
</style>
```

**Save the file** and watch your browser auto-reload with the changes.

### What This Demonstrates

1. **Svelte's `<script>` block**: Component logic (TypeScript!)
2. **Template syntax**: `{projectName}` for variable interpolation
3. **Scoped styles**: CSS in the `<style>` block only affects this component
4. **Reactive updates**: Change `projectName` in the script and see it update instantly

---

## Step 5: Configure Git (If Not Already Done)

If this is your first time using Git on this machine:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## Step 6: Initial Git Commit

SvelteKit already created a `.gitignore` for us. Let's verify what it excludes:

```bash
cat .gitignore
```

You should see `node_modules/`, `.svelte-kit/`, and build directories already ignored.

**Stage all files**:

```bash
git add .
```

**Create the initial commit**:

```bash
git commit -m "Initial SvelteKit setup with TypeScript, ESLint, Prettier, and Vitest

- Scaffold created via pnpm create svelte@latest
- TypeScript enabled for type safety
- ESLint and Prettier configured for code quality
- Vitest configured for unit testing
- Custom welcome page for Day 1

Day 1 of 30-day coding journey building Stellar Ledger."
```

**Tag this as Day 1**:

```bash
git tag -a day-01 -m "Day 1: Project setup and SvelteKit initialization"
```

---

## Step 7: Verify Everything Works

### Run the linter:

```bash
pnpm run lint
```

Should complete without errors.

### Format code:

```bash
pnpm run format
```

### Run tests (should be empty but configuration works):

```bash
pnpm run test:unit
```

You might see "No test files found" - that's expected. We'll add tests in coming days.

---

## What We've Accomplished

✅ Installed and configured pnpm
✅ Created a SvelteKit project with TypeScript
✅ Configured ESLint, Prettier, and Vitest
✅ Understood the project structure
✅ Made our first component change
✅ Created our first git commit and tag

---

## Key Learnings

### 1. SvelteKit's File-Based Routing

Routes are defined by the file structure in `src/routes/`:
- `src/routes/+page.svelte` → `/`
- `src/routes/about/+page.svelte` → `/about`
- `src/routes/ships/[id]/+page.svelte` → `/ships/123` (dynamic route)

We'll use this extensively as we build out the game.

### 2. Svelte Component Anatomy

Every `.svelte` file can have three sections:
```svelte
<script lang="ts">
  // Logic (variables, functions, imports)
</script>

<!-- Template (HTML with Svelte syntax) -->

<style>
  /* Scoped CSS */
</style>
```

All three sections are optional.

### 3. The Development Workflow

1. Edit files
2. Browser auto-reloads (HMR)
3. Lint/format before committing
4. Commit with descriptive messages
5. Tag each day's work

### 4. Why These Tools?

- **TypeScript**: Prevents entire categories of bugs
- **ESLint**: Catches code smells and potential issues
- **Prettier**: Eliminates formatting discussions
- **Vitest**: Fast tests that run in the same environment as your code
- **pnpm**: Modern, strict, efficient package management

---

## Common Issues and Solutions

### Issue: `pnpm: command not found`

**Solution**: Install pnpm globally:
```bash
npm install -g pnpm
```

### Issue: Port 5173 already in use

**Solution**: Kill the process using that port or specify a different port:
```bash
pnpm dev -- --port 3000
```

### Issue: TypeScript errors in editor

**Solution**:
1. Ensure your editor has the Svelte extension installed
2. VS Code: Install "Svelte for VS Code"
3. Restart your editor after installation

### Issue: Changes not reflecting in browser

**Solution**:
1. Check the terminal for build errors
2. Try hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
3. Restart the dev server

---

## Tomorrow's Plan (Day 2)

We'll explore the SpaceTraders API:
- Register for an API token
- Make our first API requests
- Understand the game's core entities (agents, ships, contracts)
- Create a basic API client structure
- Display live data in our app

---

## Resources

- [SvelteKit Docs](https://kit.svelte.dev/docs)
- [Svelte Tutorial](https://learn.svelte.dev/)
- [pnpm Documentation](https://pnpm.io/)
- [SpaceTraders API Docs](https://docs.spacetraders.io/)

---

**Time to complete**: ~60 minutes if following along, ~30 minutes if experienced with Node.js tooling.

**Files created/modified**:
- `src/routes/+page.svelte` (modified)
- Entire SvelteKit scaffold (created)

**Commits**: 1
**Tag**: `day-01`
