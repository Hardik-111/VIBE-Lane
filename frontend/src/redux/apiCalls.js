import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/v1/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async () => {
  try {
    const response = await publicRequest.post("/v1/auth/logout");
    return response.data;
  } catch (error) {
    console.error('Error logging out:', error);
  }
};