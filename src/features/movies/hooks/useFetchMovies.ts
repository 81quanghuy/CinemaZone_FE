import { useState, useEffect } from 'react';
import { movieService } from '../movieService';

interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  releaseDate: string;
  rating: number;
}

export const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await movieService.getMovies();
        setMovies(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Không thể tải danh sách phim');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, isLoading, error };
}; 