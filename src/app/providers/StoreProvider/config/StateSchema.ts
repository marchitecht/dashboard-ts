import { UserSchema } from "entities/User";
import { CounterSchema } from "../../../../entities/Counter/model/types/counterSchema";
import { LoginSchema } from "features/AuthByUserName";
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Async reducers
  loginForm?: LoginSchema;
}
export type StateSchemaKeys = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKeys, reducer: Reducer) => void;
  remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
