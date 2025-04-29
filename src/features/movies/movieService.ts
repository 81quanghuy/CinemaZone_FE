import { apiClient } from '@services/apiClient';
import { endpoints } from '@services/endpoints';

interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  releaseDate: string;
  rating: number;
  description: string;
  duration: number;
  genre: string[];
}

interface MovieSearchParams {
  query?: string;
  genre?: string;
  page?: number;
  limit?: number;
}

export const movieService = {
  async getMovies(params?: MovieSearchParams): Promise<Movie[]> {
    const response = await apiClient.get(endpoints.movies.list, { params });
    return response.data as Movie[];
  },

  async getMovieById(id: string): Promise<Movie> {
    const response = await apiClient.get(endpoints.movies.detail(id));
    return response.data as Movie;
  },

  async getUpcomingMovies(): Promise<Movie[]> {
    const response = await apiClient.get(endpoints.movies.upcoming);
    return response.data as Movie[];
  },

  async getPopularMovies(): Promise<Movie[]> {
    const response = await apiClient.get(endpoints.movies.popular);
    return response.data as Movie[];
  },

  async searchMovies(query: string): Promise<Movie[]> {
    const response = await apiClient.get(endpoints.movies.search, {
      params: { query }
    });
    return response.data as Movie[];
  }
}; 