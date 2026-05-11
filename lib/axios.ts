import axios from "axios";
import { toast } from "@/context/ToastContext";

const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Only show loading for non-GET requests to avoid spamming on data fetching
    if (config.method !== "get") {
      // toast.loading("Processing request...");
    }
    return config;
  },
  (error) => {
    toast.error("Request failed to send");
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    const message = response.data?.message;
    if (message && response.config.method !== "get") {
      toast.success(message);
    }
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || "An unexpected error occurred";
    toast.error(message);
    return Promise.reject(error);
  }
);


export default axiosInstance;
