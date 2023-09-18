import React from "react";
import { classnames } from "shared/helpers/classnames/classnames";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export default function Button({
  className,
  children,
  theme,
  ...otherProps
}: ButtonProps) {

  return (
    <button
      className={classnames(cls.Button, { [cls[theme]]: true }, [className])}
      {...otherProps}>
      {children}
    </button>
  );
}
