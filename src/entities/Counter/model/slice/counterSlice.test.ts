import { DeepPartial } from "@reduxjs/toolkit";
import { counterActions, counterReducer } from "./counterSlice";
import { StateSchema } from "app/providers/StoreProvider";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice.test", () => {
  test("decrement", () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });
  test("increment", () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });
  test("should work with empty state", () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
