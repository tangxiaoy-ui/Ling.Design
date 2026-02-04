# [Blocks Refactor] Header Component Decoupling Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Remove business-specific logic and hardcoded "Default Data" (Space Portal, Knowledge Platform, etc.) from the core `Header` component, transforming it into a pure UI component. Introduce a "Blocks" pattern where business logic resides in example/template code (e.g., in `apps/playground`) rather than the core library.

**Architecture:**
1.  **Core Component (`packages/core`)**: Pure UI. Accepts props for everything (logo, menu, user). Renders *nothing* if props are missing (or simple skeletons). No hardcoded strings like "空间门户".
2.  **Playground Implementation (`apps/playground`)**: Create a "Block" example that demonstrates how to assemble the `Header` with the specific business data (MK Logo, specific menu items).

**Tech Stack:** React, TypeScript, Tailwind CSS

---

### Task 1: Clean up Core Header Component

**Files:**
- Modify: `packages/core/src/components/header.tsx`

**Step 1: Remove Default Menu Items**
- Remove the hardcoded `else` block that renders "空间门户", "知识中台" etc.
- If `menuItems` is undefined or empty, render nothing (or just an empty container).

**Step 2: Remove Default Logo Logic (Optional/Refine)**
- The current default logo logic relies on specific paths (`/src/assets/...`) which might not exist in consumer apps.
- Change `logo` prop to be required OR provide a very generic SVG fallback (no external image dependencies).
- *Decision:* Keep it simple. If `logo` is missing, render nothing or a simple text placeholder if `title` prop exists (maybe add `title` prop?).
- *Refinement:* Let's strictly follow "Pure UI". If `logo` is not provided, render nothing in that slot.

**Step 3: Remove Default User**
- Remove default "Admin" and "管" fallback if `user` prop is missing.
- If `user` prop is missing, do not render the user profile section.

**Step 4: Verify Interface**
- Ensure `HeaderProps` accurately reflects that these are now optional but won't have "magical" defaults.

**Step 5: Commit**
- `feat(core): remove hardcoded business data from Header component`

---

### Task 2: Create "Block" Example in Playground

**Files:**
- Create: `apps/playground/src/components/blocks/BusinessHeader.tsx` (New directory `blocks`)
- Modify: `apps/playground/src/pages/components/ComponentsPage.tsx` (to use the new Block)

**Step 1: Create BusinessHeader Block**
- Re-implement the "Default Logic" that was removed from Core, but now as a *consumer* component.
- Import `Header` from `@ling-design/core`.
- Pass the "空间门户", "知识中台" data as props.
- Pass the local assets (logos) as props.

**Step 2: Update Playground Entry**
- Replace the usage of raw `<Header />` in `ComponentsPage` with `<BusinessHeader />` or explicit props.
- Verify that the playground still looks exactly the same (visual regression check).

**Step 3: Commit**
- `feat(playground): add BusinessHeader block example`

---

### Task 3: Documentation Update (Mental Check)

- Since we are removing defaults, any other consumers (like `vehicle-app` mentioned by user) might "break" (show empty headers) if they relied on defaults.
- *Correction:* The user *wants* to fix the "wrong default data" issue. By removing defaults, we force them to provide correct data, which is the desired outcome (Fail fast/Empty state > Wrong state).
- We will provide the code snippet for them to implement their own Header in the final response.

**Execution Handoff:**
I will execute this in the current session using `subagent-driven-development` to ensure immediate fixes.
