---
name: ling-design-integration
description: Guide third-party projects to integrate Ling Design system, prioritizing StandardPage component, falling back to component composition when needed.
---

# Ling Design Integration Skill

This skill helps third-party projects integrate the Ling Design system effectively, prioritizing the use of the `StandardPage` component for consistent page layouts.

## Integration Strategy

### 1. Prioritize StandardPage

**Default Choice**: Always use the `StandardPage` component from `@ling-design/core` as the primary page layout.

**When to Use**:
- Standard CRUD pages (Create, Read, Update, Delete)
- List/table views with optional filtering
- Pages requiring left navigation (DataNav)
- Pages with tabs (NavTabs)
- Pages requiring toolbar actions

**Basic Usage**:
```tsx
import { StandardPage } from '@ling-design/core';

function MyPage() {
  return (
    <StandardPage
      pageTitle="页面标题"
      showLevel1Menu={false}
      showLevel2Menu={false}
      showToolbarIcons={false}
    >
      {/* Your content here */}
    </StandardPage>
  );
}
```

### 2. StandardPage Configuration

**Available Props**:
- `pageTitle`: Page header title
- `showLevel1Menu`: Show top-level navigation tabs (default: false)
- `showLevel2Menu`: Show secondary navigation tabs (default: false)
- `level2Menu`: Custom secondary nav component (e.g., NavTabs)
- `showToolbarIcons`: Show toolbar action buttons (default: false)
- `showDataNav`: Show left data navigation (default: false)
- `dataNavProps`: Configuration for DataNav component (automatically hidden when items is empty)
- `className`: Additional CSS classes

**Conditional Rendering**:
- DataNav automatically hides when `dataNavProps.items` is empty or undefined
- Level 2 Menu only renders when both `showLevel2Menu={true}` and `level2Menu` is provided
- This makes StandardPage ideal for third-party integration with dynamic data

**Advanced Example with DataNav and Tabs**:
```tsx
import { StandardPage, NavTabs } from '@ling-design/core';

function AdvancedPage() {
  return (
    <StandardPage
      pageTitle="数据管理"
      showLevel2Menu={true}
      level2Menu={
        <NavTabs
          variant="card"
          items={[
            { label: "列表", value: "list" },
            { label: "详情", value: "detail" },
          ]}
        />
      }
      showDataNav={true}
      dataNavProps={{
        items: [
          { id: '1', label: '分类一', value: 'cat1' },
          { id: '2', label: '分类二', value: 'cat2' },
        ],
        title: "数据分类",
        width: 240,
      }}
    >
      {/* Page content */}
    </StandardPage>
  );
}
```

### 3. When StandardPage Is Not Enough

If `StandardPage` cannot meet your requirements, compose pages using individual components:

**Available Components**:
- `Header`: Page header with logo, navigation, and user actions
- `PageHeader`: Breadcrumbs, page title, and actions
- `DataNav`: Left sidebar navigation
- `NavTabs`: Tab navigation (variants: line, card, vertical, button)
- `Table`: Data table component
- `Pagination`: Page navigation
- `Button`, `Input`, `Select`, etc.: Form and UI components

**Example: Custom Layout**:
```tsx
import { Header, PageHeader, Table, Button } from '@ling-design/core';

function CustomPage() {
  return (
    <div>
      <Header />
      <PageHeader
        title="自定义页面"
        breadcrumbs={[{ label: '首页', href: '/' }, { label: '自定义' }]}
        actions={<Button>新建</Button>}
      />
      <div className="p-6">
        <Table {/* ... */} />
      </div>
    </div>
  );
}
```

## Best Practices

1.  **CRITICAL: Configure Tailwind Content**: You MUST add the core package to your `tailwind.config.js` content array, otherwise styles will not work:
    ```js
    content: [
      "./src/**/*.{ts,tsx}",
      "./node_modules/@ling-design/core/dist/**/*.{js,mjs}" // Essential for component styles
    ]
    ```
2.  **Token Compliance**: Always use design tokens from `@ling-design/config`. Do not hardcode colors or spacing.
3.  **Import Styles**: Import `@ling-design/core/styles.css` in your app entry.
3. **TypeScript**: Use TypeScript for better type safety and IntelliSense.
4. **Responsive**: StandardPage is responsive by default. Custom layouts should follow responsive design patterns.

## Token References

See [design tokens](references/) for:
- [Colors](references/colors.md)
- [Spacing](references/spacing.md)
- [Typography](references/typography.md)
- [Border Radius](references/border-radius.md)

## Component Documentation

For detailed component props and usage, see the core package documentation or explore the source code.
