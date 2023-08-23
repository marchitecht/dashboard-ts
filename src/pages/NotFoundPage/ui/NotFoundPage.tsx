import React from "react";
import { classnames } from "shared/helpers/classnames/classnames";
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export default function NotFoundPage({ className }: NotFoundPageProps) {
  return (
    <div className={classnames(cls.NotFoundPage, {}, [className])}>
      Not found
    </div>
  );
}
