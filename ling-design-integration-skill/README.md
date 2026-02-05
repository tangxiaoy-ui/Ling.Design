# Ling Design Integration Skill

## 概述

本 Skill 用于指导第三方项目集成 Ling Design 系统，提供完整的组件使用指南和最佳实践。

## 文档结构

```
ling-design-integration-skill/
├── README.md                    # 本文件，Skill 概述
├── SKILL.md                     # Skill 核心说明和集成策略
└── references/                  # 详细参考文档
    ├── quick-start.md          # 快速开始指南
    ├── standard-page.md        # StandardPage 组件详解
    ├── component-catalog.md    # 组件清单和使用示例
    ├── colors.md               # 颜色设计规范
    ├── spacing.md              # 间距设计规范
    ├── typography.md           # 字体设计规范
    └── border-radius.md        # 圆角设计规范
```

## 核心理念

### 1. 优先使用 StandardPage

第三方项目集成时，**优先使用 StandardPage 组件**作为页面布局基础。

**原因**:
- 提供统一的页面结构和视觉一致性
- 自动处理响应式布局
- 支持按需渲染各模块（DataNav、Level 2 Menu 等）
- 减少样板代码，提高开发效率

### 2. 参数驱动的条件渲染

StandardPage 组件已实现智能的条件渲染逻辑：

- **DataNav**: 当 `showDataNav={true}` 且 `dataNavProps.items` 有内容时才渲染
- **Level 2 Menu**: 当 `showLevel2Menu={true}` 且 `level2Menu` 有值时才渲染

这意味着第三方调用时无需手动判断数据是否为空。

### 3. 组件拼装作为备选方案

当 StandardPage 无法满足需求时，使用基础组件拼装自定义布局。

**可用组件**:
- 布局类: `Header`, `PageHeader`, `DataNav`
- 导航类: `NavTabs`, `Pagination`
- 数据展示: `Table`, `Card`
- 表单类: `Button`, `Input`, `Select`, `Checkbox`, `Radio`, `Textarea`
- 反馈类: `Dialog`, `Toast`, `Alert`

## 快速开始

1. **安装依赖**:
   ```bash
   pnpm add @ling-design/core @ling-design/config
   ```

2. **引入样式**:
   ```tsx
   import '@ling-design/core/styles.css'
   ```

3. **使用 StandardPage**:
   ```tsx
   import { StandardPage } from '@ling-design/core'
   
   function MyPage() {
     return (
       <StandardPage pageTitle="页面标题">
         {/* 你的内容 */}
       </StandardPage>
     )
   }
   ```

详见 [快速开始指南](references/quick-start.md)

## StandardPage 详解

StandardPage 是 Ling Design 的核心页面布局组件，支持：

- 页面标题和面包屑
- 一级菜单（Header tabs）
- 二级菜单（NavTabs）
- 左侧数据导航（DataNav）
- 工具栏操作按钮
- 主内容区域

所有模块都是可选的，根据传入的 props 决定是否渲染。

详见 [StandardPage 组件详解](references/standard-page.md)

## 组件清单

当 StandardPage 无法满足需求时，可以使用以下组件进行拼装：

- **布局组件**: `Header`, `PageHeader`, `DataNav`
- **导航组件**: `NavTabs`, `Pagination`
- **数据展示**: `Table`, `Card`
- **表单组件**: `Button`, `Input`, `Select`, `Checkbox`, `Radio`, `Textarea`
- **反馈组件**: `Dialog`, `Toast`, `Alert`
- **其他组件**: `Badge`, `Divider`, `Skeleton`, `Tooltip`

详见 [组件清单](references/component-catalog.md)

## 设计规范

使用 Ling Design 组件时，必须遵循以下设计规范：

- **颜色**: 使用全局颜色变量，禁止硬编码颜色值
- **间距**: 使用标准间距系统（4px 基准）
- **字体**: 使用标准字体大小和字重
- **圆角**: 使用标准圆角半径

详见设计规范文档:
- [颜色规范](references/colors.md)
- [间距规范](references/spacing.md)
- [字体规范](references/typography.md)
- [圆角规范](references/border-radius.md)

## 最佳实践

1. **Token Compliance**: 始终使用 `@ling-design/config` 中的设计变量
2. **Import Styles**: 在应用入口引入 `@ling-design/core/styles.css`
3. **TypeScript**: 使用 TypeScript 以获得更好的类型安全
4. **Responsive**: StandardPage 默认响应式，自定义布局也应遵循响应式设计
5. **Tree Shaking**: 支持按需导入，优化打包体积

## 示例项目

查看 `apps/playground` 中的实现作为参考。

## 故障排查

### 样式未生效
确保已引入样式文件：
```tsx
import '@ling-design/core/styles.css'
```

### 组件无法找到
检查包是否正确安装：
```bash
npm list @ling-design/core
```

### TypeScript 类型错误
确保 `tsconfig.json` 配置正确：
```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

## 版本要求

- `@ling-design/core`: 最新版本
- `@ling-design/config`: 最新版本
- `React`: >= 18.0.0
- `TypeScript`: >= 5.0.0

## 更新日志

### 2025-02-05
- ✨ 新增: StandardPage 条件渲染逻辑
- ✨ 新增: DataNav 自动隐藏（当 items 为空时）
- ✨ 新增: Level 2 Menu 按需渲染
- 📝 更新: 集成文档和示例代码

## 相关资源

- [Ling Design 主仓库](https://github.com/your-org/Ling.Design)
- [组件创建 Skill](../component-creator/)
- [设计 Token Skill](../ling-design-tokens-skill/)
