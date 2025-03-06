import http from "./axiosConfig";

export const LoginUser = async (userPhoneNumber) => {
  try {
    const response = await http.get(`user/${userPhoneNumber}/`);

    return response.data;
  } catch (error) {
    debugger;
    return error;
  }
};

export const RegisterUser = async (params) => {
  try {
    debugger;
    const response = await http.post("register/", params);

    debugger;

    return response.data;
  } catch (error) {
    return error.message;
  }
};
