import { apiClient } from '@services/apiClient';
import { endpoints } from '@services/endpoints';

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData extends LoginData {
  name: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export const authService = {
  async login(data: LoginData): Promise<AuthResponse> {
    const response = await apiClient.post(endpoints.auth.login, data);
    return response.data as AuthResponse;
  },

  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await apiClient.post(endpoints.auth.register, data);
    return response.data as AuthResponse;
  },

  async logout(): Promise<void> {
    await apiClient.post(endpoints.auth.logout);
    localStorage.removeItem('token');
  },

  async getCurrentUser(): Promise<AuthResponse['user']> {
    const response = await apiClient.get(endpoints.auth.me);
    return response.data as AuthResponse['user'];
  }
}; 