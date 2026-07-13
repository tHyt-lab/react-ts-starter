# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A minimal Vite + React 18 + TypeScript starter template. Bun is the package manager (`bun.lockb`); CI installs with `bun install`.

## Commands

```sh
bun install          # install dependencies
npm run dev          # start Vite dev server with HMR
npm run build        # typecheck (tsc) then vite build
npm run preview      # preview the production build
npm run test         # run tests with Vitest (watch mode in a TTY)
npx vitest run       # run all tests once
npx vitest run test/App.test.tsx   # run a single test file
npx biome lint       # lint (what CI runs)
npx biome format --fix .           # format
npx biome check --fix .            # lint + format + organize imports
```

There is no standalone typecheck script; `npm run build` runs `tsc` first, or use `npx tsc --noEmit`.

## Tooling and conventions

- **Biome** (not ESLint/Prettier) handles linting, formatting, and import organizing. Rules are enumerated explicitly in `biome.json` (`recommended: false`) — a large set of a11y, complexity, correctness, and style rules at `error` level. Formatting uses Biome defaults (tab indentation).
- **Husky + lint-staged**: the pre-commit hook runs `biome format --fix` on staged files under `src/`.
- **Testing**: Vitest configured in `vite.config.ts` (merged into the Vite config) with `globals: true`, the `happy-dom` environment, and `vitest.setup.ts` loading `@testing-library/jest-dom` matchers. Test globals (`test`, `expect`) are available without imports (`types: ["vitest/globals"]` in tsconfig). Tests live in the top-level `test/` directory, not co-located with source.
- **TypeScript**: strict mode, `noEmit` (Vite/SWC does the transpiling), `jsx: react-jsx`. `tsconfig.json` covers `src`, `test`, and `vitest.setup.ts`; `tsconfig.node.json` covers `vite.config.ts`.

## Structure

- `src/main.tsx` — entry point, mounts `<App />` into `index.html`
- `src/App.tsx` — root component
- `test/` — Vitest + Testing Library tests; `test/__mocks__/` holds style/file mocks
- `.github/workflows/pr.yml` — PR CI: `bun install`, `npx biome lint`, `npm run test`
