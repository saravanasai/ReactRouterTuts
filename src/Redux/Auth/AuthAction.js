import { AuthAction } from "./AuthConstant";

export const LoginRequest = (value)=> {
  return {
    type:AuthAction.LOGIN,
    payload:value
  }
};

export const LogOutRequest = ()=> {
  return {
    type:AuthAction.LOGOUT,
  }
};