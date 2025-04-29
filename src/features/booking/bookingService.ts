import { apiClient } from '@services/apiClient';
import { endpoints } from '@services/endpoints';

interface Movie {
  id: string;
  title: string;
}

interface ShowTime {
  id: string;
  startTime: string;
  date: string;
}

interface Seat {
  id: string;
  row: string;
  number: number;
  status: 'available' | 'booked' | 'selected';
  price: number;
}

interface Booking {
  id: string;
  movieId: string;
  showTimeId: string;
  seats: string[];
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export const bookingService = {
  async getMovie(movieId: string): Promise<Movie> {
    const response = await apiClient.get(endpoints.movies.detail(movieId));
    return response.data as Movie;
  },

  async getShowTimes(movieId: string): Promise<ShowTime[]> {
    const response = await apiClient.get(endpoints.booking.showTimes(movieId));
    return response.data as ShowTime[];
  },

  async getSeats(showTimeId: string): Promise<Seat[]> {
    const response = await apiClient.get(endpoints.booking.seats(showTimeId));
    return response.data as Seat[];
  },

  async bookSeats(showTimeId: string, seatIds: string[]): Promise<Booking> {
    const response = await apiClient.post(endpoints.booking.book, {
      showTimeId,
      seatIds
    });
    return response.data as Booking;
  },

  async getMyBookings(): Promise<Booking[]> {
    const response = await apiClient.get(endpoints.booking.myBookings);
    return response.data as Booking[];
  }
}; 