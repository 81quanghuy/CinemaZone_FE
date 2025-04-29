import { useState, useEffect } from 'react';
import { bookingService } from '../bookingService';

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

export const useBooking = (movieId: string, showTimeId: string | null) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showTimes, setShowTimes] = useState<ShowTime[]>([]);
  const [seats, setSeats] = useState<Seat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Lấy thông tin phim và suất chiếu
  useEffect(() => {
    const fetchMovieAndShowTimes = async () => {
      try {
        setIsLoading(true);
        const [movieData, showTimesData] = await Promise.all([
          bookingService.getMovie(movieId),
          bookingService.getShowTimes(movieId)
        ]);
        setMovie(movieData);
        setShowTimes(showTimesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Không thể tải thông tin phim');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieAndShowTimes();
  }, [movieId]);

  // Lấy thông tin ghế khi chọn suất chiếu
  useEffect(() => {
    const fetchSeats = async () => {
      if (!showTimeId) {
        setSeats([]);
        return;
      }

      try {
        setIsLoading(true);
        const seatsData = await bookingService.getSeats(showTimeId);
        setSeats(seatsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Không thể tải thông tin ghế');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSeats();
  }, [showTimeId]);

  const bookSeats = async (selectedSeats: string[]) => {
    if (!showTimeId || selectedSeats.length === 0) return;

    try {
      setIsLoading(true);
      await bookingService.bookSeats(showTimeId, selectedSeats);
      // Cập nhật lại danh sách ghế sau khi đặt
      const updatedSeats = await bookingService.getSeats(showTimeId);
      setSeats(updatedSeats);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Không thể đặt vé');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    movie,
    showTimes,
    seats,
    isLoading,
    error,
    bookSeats
  };
}; 