import React, { FC, ReactNode, useEffect } from "react";
import { classnames } from "shared/helpers/classnames/classnames";
import cls from "./DynamicModuleLoader.module.scss";
import { useDispatch, useStore } from "react-redux";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUserName/model/slice/loginSlice";
import { StateSchemaKeys } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer;
};

type ReducersListEntry = [StateSchemaKeys, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  children: ReactNode;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(
          ([name, reducer]: ReducersListEntry) => {
            store.reducerManager.remove(name);
            dispatch({ type: `@DESTROY ${name} reducer` });
          }
        );
      }
    };
  }, []);
  return <>{children}</>;
};
