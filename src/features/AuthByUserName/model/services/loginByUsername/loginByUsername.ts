import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userActions } from "../../../../../entities/User/model/slice/userSlice";
import { User } from "../../../../../entities/User/model/types/user";

import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameParams {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameParams,
  { rejectValue: string }
>("login/loginByUsername", async ({ username, password }, thunkAPI) => {
  try {
    const response = await axios.post("http://localhost:8000/login", {
      username,
      password,
    });
    if (!response.data) {
      throw new Error("no response data");
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue("Not correct username or password");
  }
});
