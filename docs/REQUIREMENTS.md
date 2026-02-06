# 产品需求文档 (PRD): Ling Design System (蓝凌设计系统)

**版本:** 0.1.0 (草稿)
**日期:** 2026年2月5日
**项目:** Ling.Design

## 1. 产品概述
**Ling Design System** 是一个企业级 UI 组件库和设计系统架构，旨在标准化“蓝凌”业务应用的开发。它采用 **Monorepo** 架构管理核心组件、配置和工具，并采用 **混合分发模式**（NPM 发布核心原子组件 + 源码拷贝分发业务组件），以平衡一致性与灵活性。

### 1.1 核心理念
- **标准化**: 统一的设计变量（Token，包括颜色、字体、间距、圆角）和 Tailwind 配置。
- **高效率**: 坚持“StandardPage（标准页面）优先”的策略，快速搭建一致的页面布局。
- **AI 就绪**: 内置“Skills”（`ling-design-integration-skill`），使 AI 代理能够根据规范准确生成和集成代码。

## 2. 目标用户
- **前端开发人员**: 构建蓝凌内部/外部业务应用。
- **UI/UX 设计师**: 确保跨产品线的视觉一致性。
- **AI 代理 (Agent)**: 需要结构化上下文以生成合规 UI 代码的自动化编程助手。

## 3. 产品目标
1.  **统一体验**: 确保所有应用共享相同的视觉标识和交互模式。
2.  **快速开发**: 通过提供高级布局组件（如 `StandardPage`）减少重复代码。
3.  **灵活扩展**: 允许通过源码分发模式对复杂业务组件进行深度定制，同时保持原子组件的严格版本控制。
4.  **AI 集成**: 提供结构化的文档和元数据，使 AI 工具能有效利用该组件库。

## 4. 功能需求

### 4.1 核心组件库 (`@ling-design/core`)
必须提供一套高质量、可访问且响应式的 React 组件。

*   **布局组件**:
    *   `StandardPage`: 旗舰组件。根据配置自动处理页头、面包屑、标签页、数据导航（侧边栏）和内容区域。
    *   `Header`: 全局应用头部。
    *   `PageHeader`: 带有操作和面包屑的标题区域。
    *   `Sidebar`: 可折叠的侧边导航。
    *   `DataNav`: 专用于数据密集型视图的导航。
*   **数据录入与展示**:
    *   `Button`: 多种变体（主按钮、次按钮、幽灵按钮等）。
    *   `Input`: 带前缀/后缀的文本输入框。
    *   `Switch`: 开关控件。
    *   `Table`: 标准样式的表格。
    *   `Badge`: 状态徽标。
    *   `ListToolbar`: 标准化的列表工具栏（搜索 + 操作）。
*   **导航**:
    *   `NavTabs`: 标签页导航。
    *   `Pagination`: 数据分页控件。
*   **图标**:
    *   集成 SVG 图标集 (`packages/core/icons`)。

### 4.2 设计变量与配置 (`@ling-design/config`)
*   **Tailwind 预设**: 共享的 Tailwind CSS 配置，确保跨应用的工具类一致。
*   **Tokens (变量)**:
    *   **颜色**: 语义化色板（主色、成功、警告、错误、中性色）。
    *   **字体**: 标准化的字体家族、大小和字重。
    *   **间距**: 4px 网格系统。
    *   **圆角**: 一致的圆角规则。

### 4.3 AI 集成能力 (Skills)
*   **集成技能**: 包含专用模块 (`ling-design-integration-skill`)：
    *   `SKILL.md`: AI 代理的操作指南。
    *   `references/*.md`: 针对 LLM 优化的组件和变量 Markdown 文档。
    *   **目标**: 使 AI 能回答“创建一个带表格的页面”，并正确使用 `StandardPage` 和 `Table` 生成代码，而不产生幻觉属性。

### 4.4 文档与演练场
*   **文档站点**: 基于 Next.js 的文档站（规划中/进行中）。
*   **Playground**: 一个 Vite + React 应用 (`apps/playground`)，用于隔离测试组件并演示使用模式。

## 5. 非功能需求

### 5.1 技术栈
*   **框架**: React >= 18.0.0。
*   **语言**: TypeScript >= 5.0.0。
*   **样式**: Tailwind CSS (通过 `@ling-design/config`)。
*   **构建系统**: TurboRepo (Monorepo 管理), Vite (开发/构建), tsup/Rollup (库打包)。
*   **包管理器**: pnpm。

### 5.2 性能
*   **Tree Shaking**: 核心库必须支持 ES Module tree-shaking 以最小化包体积。
*   **样式**: 优先使用零运行时 CSS (Tailwind) 而非 CSS-in-JS 以提升性能。

## 6. 架构与分发

### 6.1 目录结构
```text
/
├── apps/
│   ├── playground/       # 组件工作台/演练场
│   └── docs/             # (未来) 文档站点
├── packages/
│   ├── core/             # @ling-design/core (NPM 发布)
│   ├── config/           # @ling-design/config (共享配置)
│   ├── utils/            # 共享工具函数
│   └── icons-source/     # 图标资产流水线
├── component-creator/    # 用于创建新组件的 AI 工具
└── ling-design-integration-skill/ # 用于消费组件的 AI 工具
```

### 6.2 分发策略
1.  **NPM 包**: `@ling-design/core`, `@ling-design/config`, `@ling-design/utils` 发布到私有/公共仓库。
2.  **源码拷贝**: 复杂的“业务组件”设计为拷贝到消费者项目中（通过 CLI 工具或 AI 代理），允许深度定制。

## 7. 当前状态与路线图 (推断)

*   **已完成**:
    *   Monorepo 搭建。
    *   核心组件（Button, Input, Layouts, Table 等）。
    *   `StandardPage` 实现 (v1)。
    *   Tailwind 配置集成。
    *   初步的 AI Skill 文档。
*   **进行中**:
    *   完善组件 API。
    *   扩展 `apps/playground` 示例。
    *   "Component Creator" 技能工作流。
*   **未来**:
    *   完整的文档站点。
    *   脚手架 CLI 工具（如果尚未提供）。
    *   更复杂的业务组件（过滤器、高级表格）。

## 8. 开发规范
*   **Linting (代码检查)**: ESLint + Prettier。
*   **Commit (提交)**: Conventional Commits (约定式提交)。
*   **Styling (样式)**: 移动优先的响应式设计，支持暗黑模式 (通过 Tailwind)。
