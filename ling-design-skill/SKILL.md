---
name: ling-design
description: Complete Ling Design System. Access core components, development patterns, and design tokens. Use when building UI with Ling Design specifications.
---

# Ling Design System Skill

This skill provides comprehensive access to the Ling Design System, including core React components, design patterns (Blocks), and design tokens.

## Capabilities

1.  **Core Components**: Access pure UI components from `@ling-design/core`.
    - See [components.md](references/components.md) for the list of exported components and usage.
2.  **Design Patterns**: Learn how to assemble components using the "Blocks" pattern (separating UI from Business Logic).
    - See [patterns.md](references/patterns.md) for architectural guidelines.
3.  **Design Tokens**: Access global style variables (Colors, Spacing, Typography).
    - See [tokens.md](references/tokens.md) for style definitions.

## Installation for Third-Party Projects

To use Ling Design in a new project:

1.  **Install Dependencies**:
    ```bash
    pnpm add @ling-design/core tailwindcss class-variance-authority clsx tailwind-merge
    ```

2.  **Import Styles**:
    Add this to your root layout or entry file (e.g., `main.tsx` or `App.tsx`):
    ```typescript
    import "@ling-design/core/styles.css";
    ```

3.  **Configure Tailwind**:
    Ensure your `tailwind.config.js` presets or theme configuration matches the Ling Design tokens.

## Usage Guidelines

- **Do Not Hardcode**: Always use props and design tokens.
- **Pure UI**: Core components are stateless regarding business logic. Pass data via props.
- **Blocks Pattern**: Create "Block" components (e.g., `BusinessHeader`) to wrap Core components (`Header`) with business logic.
