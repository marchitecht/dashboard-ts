import React from "react";
import { classnames } from "shared/helpers/classnames/classnames";
import cls from "./Portal.module.scss";
import { createPortal } from "react-dom";

interface PortalProps {
  className?: string;
  children: React.ReactNode;
  element?: HTMLElement;
}

export default function Portal({
  children,
  element = document.body,
}: PortalProps) {
  return createPortal(children, element);
}
