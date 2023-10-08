import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account, AccountSchema } from "../types/profile";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

const initialState: AccountSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: accountActions } = accountSlice;
export const { reducer: accountReducer } = accountSlice;
