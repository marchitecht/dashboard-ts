import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { userActions } from "../../../../../entities/User/model/slice/userSlice";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("loginByUsername.test", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  test("success login", async () => {
    const userValue = {
      username: "admin",
      id: "1",
    };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: "admin",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(userValue);
  });
  test("failed login", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: "admin",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("Not correct username or password");
  });
});

// describe("loginByUsername.test", () => {
//   let dispatch: Dispatch;
//   let getState: () => StateSchema;

//   beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
//   });
//   test("success login", async () => {
//     const userValue = {
//       username: "admin",
//       id: "1",
//     };
//     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
//     const action = loginByUsername({ username: "admin", password: "123" });
//     const result = await action(dispatch, getState, undefined);
//     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
//     expect(dispatch).toHaveBeenCalledTimes(3);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe("fulfilled");
//     expect(result.payload).toBe(userValue);
//   });
//   test("failed login", async () => {
//     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
//     const action = loginByUsername({ username: "admin", password: "123" });
//     const result = await action(dispatch, getState, undefined);
//     expect(dispatch).toHaveBeenCalledTimes(2);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe("rejected");
//     expect(result.payload).toBe("Not correct username or password");
//   });
// });
