import React from "react";
import { classnames } from "shared/helpers/classnames/classnames";
import cls from "./LoginModal.module.scss";
import { LoginForm } from "../LoginForm/LoginForm";
import { Modal } from "shared/ui/Modal/Modal";

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
      <LoginForm />
    </Modal>
  );
}
