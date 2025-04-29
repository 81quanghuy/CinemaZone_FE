export const endpoints = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    me: '/auth/me',
  },
  movies: {
    list: '/movies',
    detail: (id: string) => `/movies/${id}`,
    search: '/movies/search',
    upcoming: '/movies/upcoming',
    popular: '/movies/popular',
  },
  booking: {
    showTimes: (movieId: string) => `/movies/${movieId}/showtimes`,
    seats: (showTimeId: string) => `/showtimes/${showTimeId}/seats`,
    book: '/bookings',
    myBookings: '/bookings/me',
  },
}; 