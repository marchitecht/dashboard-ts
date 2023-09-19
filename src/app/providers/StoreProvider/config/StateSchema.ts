import { UserSchema } from "entities/User";
import { CounterSchema } from "../../../../entities/Counter/model/types/counterSchema";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}
