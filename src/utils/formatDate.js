export const formatDate = (date, format = 'DD/MM/YYYY') => {
  if (!date) return '';
  const d = new Date(date);
  
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const year = d.getFullYear();
  const hours = d.getHours().toString().padStart(2, '0');
  const minutes = d.getMinutes().toString().padStart(2, '0');

  return format
    .replace('DD', day)
    .replace('MM', month)
    .replace('YYYY', year)
    .replace('HH', hours)
    .replace('mm', minutes);
};

export const formatDateTime = (date) => {
  return formatDate(date, 'DD/MM/YYYY HH:mm');
};

export const formatTime = (date) => {
  return formatDate(date, 'HH:mm');
}; 