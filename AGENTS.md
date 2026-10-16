# Repository Instructions

## Package Manager

- Use **pnpm** exclusively for this repository.
- Do not use `npm`, `npx`, `yarn`, or `bun` for dependency management or project scripts.
- Install dependencies with `pnpm install`.
- Add dependencies with `pnpm add <package>` and development dependencies with `pnpm add -D <package>`.
- Run package scripts with `pnpm <script>` (for example, `pnpm dev`, `pnpm build`, and `pnpm lint`).
- Run one-off package binaries with `pnpm exec <command>` or `pnpm dlx <package>` as appropriate.
- Keep `pnpm-lock.yaml` as the authoritative lockfile. Do not create or update another package manager's lockfile.

## Validation

- Prefer `pnpm build` for a full production validation.
- Do not run a production build while the development server is active because both commands write to `.next` and can leave development assets in an inconsistent state.

## UI Design

- Avoid overusing icons. Prefer typography, spacing, color, borders, and other simple visual cues; use an icon only when it adds clear meaning or improves usability.
