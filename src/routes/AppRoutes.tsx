import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout';
import AuthPage from '@features/auth/AuthPage';
import MovieListPage from '@features/movies/MovieListPage';
import BookingPage from '@features/booking/BookingPage';
import NotFound from '../pages/NotFound';
import { useAuth } from '@hooks/useAuth';

const AppRoutes = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/auth" element={!user ? <AuthPage /> : <Navigate to="/" />} />
      
      {/* Protected routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<MovieListPage />} />
        <Route 
          path="/booking/:movieId" 
          element={user ? <BookingPage /> : <Navigate to="/auth" />} 
        />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes; 