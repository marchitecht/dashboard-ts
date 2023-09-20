import { UserSchema } from "entities/User";
import { CounterSchema } from "../../../../entities/Counter/model/types/counterSchema";
import { LoginSchema } from "features/AuthByUserName";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm: LoginSchema;
}
