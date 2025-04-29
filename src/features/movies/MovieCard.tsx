import React from 'react';
import { Link } from 'react-router-dom';

interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  releaseDate: string;
  rating: number;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} className="group">
      <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-200 hover:scale-105">
        <div className="relative pb-[150%]">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold group-hover:text-blue-600">
            {movie.title}
          </h3>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{new Date(movie.releaseDate).getFullYear()}</span>
            <span className="flex items-center">
              <svg
                className="mr-1 h-4 w-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {movie.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard; 