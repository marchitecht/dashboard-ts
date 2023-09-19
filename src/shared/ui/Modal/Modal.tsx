import React, { useCallback, useEffect, useRef, useState } from "react";
import { classnames } from "shared/helpers/classnames/classnames";
import cls from "./Modal.module.scss";
import Portal from "../Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";

interface ModalProps {
  className?: string;
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { children, className, isOpen, onClose, lazy } = props;
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  })

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);
  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if(lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classnames(cls.Modal, mods, ["app_modal"])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div
            className={classnames(
              cls.content,
              { [cls.contentOpened]: isOpen },
              []
            )}
            onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
