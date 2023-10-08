import React from "react";
import MainIcon from "../../../shared/assets/icons/Main";
import AboutIcon from "../../../shared/assets/icons/About";
import AccountIcon from "../../../shared/assets/icons/Account";
import { RoutePath } from "shared/config/routeConfig/route-config";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}
export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: "Главная",
  },
  {
    path: RoutePath.about,
    text: "О нас",
    Icon: AboutIcon,
  },
  {
    path: RoutePath.account,
    text: "Аккаунт",
    Icon: AccountIcon,
  },
];
