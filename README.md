# Ling Design System

这是基于 pnpm + Turborepo 的 Monorepo 企业级组件库系统，采用 **混合分发模式**：

- **@ling-design/core**: 核心原子组件（Button, Input, Table 等），支持构建产物输出（`dist/`）。
- **@ling-design/config**: 统一的 Tailwind 配置与设计规范依赖。
- **@ling-design/utils**: 共享工具函数（如 `cn` className 合并）。

> 设计语言与 Token 文档位于 `ling-design-tokens-skill/`，作为规范的单一信源。

## 目录结构

- `apps/`
  - `playground`: 开发测试环境
- `packages/`
  - `core`: 核心组件库
  - `config`: 共享配置
  - `utils`: 共享工具函数
  - `icons-source`: 图标源/桥接（内部开发用）
- `ling-design-tokens-skill/`: 设计语言与 Token 文档（规范单一信源）

## 环境要求

- Node.js `>= 18`
- pnpm `9.x`（见根目录 `package.json#packageManager`）

## 安装依赖

```bash
pnpm install
```

## 开发

启动所有 dev 任务（Turborepo）：

```bash
pnpm dev
```

只启动 Playground（推荐用于本地联调组件）：

```bash
pnpm --filter playground dev
```

Playground 默认地址：

- `http://localhost:1111`

只 watch 构建核心组件库（便于在 Playground 中热更新验证）：

```bash
pnpm --filter @ling-design/core dev
```

## 构建

构建全部包：

```bash
pnpm build
```

只构建核心组件库：

```bash
pnpm --filter @ling-design/core build
```

## 使用示例

核心组件：

```tsx
import { Button } from "@ling-design/core";

export function Demo() {
  return <Button>Primary</Button>;
}
```

样式（需要先构建 core 生成 `dist/styles.css`）：

```tsx
import "@ling-design/core/styles.css";
```

图标：

```tsx
import { ArrowRight } from "@ling-design/core/icons";
```

Tailwind 预设（在你的 `tailwind.config.js` 中）：

```js
module.exports = {
  presets: [require("@ling-design/config/tailwind")],
};
```

## 代码质量

```bash
pnpm lint
pnpm format
```

## 常见问题

- Playground 端口不是 5173：端口在 `apps/playground/vite.config.ts` 中固定为 `1111`
- 控制台出现 `favicon.ico` 404：当前未提供站点图标，可忽略，不影响功能验证
