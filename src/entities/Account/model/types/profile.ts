import { Country, Currency } from "shared/const/common";

export interface Account {
  firstName: string;
  lastName: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  avatar: string;
  username: string;
}

export interface AccountSchema {
  data?: Account;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
