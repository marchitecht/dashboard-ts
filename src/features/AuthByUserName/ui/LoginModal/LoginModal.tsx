import React, { Suspense } from "react";
import { classnames } from "shared/helpers/classnames/classnames";
import cls from "./LoginModal.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({
  className,
  isOpen,
  onClose,
}: LoginModalProps) {
  return (
    <Modal
      lazy
      className={classnames(cls.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}>
      <Suspense fallback={"...Loading..."}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
}
