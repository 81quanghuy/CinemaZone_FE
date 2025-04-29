import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../types/movie';
import { Play, Star } from 'lucide-react';

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {movies.map((movie) => (
        <div key={movie.id} className="group relative overflow-hidden rounded-lg">
          {/* Poster Image */}
          <div className="aspect-[2/3] w-full">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute bottom-0 w-full p-4">
              <h3 className="mb-1 text-sm font-semibold text-white md:text-base">
                {movie.title}
              </h3>
              <div className="flex items-center justify-between text-xs text-gray-300">
                <div className="flex items-center space-x-2">
                  <Star size={12} className="text-yellow-500" />
                  <span>{movie.rating}</span>
                </div>
                <span>{movie.quality}</span>
              </div>
            </div>
          </div>

          {/* Play Button */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Link
              to={`/phim/${movie.id}`}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/80 text-white transition hover:bg-red-600"
            >
              <Play size={24} />
            </Link>
          </div>

          {/* Episode Badge */}
          {movie.type === 'series' && movie.episodes && (
            <div className="absolute right-2 top-2 rounded bg-red-500 px-2 py-1 text-xs font-medium text-white">
              Tập {movie.episodes.current}/{movie.episodes.total}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieGrid; 