import React, { memo, useCallback } from "react";
import { Input } from "shared/ui/Input/Input";
import { classnames } from "shared/helpers/classnames/classnames";
import cls from "./LoginForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "features/AuthByUserName/model/slice/loginSlice";
import { getLoginState } from "features/AuthByUserName/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUserName/model/services/loginByUsername/loginByUsername";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import Text, { TextTheme } from "shared/ui/Text/Text";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  // const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );
  const onLoginClick = useCallback(
    () => dispatch(loginByUsername({ username, password })),
    [dispatch, password, username]
  );

  // const onLoginClick = async () => {
  //   try {
  //     await dispatch(loginByUsername({ username, password }));
  //     // Handle success, e.g., navigate to a different page
  //     console.log("Login successful");
  //   } catch (error) {
  //     // Handle failure, e.g., show an error message
  //     console.error("Login failed", error);
  //   }
  // };

  return (
    <div className={classnames(cls.LoginForm, {}, [className])}>
      <Text text={"авторизация"} />
      {error && (
        <Text text={error} theme={TextTheme.ERROR} className={cls.error} />
      )}
      <Input
        autofocus
        placeholder="input username"
        type="text"
        className={cls.input}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder="input password"
        type="text"
        className={cls.input}
        onChange={onChangePassword}
        value={password}
      />{" "}
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        className={cls.loginBtn}
        disabled={isLoading}>
        login
      </Button>
    </div>
  );
});
