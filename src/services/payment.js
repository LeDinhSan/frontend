import axiosConfig from "../axiosConfig";

// Payment History
export const apigetPaymentHistory = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/api/payment-history/get-limit-by-user",
        params: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
