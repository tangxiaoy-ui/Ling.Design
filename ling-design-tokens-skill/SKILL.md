---
name: ling-design-tokens
description: Access Ling Design system global variables including colors, spacing, typography, and border radius. Use when the user asks for design tokens, specific color values, styling guidelines, or how to implement Ling Design specifications in code.
---

# Ling Design Tokens

This skill provides access to the official Ling Design system global variables. Use this to lookup specific values or understand how to apply design tokens to components.

## Available Tokens

- **Colors**: Primary brand colors, status colors, and neutral grays. See [colors.md](references/colors.md).
- **Spacing**: Margins, paddings, and gaps. See [spacing.md](references/spacing.md).
- **Typography**: Font sizes and weights for different text levels. See [typography.md](references/typography.md).
- **Border Radius**: Corner radius values for components. See [border-radius.md](references/border-radius.md).

## Usage Guidelines

When implementing UI components or styling pages:
1.  **Prefer Tokens over Magic Numbers**: Always use the defined token values (e.g., use `text-primary` or the specific hex variable) instead of hardcoding values like `#4285F4` or `16px` directly, unless using a utility class that maps to these tokens.
2.  **Tailwind CSS**: If the project uses Tailwind, map these tokens to `tailwind.config.js`.
3.  **CSS Variables**: These tokens are often implemented as CSS variables (e.g., `--color-primary`, `--spacing-md`).

## Token Summary

### Colors
- **Blue (Primary)**: `#4285F4`
- **Red (Error)**: `#FF5219`
- **Green (Success)**: `#00B042`
- **Yellow (Warning)**: `#FF9200`

### Spacing
- **Small**: 4px
- **Standard**: 8px
- **Large**: 16px
- **Extra Large**: 32px

### Typography
- **H1**: 32px
- **H2**: 24px
- **Body**: 14px
- **Tag**: 12px

### Border Radius
- **Small**: 2px
- **Standard**: 6px
- **Large**: 8px
