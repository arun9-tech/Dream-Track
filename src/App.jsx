import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import OptionsPage from './OptionsPage';
import PathwayPage from './PathwayPage';
import GroupDetailPage from './GroupDetailPage';
import UsesPage from './UsesPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginSuccess = () => setIsLoggedIn(true);

  // A component to protect routes that need login
  const ProtectedRoute = ({ children }) => {
    // If user is not logged in, redirect them to the login page
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Routes>
      {/* 
        --- THIS IS THE CRITICAL FIX ---
        The /login route now checks if the user is already logged in.
        If they are, it redirects them to /home immediately.
        If not, it shows the LoginPage.
        This prevents the user from being "stuck" on the login screen.
      */}
      <Route
        path="/login"
        element={
          isLoggedIn ? <Navigate to="/home" /> : <LoginPage onLoginSuccess={handleLoginSuccess} />
        }
      />

      {/* All the application pages are now wrapped in the ProtectedRoute */}
      <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      <Route path="/options/:level" element={<ProtectedRoute><OptionsPage /></ProtectedRoute>} />
      <Route path="/pathway/:pathwayId" element={<ProtectedRoute><PathwayPage /></ProtectedRoute>} />
      <Route path="/group/:groupId" element={<ProtectedRoute><GroupDetailPage /></ProtectedRoute>} />
      <Route path="/uses/:groupId" element={<ProtectedRoute><UsesPage /></ProtectedRoute>} />
      
      {/* 
        This is the catch-all route.
        If the user is logged in, their starting point is /home.
        If not, their starting point is /login.
      */}
      <Route
        path="*"
        element={<Navigate to={isLoggedIn ? "/home" : "/login"} />}
      />
    </Routes>
  );
}

export default App;