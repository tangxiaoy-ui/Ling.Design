# 技术架构: Ling Design System

**版本**: 1.0.0
**日期**: 2026-02-05

## 1. 系统概述

Ling Design System 是一个企业级 UI 组件库和设计系统架构，旨在标准化“蓝凌”业务应用的开发。它采用 **Monorepo** 结构管理核心资产，并采用 **混合分发模式** 来平衡一致性与业务灵活性。

## 2. 技术栈

| 层级 | 技术 | 用途 |
| :--- | :--- | :--- |
| **核心框架** | React 18+ | 组件库基础框架 |
| **语言** | TypeScript 5.0+ | 严格的类型安全 |
| **样式** | Tailwind CSS v3 | 原子化 (Utility-first) 设计系统实现 |
| **样式逻辑** | `class-variance-authority` (cva) | 管理组件变体（尺寸、颜色、状态） |
| **构建工具** | Vite | 开发服务器和应用打包 |
| **库打包器** | tsup (基于 esbuild) | 高效打包 `@ling-design/core` |
| **Monorepo** | Turborepo | 高性能的构建编排与缓存 |
| **包管理** | pnpm | 工作区管理与依赖效率 |

## 3. Monorepo 目录结构

项目使用 Turborepo 管理的 pnpm 工作区。

```text
/
├── apps/                  # 应用层
│   ├── playground/        # 组件工作台/演练场 (Vite App)
│   └── docs/              # (规划中) 文档站点
├── packages/              # 库层
│   ├── core/              # @ling-design/core: 核心原子组件库
│   ├── config/            # @ling-design/config: 共享设计 Token 与配置
│   ├── utils/             # @ling-design/utils: 共享工具函数
│   └── icons-source/      # 图标资产处理流水线
├── ling-design-integration-skill/ # AI Skill 定义包
└── docs/                  # 项目文档
```

## 4. 组件架构 (`@ling-design/core`)

### 4.1 设计理念
*   **Headless 风格**: 组件专注于逻辑和可访问性 (Accessibility)，样式完全交给 Tailwind。
*   **组合优于继承**: 鼓励通过原子组件组合出复杂 UI（例如：`StandardPage` 组合了 `Header`, `Sidebar`, `Content`）。
*   **Props 驱动状态**: 优先使用受控组件模式，保证行为可预测。

### 4.2 样式策略
*   **全局 Tokens**: 所有颜色、间距、字体均在 `@ling-design/config` 中定义，并通过 `tailwind.config.js` 注入。
*   **零运行时 (Zero-Runtime)**: 样式在构建时编译为静态 CSS。没有 `styled-components` 运行时的性能开销。
*   **CVA**: 使用 `class-variance-authority` 定义组件变体映射表。

```typescript
// 示例: CVA 用法
const buttonVariants = cva("基础样式...", {
  variants: {
    variant: { default: "...", outline: "..." },
    size: { sm: "h-8", lg: "h-10" }
  }
})
```

## 5. 分发策略 (混合模式)

为了解决“僵化 vs 灵活”的经典矛盾，我们将组件分为两类进行不同方式的分发。

### 5.1 原子组件 (NPM 分发)
*   **内容**: Button, Input, Grid, Modal, StandardPage 布局骨架。
*   **方式**: 通过 `@ling-design/core` NPM 包分发。
*   **规则**: 不可变。消费者通过 `npm update` 升级。
*   **原因**: 这些是“乐高积木”。它们必须在所有应用中保持视觉和行为的绝对一致。

### 5.2 业务组件 (源码拷贝)
*   **内容**: UserSelector (人员选择), OrderTable (订单表), ComplexFilter (复杂筛选)。
*   **方式**: CLI 拷贝 / AI 生成代码。
*   **规则**: 可变。消费者拷贝后拥有代码所有权。
*   **原因**: 业务逻辑变化频繁。过度抽象会导致“配置地狱”。源码拷贝允许开发者完全控制逻辑。

## 6. AI 集成架构

本系统是“AI 原生 (AI-Native)”的，意味着它提供了结构化的上下文供 LLM 生成代码。

*   **Skill 包**: `ling-design-integration-skill` 包含规则、示例和最佳实践。
*   **自动文档**: `scripts/generate-ai-docs.js` 在 CI 过程中运行，从源码提取精确的 TypeScript 接口到 Markdown。这防止了 AI 产生不存在的 Props 幻觉。
*   **StandardPage 模式**: 专门设计的高级抽象，旨在让 AI “更容易写对”（声明式 Props vs 复杂的命令式 DOM 操作）。

## 7. 构建流水线

*   **开发 (Development)**: `pnpm dev`
    *   触发 `turbo run dev`。
    *   以监听模式启动 `packages/core` (tsup)。
    *   启动 `apps/playground` (Vite) 支持 HMR。
*   **生产 (Production)**: `pnpm build`
    *   触发 `turbo run build`。
    *   `core`: 编译为 ESM/CJS，生成 `.d.ts` 类型文件。
    *   `apps/*`: 构建静态资源。

## 8. 未来规划

*   **CLI**: 开发 `@ling-design/cli` 用于脚手架搭建和组件拷贝。
*   **测试**: 集成 Vitest 进行逻辑测试，Chromatic 进行视觉回归测试。
*   **图标**: 全自动化的 Figma-to-React 流水线。