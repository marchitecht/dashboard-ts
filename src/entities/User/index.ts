import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
import { userReducer, userActions } from "./model/slice/userSlice";

export { UserSchema, User } from "./model/types/user";
export { userReducer, userActions, getUserAuthData };
