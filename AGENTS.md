# Repository Guidelines

## Project Structure & Module Organization
- `apps/`: runnable apps. Currently `apps/playground` (Vite-based dev sandbox).
- `packages/`: libraries.
  - `packages/core`: React component library (builds to `dist/`).
  - `packages/config`: shared Tailwind config + tokens entry.
  - `packages/utils`: shared utilities.
  - `packages/icons-source`: icon sources/bridges.
- `ling-design-tokens-skill/`: design token references and skill docs.

## Build, Test, and Development Commands
- `pnpm install`: install workspace dependencies.
- `pnpm dev`: run all dev tasks via Turborepo.
- `pnpm build`: build all packages/apps via Turborepo.
- `pnpm lint`: run lint tasks (per-package).
- `pnpm format`: format `*.ts`, `*.tsx`, `*.md` with Prettier.
- `pnpm --filter playground dev`: run the playground only (Vite).
- `pnpm --filter @ling-design/core build`: build core library (tsup + Tailwind CSS).

## Coding Style & Naming Conventions
- Language: TypeScript + React.
- Formatting: Prettier (`pnpm format`). No repo `.editorconfig` found; keep 2-space indentation unless existing files differ.
- Naming: packages use scoped names like `@ling-design/*`. Exports live under `packages/*/src` and build to `dist/` where applicable.

## Testing Guidelines
No dedicated test framework or scripts were found in `package.json`. If you add tests, document the runner and add a root script (e.g., `pnpm test`) plus per-package scripts. Keep test file names consistent with the chosen runner (e.g., `*.test.tsx`).

## Commit & Pull Request Guidelines
- Recent commits follow `type(scope): message` (e.g., `feat(core): ...`). Prefer this Conventional-Commits-like style; Chinese or English is acceptable.
- PRs: include a concise description, affected packages, and any breaking changes. If UI changes are visible, add screenshots. Link issues when they exist, but it’s not required here.

## Design Tokens Workflow (Project-Specific)
When changing design tokens:
1) Update `ling-design-tokens-skill/references` docs first.
2) Sync changes into `packages/config`.
3) Consume tokens from `packages/config` in components/apps.
