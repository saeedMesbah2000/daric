import http from "./axiosConfig";

export const getUserIdByQrCode = async (qrCodeId) => {
  try {
    const response = await http.get(`user/qr/${qrCodeId}/`);

    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const doTransaction = async (params) => {
  try {
    const response = await http.post("transactions/create/", params);

    return response.data;
  } catch (error) {
    return error.message;
  }
};
