import React, { useState } from 'react';
import { Button } from '@components/Button';
import { validateEmail, validatePassword } from '@utils/validateEmail';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    const newErrors = {
      email: !validateEmail(formData.email) ? 'Email không hợp lệ' : '',
      password: !validatePassword(formData.password) ? 'Mật khẩu phải có ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường, 1 số' : '',
      confirmPassword: formData.password !== formData.confirmPassword ? 'Mật khẩu không khớp' : '',
      fullName: formData.fullName.length < 2 ? 'Họ tên phải có ít nhất 2 ký tự' : ''
    };

    setErrors(newErrors);

    // Nếu không có lỗi thì submit
    if (!Object.values(newErrors).some(error => error)) {
      // Xử lý đăng ký
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Họ và tên</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
        {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
        <input
          type="password"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
        <input
          type="password"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
        {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
      </div>
      <Button variant="primary" className="w-full">
        Đăng ký
      </Button>
    </form>
  );
};

export default RegisterForm; 