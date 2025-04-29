export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  // Ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường, 1 số
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};

export const validatePhoneNumber = (phone) => {
  // Format: 10-11 số, bắt đầu bằng 0
  const phoneRegex = /^0\d{9,10}$/;
  return phoneRegex.test(phone);
}; 