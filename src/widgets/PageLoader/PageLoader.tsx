import React from "react";
import { classnames } from "shared/helpers/classnames/classnames";
import cls from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
}

export default function PageLoader({ className }: PageLoaderProps) {
  return (
    <div className={classnames(cls.PageLoader, {}, [className])}>
      <div className={cls["lds-ripple"]}>
        <div/>
        <div/>
      </div>
    </div>
  );
}
