import { useState, useEffect } from 'react';
import { Movie } from '@/types/movie';
import { getTrendingMovies, getNewMovies, getUpcomingMovies } from '@/data/mockMovies';

export const useMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [newMovies, setNewMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        // Giả lập delay để tạo cảm giác loading
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setTrendingMovies(getTrendingMovies());
        setNewMovies(getNewMovies());
        setUpcomingMovies(getUpcomingMovies());
        setError(null);
      } catch (err) {
        setError('Có lỗi xảy ra khi tải dữ liệu phim');
        console.error('Error fetching movies:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return {
    trendingMovies,
    newMovies,
    upcomingMovies,
    loading,
    error,
  };
}; 