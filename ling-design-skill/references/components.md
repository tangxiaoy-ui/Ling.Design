# Core Components

The `@ling-design/core` package exports the following pure UI components.

## Import Path
```typescript
import { 
  Button, 
  Header, 
  Sidebar, 
  PageHeader,
  StandardPage,
  // ... other components
} from "@ling-design/core";
```

## Component List

### Layout & Navigation
- **Header**: Top navigation bar. Supports `variant` ("portal" | "admin"), `logo`, `menuItems`, `user` props.
- **Sidebar**: Vertical navigation menu.
- **PageHeader**: Breadcrumbs and page title area.
- **StandardPage**: Standard layout wrapper with header and content area.

### Data Display
- **Table**: Styled data table.
- **Badge**: Status indicators.
- **Icon**: SVG icons (imported via `import { IconName } from "@ling-design/core/icons"`).

### Inputs & Actions
- **Button**: Primary, secondary, and ghost buttons.
- **Input**: Text input fields.
- **Switch**: Toggle switch.
- **Pagination**: Pagination controls.
- **ListToolbar**: Search and action bar for lists.

## Icon Usage
Icons are available as standalone components or metadata.
```typescript
// Import specific icon
import { IconHome } from "@ling-design/core/icons";

// Import icon metadata (for dynamic rendering)
import { icons } from "@ling-design/core/src/components/icons/meta";
```
