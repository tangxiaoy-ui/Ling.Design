# Ling Design System 建设路线图 (Roadmap)

本文档旨在规划 Ling Design System 从原型阶段走向成熟企业级产品的演进路径。

**当前状态**: 阶段 1 (原型验证) 进行中
**更新日期**: 2026-02-05

---

## 📅 阶段 1: 夯实地基与最小闭环 (Foundation & MVP)
**目标**: 跑通 "Skill -> 代码 -> 运行" 的全链路，验证 `StandardPage` 优先的开发模式。

### 关键任务
- [x] **Monorepo 架构**: 建立 Core, Config, Playground 的依赖关系。
- [x] **Design Tokens**: 完成基础颜色、字体、Tailwind 配置 (`@ling-design/config`)。
- [x] **Skill 体系**: 
    - [x] 创建 `ling-design-integration-skill`。
    - [x] 自动生成组件 API 文档 (`scripts/generate-ai-docs.js`)。
    - [x] 建立 `llms.txt` 项目索引。
- [x] **Playground 验证**: 实现 `UserListDemo` 黄金样本。
- [ ] **Skill 验收测试**: 在第三方环境验证 AI 生成代码的可用性。

### 验收标准
1.  Playground 中的 `UserListDemo` 页面运行无误，样式对齐设计稿。
2.  第三方项目安装 Skill 后，AI 能一次性生成可运行的列表页代码。
3.  Tailwind 样式在第三方项目中能正确加载。

---

## 📅 阶段 2: 核心组件补全 (Core Atoms)
**目标**: 补充构建业务页面必须的基础原子组件，消除“缺胳膊少腿”的尴尬。

### 关键任务
- [ ] **表单组件 (Form Controls)**:
    - [ ] **Select** (基于 Radix UI): 支持单选、多选、搜索。
    - [ ] **Checkbox / Radio**: 基础选择控件。
    - [ ] **Switch**: (已完成) 优化样式。
    - [ ] **DatePicker**: 日期/范围选择。
    - [ ] **Upload**: 文件上传控件。
- [ ] **反馈与交互 (Feedback)**:
    - [ ] **Dialog / Modal**: 弹窗（用于新建/编辑）。
    - [ ] **Drawer**: 抽屉（用于详情查看）。
    - [ ] **Toast**: 全局轻提示。
    - [ ] **Alert**: 页面级警告。
- [ ] **StandardPage 增强**:
    - [ ] 增加 `filterArea` 插槽（支持复杂筛选）。
    - [ ] 增加 `bulkActions` 插槽。

### 技术策略
- **Headless UI**: 优先使用 Radix UI 或 React Aria 封装，避免重复造轮子，专注于 Tailwind 样式适配。

---

## 📅 阶段 3: 业务组件与 CLI (Business & Distribution)
**目标**: 落地“源码拷贝”分发模式，解决业务组件定制化难题。

### 关键任务
- [ ] **CLI 工具开发 (`@ling-design/cli`)**:
    - [ ] `init`: 初始化 Tailwind 和 CSS 变量。
    - [ ] `add <component>`: 从远程/本地仓库下载组件源码。
- [ ] **业务组件库建设 (Registry)**:
    - [ ] **ProTable**: 封装了搜索、分页、请求逻辑的高级表格。
    - [ ] **UserSelector**: 复杂人员选择器。
    - [ ] **RichTextEditor**: 富文本编辑器封装。
- [ ] **Schema 驱动开发**: 探索通过 JSON Schema 生成表单和表格的业务组件。

---

## 📅 阶段 4: 文档与生态 (Documentation & Ecosystem)
**目标**: 降低使用门槛，建立开发者信任。

### 关键任务
- [ ] **文档站点 (`apps/docs`)**:
    - [ ] 选型 Nextra 或 VitePress。
    - [ ] 部署在线文档，包含交互式 Demo。
    - [ ] 提供 "Copy Code" 功能。
- [ ] **AI 增强**:
    - [ ] 持续更新 Skill，纳入新组件。
    - [ ] 提供标准 Prompt 库。
- [ ] **图标自动化**: 完善 Figma -> React Icon 的自动构建流水线。

---

## 📅 阶段 5: 质量保障与运维 (QA & Ops)
**目标**: 达到企业级交付标准，自动化发布流程。

### 关键任务
- [ ] **测试体系**:
    - [ ] 单元测试 (Vitest): 覆盖核心工具函数和组件逻辑。
    - [ ] 视觉测试 (Chromatic): 防止样式回退。
- [ ] **CI/CD**:
    - [ ] 引入 Changesets 管理版本。
    - [ ] 配置 GitHub Actions 自动发包。

---

## 📝 备注
- **原则**: 优先复用 (Radix/Tailwind)，拒绝过度封装。
- **核心**: 保持 `@ling-design/core` 的纯净和稳定性，业务复杂性下放到拷贝组件中。
