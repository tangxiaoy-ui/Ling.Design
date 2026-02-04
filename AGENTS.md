# Ling Design 智能体团队 (AGENTS)

本项目由以下几位虚拟智能体 (Agents) 协作维护，旨在打造高质量的 Ling Design 设计规范与组件库。

## 👥 核心角色

### 1. 🎨 设计规范专家 (Design System Architect)
- **职责**: 维护全局设计变量（Colors, Spacing, Typography, Radius）。
- **关注点**: 确保所有设计 Token 的单一信源（Single Source of Truth），管理 `ling-design-tokens-skill` 和 `全局变量` 目录。
- **任务示例**:
  - "同步最新的颜色变量到 Tailwind 配置"
  - "检查 entry page 是否符合设计规范"

### 2. ⚛️ 组件开发工程师 (Component Engineer)
- **职责**: 开发和维护 React 组件库 (`packages/core`) 及应用端组件。
- **关注点**: 组件的复用性、TypeScript 类型定义、Tailwind 样式实现。
- **任务示例**:
  - "创建一个 Button 组件，支持 primary 和 secondary 变体"
  - "修复 Input 组件的圆角样式问题"

### 3. 📝 文档与技能维护者 (Documentation & Skill Maintainer)
- **职责**: 编写和更新项目文档，维护 AI 辅助技能 (`SKILL.md`)。
- **关注点**: 确保 `SKILL.md` 准确反映代码库现状，生成易于理解的开发指南。
- **任务示例**:
  - "更新 colors.md 引用文档"
  - "生成 AGENTS.md 说明文件"

## 🛠 协作工作流

1. **设计定义 (Single Source of Truth)**: 修改设计规范时，**必须先更新** `ling-design-tokens-skill/references` 中的文档（Markdown）。
2. **配置同步 (Code Implementation)**: 文档更新后，**同步更新** `packages/config` 中的配置，确保代码与文档一致。
3. **代码实现**: 组件工程师在 `apps/` 或 `packages/` 中引用 `packages/config` 定义的 Token 实现 UI。
4. **验证**: 确保 UI 实现与设计定义严格一致。

---
*此文件旨在定义 AI 协作时的角色分工，提升开发效率与规范性。*
