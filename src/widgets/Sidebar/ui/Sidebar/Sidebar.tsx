import React, { useState } from "react";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import LangSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";
import Applink from "shared/ui/Applink/Applink";
import { RoutePath } from "shared/config/routeConfig/route-config";
import { useTranslation } from "react-i18next";
import { classnames } from "shared/helpers/classnames/classnames";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classnames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}>
      <button onClick={toggle}>toggle</button>
      <div className={cls.items}>
        <Applink to={RoutePath.main} className={cls.item}>
          <span className={cls.link}>{t("Главная")}</span>
        </Applink>
        <Applink to={RoutePath.about}>
          <span className={cls.link}>{t("О нас")}</span>
        </Applink>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
}
