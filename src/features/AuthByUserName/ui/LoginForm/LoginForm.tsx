import React, { memo, useCallback, useEffect } from "react";
import { Input } from "shared/ui/Input/Input";
import { classnames } from "shared/helpers/classnames/classnames";
import cls from "./LoginForm.module.scss";
import { useDispatch, useSelector, useStore } from "react-redux";
import {
  loginActions,
  loginReducer,
} from "features/AuthByUserName/model/slice/loginSlice";
import { getLoginState } from "features/AuthByUserName/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUserName/model/services/loginByUsername/loginByUsername";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import Text, { TextTheme } from "shared/ui/Text/Text";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { getLoginUsername } from "features/AuthByUserName/model/selectors/getLoginUsename/getLoginUsername";
import { getLoginPassword } from "features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "features/AuthByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "features/AuthByUserName/model/selectors/getLoginError/getLoginError";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}
const initialReducer: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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
  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
    }
  }, [dispatch, password, username, onSuccess]);

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
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducer}>
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
    </DynamicModuleLoader>
  );
});
export default LoginForm;
