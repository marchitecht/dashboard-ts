import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "../../../../entities/Counter/model/slice/counterSlice";

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    // devTools: _IS__DEV_,
    preloadedState: initialState,
  });
}
