import { Header } from "@ling-design/core";
import logoDark from "../../assets/logo_dark_header.png";
import logoLight from "../../assets/logo_light_header.png";

export interface BusinessHeaderProps {
  variant?: "admin" | "portal";
  mode?: "dark" | "light";
}

export function BusinessHeader({ variant = "portal", mode = "dark" }: BusinessHeaderProps) {
  const isDark = variant === "admin" || (variant === "portal" && mode === "dark");

  const logo = (
    <div className="flex items-center gap-2">
      <div className="h-8 overflow-hidden">
        <img
          src={isDark ? logoDark : logoLight}
          alt="MK Logo"
          className="h-full w-auto object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const bgClass = isDark ? "bg-white text-primary" : "bg-primary text-primary-foreground";
            e.currentTarget.parentElement!.innerHTML = `<div class="flex h-8 w-8 items-center justify-center rounded ${bgClass} font-bold text-xs">MK</div>`;
          }}
        />
      </div>
    </div>
  );

  const menuItems = [
    { label: "空间门户", href: "#", active: true },
    { label: "知识中台", href: "#" },
    { label: "AI 中台", href: "#" },
    { label: "低代码", href: "#" },
  ];

  const user = {
    name: "Admin",
    avatar: "管",
  };

  return (
    <Header
      variant={variant}
      mode={mode}
      logo={logo}
      menuItems={menuItems}
      user={user}
    />
  );
}
