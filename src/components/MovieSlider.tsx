import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Movie } from '../types/movie';

interface MovieSliderProps {
  movies: Movie[];
}

const MovieSlider: React.FC<MovieSliderProps> = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  }, [movies.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (!isHovered) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [nextSlide, isHovered]);

  if (!movies.length) return null;

  const movie = movies[currentIndex];

  return (
    <div className="relative">
      {/* Main Slider */}
      <div 
        className="group relative h-[400px] overflow-hidden rounded-lg md:h-[600px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image with Ken Burns Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-in-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${movie.backdropUrl})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl space-y-6">
              {/* Genres */}
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-red-500/70 px-3 py-1 text-sm font-medium text-white"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold text-white md:text-6xl">
                {movie.title}
              </h1>

              {/* Movie Info */}
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="flex items-center space-x-1">
                  <Star size={16} className="text-yellow-500" />
                  <span>{movie.rating.toFixed(1)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{movie.duration} phút</span>
                </div>
                <span className="rounded bg-red-500/70 px-2 py-1 text-sm font-medium text-white">
                  {movie.quality}
                </span>
              </div>

              {/* Overview */}
              <p className="text-lg text-gray-300 line-clamp-3">{movie.overview}</p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to={`/phim/${movie.id}`}
                  className="flex items-center gap-2 rounded-full bg-red-500 px-8 py-3 font-semibold text-white transition hover:bg-red-600"
                >
                  Xem Phim
                </Link>
                <Link
                  to={`/phim/${movie.id}`}
                  className="flex items-center gap-2 rounded-full border border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  Chi Tiết
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white opacity-0 transition hover:bg-black/75 group-hover:opacity-100"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white opacity-0 transition hover:bg-black/75 group-hover:opacity-100"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-4 right-4 z-10">
        <div className="flex gap-2">
          {movies.map((movie, index) => (
            <button
              key={movie.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 transition duration-300 ${
                index === currentIndex ? 'opacity-100' : 'opacity-50 hover:opacity-75'
              }`}
            >
              <div className="relative h-16 w-28 overflow-hidden rounded">
                <img
                  src={movie.backdropUrl}
                  alt={movie.title}
                  className="h-full w-full object-cover"
                />
                <div className={`absolute inset-0 ${
                  index === currentIndex ? 'bg-transparent ring-2 ring-red-500' : 'bg-black/40'
                }`}></div>
              </div>
              <div className={`absolute bottom-0 left-0 h-0.5 w-full overflow-hidden bg-gray-600 ${
                index === currentIndex ? 'block' : 'hidden'
              }`}>
                <div className="h-full w-full bg-red-500 animate-progress origin-left"></div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSlider; 