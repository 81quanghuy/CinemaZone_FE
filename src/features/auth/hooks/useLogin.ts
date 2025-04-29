import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../authService';

interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (data: LoginData) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await authService.login(data);
      // Lưu token vào localStorage hoặc state management
      localStorage.setItem('token', response.token);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đăng nhập thất bại');
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
}; 