import { axiosInstance } from "../api";

export const postRegister = async ({ username, email, password }) => {
  return axiosInstance.post("/auth/register", {
    username,
    email,
    password,
  });
};

export const getVerify = async ({ token }) => {
  return axiosInstance.get("/auth/verify", {
    params: { token },
  });
};
