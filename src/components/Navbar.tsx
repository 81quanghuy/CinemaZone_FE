 import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    { label: 'Phim Mới', path: '/phim-moi' },
    { label: 'Phim Lẻ', path: '/phim-le' },
    { label: 'Phim Bộ', path: '/phim-bo' },
    { label: 'Phim Chiếu Rạp', path: '/phim-chieu-rap' },
    { label: 'TV Show', path: '/tv-show' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-red-500">CinemaZone</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden space-x-8 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-300 transition duration-300 hover:text-red-500"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm phim..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 rounded-full bg-gray-700 px-4 py-1 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mr-2 mt-1 text-gray-400 hover:text-red-500"
              >
                <Search size={18} />
              </button>
            </div>
          </form>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-4 px-2 pb-3 pt-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block rounded-md px-3 py-2 text-base text-gray-300 hover:bg-gray-700 hover:text-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="px-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tìm kiếm phim..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-full bg-gray-700 px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mr-3 mt-2 text-gray-400 hover:text-red-500"
                  >
                    <Search size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;