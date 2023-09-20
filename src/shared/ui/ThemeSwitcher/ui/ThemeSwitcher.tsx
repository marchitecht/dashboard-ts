import React from "react";
import { classnames } from "shared/helpers/classnames/classnames";
import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import Sun from "shared/assets/icons/Sun";
import Moon from "shared/assets/icons/Moon";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export default function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classnames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <Sun /> : <Moon />}
    </Button>
  );
}
