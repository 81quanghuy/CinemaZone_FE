import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Button } from '../../components';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 flex justify-center space-x-4">
          <Button
            variant={isLogin ? 'primary' : 'outline'}
            onClick={() => setIsLogin(true)}
          >
            Đăng nhập
          </Button>
          <Button
            variant={!isLogin ? 'primary' : 'outline'}
            onClick={() => setIsLogin(false)}
          >
            Đăng ký
          </Button>
        </div>
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default AuthPage; 