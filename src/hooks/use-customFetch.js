import axios from "axios";
import { global } from "../config/global";

const useCustomFetch = () => {
  const fetchData = async ({ endpoint, method, config, query }) => {
    const storageToken = localStorage.getItem("authToken");
    const url = `${global.url}${endpoint}`;

    const authToken = storageToken
      ? { Authorization: `Bearer ${storageToken}` }
      : {};

    let internalConfig = {
      method: method || "GET",
      maxBodyLength: Infinity,
      url: url,
      headers: {
        ...authToken,
        "Content-Type": "application/json",
      },
      data: query,
      ...config,
    };

    console.log(internalConfig);

    try {
      const response = await axios.request(internalConfig);
      if (response.status === 200 || response.status === 201) {
        return { response };
      }
    } catch (error) {
      return {
        error: error,
        message: error.response?.data?.message || error.message,
        status: error.response?.status,
      };
    }
  };

  return { fetchData };
};

export default useCustomFetch;
