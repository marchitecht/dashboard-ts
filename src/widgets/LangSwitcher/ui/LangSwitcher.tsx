import React from "react";
import { classnames } from "shared/helpers/classnames/classnames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export default function LangSwitcher({ className }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div className={classnames(cls.LangSwitcher, {}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={toggle}> {t("button")}</Button>
    </div>
  );
}
