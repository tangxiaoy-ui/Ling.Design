# Development Patterns

Ling Design follows a strict separation between **Pure UI Components** and **Business Logic**.

## The "Blocks" Pattern

### 1. Core Components (Pure UI)
- Located in `@ling-design/core`.
- **Stateless**: Do not contain hardcoded business data (menu items, user names).
- **Prop-Driven**: All data must be passed via props.
- **Styled**: Encapsulate all visual styles.

### 2. Block Components (Business Logic)
- Located in the consumer app (e.g., `src/components/blocks/`).
- **Composition**: Wraps a Core component.
- **Data Injection**: Injects business data, hardcoded menus, or API data.
- **Example**: `BusinessHeader` wraps `Header`.

#### Example Implementation

**Core Component (Library):**
```tsx
// @ling-design/core/Header
export function Header({ logo, menuItems, user }: HeaderProps) {
  return <nav>{/* renders props */}</nav>;
}
```

**Block Component (Application):**
```tsx
// src/components/blocks/BusinessHeader.tsx
import { Header } from "@ling-design/core";

export function BusinessHeader() {
  const menus = [{ label: "Home", href: "/" }]; // Business Data
  return <Header menuItems={menus} />;
}
```
