import React from "react";
import { classnames } from "shared/helpers/classnames/classnames";
import cls from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: string;
}

export default function Text(props: TextProps) {
  const { className, title, text, theme = TextTheme.PRIMARY } = props;
  return (
    <div className={classnames(cls.Text, { [cls[theme]]: true }, [className])}>
      {title && <h2 className={cls.title}>{title}</h2>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
}
