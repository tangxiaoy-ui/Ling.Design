# Ling Design System

这是基于 Monorepo 架构的企业级组件库系统，采用 **混合分发模式**：

- **@ling-design/core**: 核心原子组件（Button, Input 等），通过 NPM 包分发，强制规范。
- **@ling-design/config**: 统一的 Tailwind 配置和设计规范。
- **Business Components**: 业务组件，支持通过源码拷贝（CLI 模式）进行灵活分发。

## 目录结构

- `apps/`
  - `docs`: 文档站点 (Next.js)
  - `playground`: 开发测试环境
- `packages/`
  - `core`: 核心组件库
  - `config`: 共享配置
  - `utils`: 共享工具函数

## 开发命令

- `pnpm install`: 安装依赖
- `pnpm dev`: 启动所有应用
- `pnpm build`: 构建所有包
