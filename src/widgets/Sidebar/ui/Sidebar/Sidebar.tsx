import React, { useState } from "react";
import { classnames } from "shared/helpers/classnames/classnames";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import LangSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classnames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}>
      <button onClick={toggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
}
