import axiosInstance from "@/lib/axios";
import { RegisterBody } from "@/types/typepredicate/registerPredicate";
import { LoginBody } from "@/types/typepredicate/loginPredicate";
import { User } from "@/types/user";

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
}

const AuthService = {
  register: async (data: RegisterBody): Promise<AuthResponse> => {
    try {
      const response = await axiosInstance.post<AuthResponse>("/auth/register", data);
      return response.data;
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || "Registration failed",
      };
    }
  },

  login: async (data: LoginBody): Promise<AuthResponse> => {
    try {
      const response = await axiosInstance.post<AuthResponse>("/auth/login", data);
      return response.data;
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  },

  logout: async (): Promise<AuthResponse> => {
    try {
      const response = await axiosInstance.post<AuthResponse>("/auth/logout");
      return response.data;
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || "Logout failed",
      };
    }
  },

  // Example of getting current user session/profile if needed
  getCurrentUser: async (): Promise<AuthResponse> => {
    try {
      const response = await axiosInstance.get<AuthResponse>("/auth/me");
      return response.data;
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || "Session expired",
      };
    }
  },
};

export default AuthService;
