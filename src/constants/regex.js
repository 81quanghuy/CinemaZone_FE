export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  PHONE: /^0\d{9,10}$/,
  USERNAME: /^[a-zA-Z0-9_]{3,20}$/,
  URL: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
  HEX_COLOR: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  DATE: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
  TIME: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
  PRICE: /^\d+(\.\d{1,2})?$/,
  PERCENTAGE: /^100$|^[0-9]{1,2}$/,
  ALPHANUMERIC: /^[a-zA-Z0-9]+$/,
  ALPHABETIC: /^[a-zA-Z]+$/,
  NUMERIC: /^[0-9]+$/
}; 