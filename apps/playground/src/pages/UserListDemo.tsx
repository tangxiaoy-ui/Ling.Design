import * as React from "react"
import { StandardPage, Button, Badge } from "@ling-design/core"

export function UserListDemo() {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState<string[]>([])

  const columns = [
    {
      title: "用户名",
      dataIndex: "name",
      key: "name",
      render: (name: string) => (
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-xs">
            {name.charAt(0)}
          </div>
          <span className="font-medium text-foreground">{name}</span>
        </div>
      ),
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        const variants: Record<string, any> = {
          active: { label: "活跃", variant: "success" },
          draft: { label: "草稿", variant: "draft" },
          inactive: { label: "离线", variant: "outline" },
        }
        const { label, variant } = variants[status] || { label: status, variant: "default" }
        return <Badge variant={variant}>{label}</Badge>
      },
    },
    {
      title: "邮箱",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "角色",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "最后活动时间",
      dataIndex: "lastActive",
      key: "lastActive",
    },
  ]

  const data = [
    { id: "1", name: "张小明", status: "active", email: "zhang@ling.design", role: "管理员", lastActive: "2024-02-05 10:00" },
    { id: "2", name: "王大力", status: "draft", email: "wang@ling.design", role: "普通用户", lastActive: "2024-02-04 15:30" },
    { id: "3", name: "李梅梅", status: "inactive", email: "li@ling.design", role: "访客", lastActive: "2024-02-01 09:20" },
  ]

  return (
    <StandardPage
      pageTitle="用户管理"
      // 1. 工具栏配置
      listToolbarProps={{
        searchPlaceholder: "搜索用户姓名或邮箱...",
        onSearch: (v) => console.log("Search:", v),
        actions: (
          <div className="flex gap-2">
            <Button variant="outline" size="default">批量操作</Button>
            <Button variant="default" size="default">新建用户</Button>
          </div>
        ),
      }}
      // 2. 表格配置
      tableProps={{
        columns,
        dataSource: data,
        rowKey: "id",
        showRowSelector: true,
        selectedRowKeys,
        onSelectionChange: setSelectedRowKeys,
        variant: "default",
      }}
      // 3. 分页配置
      paginationProps={{
        total: 100,
        pageSize: 10,
        current: 1,
        showSizeChanger: true,
        showQuickJumper: true,
      }}
      // 4. 侧边导航 (DataNav)
      showDataNav={true}
      dataNavProps={{
        title: "组织架构",
        items: [
          { key: "all", label: "全部成员" },
          { key: "tech", label: "技术部" },
          { key: "design", label: "设计部" },
          { key: "hr", label: "人力资源" },
        ],
        onSelect: (key) => console.log("Selected Org:", key),
      }}
    />
  )
}
