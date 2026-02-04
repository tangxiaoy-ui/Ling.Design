export interface TokenItem {
  name: string;
  value: string;
  description?: string;
  variable?: string; // CSS variable name if applicable
}

export interface ColorToken extends TokenItem {
  hex: string;
  alpha?: number;
}

export interface UsageToken {
  category: string;
  token: string;
  value: string;
}

export const designTokens = {
  colors: {
    usage: [
      { category: "文字.正文标题", token: "#000", value: "#000000" },
      { category: "文字.正文", token: "#333", value: "#333333" },
      { category: "文字.副标题", token: "#666", value: "#666666" },
      { category: "文字.描述", token: "#999", value: "#999999" },
      { category: "文字.说明标注", token: "#999", value: "#999999" },
      { category: "文字.文字链接", token: "蓝", value: "#4285F4" },
      { category: "文字.水印文字", token: "#000-10", value: "#000000 (0.1)" },
      { category: "页面背景.深", token: "#f0", value: "#F0F0F0" },
      { category: "页面背景.浅", token: "#f8", value: "#F8F8F8" },
      { category: "边框&分割线.深", token: "#ddd", value: "#DDDDDD" },
      { category: "边框&分割线.浅", token: "#eee", value: "#EEEEEE" },
      { category: "成功/安全", token: "绿", value: "#00B042" },
      { category: "提醒", token: "黄", value: "#FF9200" },
      { category: "警告/失败", token: "红", value: "#FF5219" },
    ] as UsageToken[],
    primary: [
      { name: "蓝 (Blue)", hex: "#4285F4", alpha: 1.0, value: "#4285F4" },
      { name: "蓝-60", hex: "#4285F4", alpha: 0.6, value: "rgba(66, 133, 244, 0.6)" },
      { name: "蓝-40", hex: "#4285F4", alpha: 0.4, value: "rgba(66, 133, 244, 0.4)" },
      { name: "蓝-20", hex: "#4285F4", alpha: 0.2, value: "rgba(66, 133, 244, 0.2)" },
      { name: "蓝-10", hex: "#4285F4", alpha: 0.1, value: "rgba(66, 133, 244, 0.1)" },
    ] as ColorToken[],
    status: [
      { name: "红 (Red)", hex: "#FF5219", alpha: 1.0, value: "#FF5219" },
      { name: "红-60", hex: "#FF5219", alpha: 0.6, value: "rgba(255, 82, 25, 0.6)" },
      { name: "绿 (Green)", hex: "#00B042", alpha: 1.0, value: "#00B042" },
      { name: "绿-60", hex: "#00B042", alpha: 0.6, value: "rgba(0, 176, 66, 0.6)" },
      { name: "黄 (Yellow)", hex: "#FF9200", alpha: 1.0, value: "#FF9200" },
      { name: "黄-60", hex: "#FF9200", alpha: 0.6, value: "rgba(255, 146, 0, 0.6)" },
    ] as ColorToken[],
    neutral: [
      { name: "白 (White)", hex: "#FFFFFF", value: "#FFFFFF" },
      { name: "#000", hex: "#000000", value: "#000000" },
      { name: "#333", hex: "#333333", value: "#333333" },
      { name: "#666", hex: "#666666", value: "#666666" },
      { name: "#999", hex: "#999999", value: "#999999" },
      { name: "#C3", hex: "#C3C3C3", value: "#C3C3C3" },
      { name: "#ddd", hex: "#DDDDDD", value: "#DDDDDD" },
      { name: "#eee", hex: "#EEEEEE", value: "#EEEEEE" },
      { name: "#f0", hex: "#F0F0F0", value: "#F0F0F0" },
      { name: "#f8", hex: "#F8F8F8", value: "#F8F8F8" },
      { name: "#000-10", hex: "#000000", alpha: 0.1, value: "rgba(0, 0, 0, 0.1)" },
    ] as ColorToken[],
  },
  typography: {
    sizes: [
      { name: "12px", value: "12px", description: "标签 (Tag), 摘要" },
      { name: "14px", value: "14px", description: "默认大小 (Default)" },
      { name: "16px", value: "16px", description: "四级标题 (H4)" },
      { name: "18px", value: "18px", description: "三级标题 (H3)" },
      { name: "24px", value: "24px", description: "二级标题 (H2)" },
      { name: "32px", value: "32px", description: "一级标题 (H1)" },
    ] as TokenItem[],
    weights: [
      { name: "字重400", value: "400", description: "Regular" },
      { name: "字重500", value: "500", description: "Medium" },
    ] as TokenItem[],
  },
  spacing: [
    { name: "小-4px", value: "4px", description: "Buttons Vertical" },
    { name: "标准-8px", value: "8px", description: "Buttons Horizontal, Gap, Shadow" },
    { name: "大-16px", value: "16px", description: "Cards Padding" },
    { name: "超大-32px", value: "32px", description: "Layout" },
  ] as TokenItem[],
  radius: [
    { name: "小", value: "2px", description: "按钮 (Button), 标签 (Tag)" },
    { name: "中", value: "4px", description: "Medium radius" },
    { name: "标准", value: "6px", description: "Standard radius" },
    { name: "大", value: "8px", description: "卡片 (Card)" },
  ] as TokenItem[],
};
