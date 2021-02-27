export type InputName = "email" | "password" | "confPass";
export interface UserDatas {
  email: string;
  password: string;
}
export interface LoginFormErrors {
    email: string;
    password: string;
}