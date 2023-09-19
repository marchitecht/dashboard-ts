import React from "react";
import { Input } from "shared/ui/Input/Input";
import { classnames } from "shared/helpers/classnames/classnames";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export default function LoginForm({ className }: LoginFormProps) {
  return (
    <div className={classnames(cls.LoginForm, {}, [className])}>
      <Input
        autofocus
        placeholder="input username"
        type="text"
        className={cls.input}
      />
      <Input
        
        placeholder="input password"
        type="text"
        className={cls.input}
      />{" "}
      <button className={cls.loginBtn}>login</button>
    </div>
  );
}
