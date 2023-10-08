import React, { memo } from "react";
import { classnames } from "shared/helpers/classnames/classnames";
import cls from "./SidebarItem.module.scss";
import Applink from "shared/ui/Applink/Applink";
import { RoutePath } from "shared/config/routeConfig/route-config";
import MainIcon from "../../../../shared/assets/icons/main-20-20.svg";
import { SidebarItemType } from "widgets/Sidebar/model/items";
interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  return (
    <Applink
      to={item.path}
      className={classnames(cls.item, { [cls.collapsed]: collapsed }, [])}>
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{item.text}</span>
    </Applink>
  );
});
export default SidebarItem;
