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
