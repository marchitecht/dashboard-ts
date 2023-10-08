import React, { memo, useState } from "react";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import LangSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";
import { RoutePath } from "shared/config/routeConfig/route-config";
import { useTranslation } from "react-i18next";
import { classnames } from "shared/helpers/classnames/classnames";
import { SidebarItemList, SidebarItemType } from "widgets/Sidebar/model/items";
import SidebarItem from "../SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string;
}

const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };
  const [test, setTest] = useState(0);

  return (
    <div
      className={classnames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}>
      <button onClick={toggle}>toggle</button>
      <div className={cls.items}>
        {/* <button onClick={() => setTest((prev) => prev + 1)}>butt</button> */}
        {SidebarItemList.map((item: SidebarItemType) => (
          <SidebarItem item={item} collapsed={collapsed} key={item.path} />
        ))}
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
});
export default Sidebar;
