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

export const increaseWalletBalance = async (params) => {
  try {
    const response = await http.post("wallet/increase/", params);

    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const getWalletBalance = async (userId) => {
  try {
    const response = await http.get(`wallet/${userId}/`);

    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const getTransactionHistory = async (inputData) => {
  try {
    const response = await http.get(
      `transaction-history/${inputData.userId}/?start_date=${inputData.startDate}&end_date=${inputData.endDate}`
    );

    return response.data;
  } catch (error) {
    return error.message;
  }
};
