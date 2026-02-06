---
name: component-creator
description: Create React components following Ling Design specifications and icon usage. Use when creating or refactoring UI components.
---

# Component Creator Skill

This skill guides you through creating React components that strictly adhere to the Ling Design system and icon usage guidelines.

## Workflow

1.  **Analyze Requirements**: Understand the component's purpose and visual design.
2.  **Check Design Tokens**: Consult the reference files to identify the correct tokens for colors, spacing, typography, and border radius.
    *   **Colors**: `../docs/design-tokens/colors.md`
    *   **Spacing**: `../docs/design-tokens/spacing.md`
    *   **Typography**: `../docs/design-tokens/typography.md`
    *   **Border Radius**: `../docs/design-tokens/border-radius.md`
    *   **CRITICAL**: If a required style is not found in the tokens, **STOP** and ask the user if they want to add a new token. Do not invent new values.
3.  **Select Icons**: Check `references/icons.json` for available icons.
    *   Search the JSON file for keywords matching the required icon concepts.
    *   Import icons from `@ling-design/core`.
    *   If a suitable icon is not found, use the `<Stop />` icon from `@ling-design/core` as a placeholder and inform the user.
4.  **Generate Code**: Write the React component code using TypeScript and Tailwind CSS (referencing the tokens).

## Rules

*   **Strict Token Usage**: No hardcoded hex values or arbitrary pixels (except for 1px borders if not defined). Use the token variables (e.g., `bg-ling-blue`, `p-ling-small`).
*   **Icon Source**: Always import icons from `@ling-design/core`.
*   **Placeholder**: Use `<Stop />` if the requested icon is missing.
*   **Missing Specs**: If the design specification (references) does not cover a needed value, explicit user confirmation is required to add it.

## References

*   [Colors](../docs/design-tokens/colors.md)
*   [Spacing](../docs/design-tokens/spacing.md)
*   [Typography](../docs/design-tokens/typography.md)
*   [Border Radius](../docs/design-tokens/border-radius.md)
*   [Icons](references/icons.json)