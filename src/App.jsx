// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import OptionsPage from './OptionsPage';
import PathwayPage from './PathwayPage';
import GroupDetailPage from './GroupDetailPage';
import UsesPage from './UsesPage';
import VideosPage from './VideosPage';
import JobNotificationsPage from './JobNotificationsPage'; // Import new page
import Navbar from './Navbar'; // Import Navbar

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginSuccess = () => setIsLoggedIn(true);

  // This is a wrapper to add the Navbar to all protected pages
  const Layout = ({ children }) => {
    return (
      <>
        <Navbar />
        {children}
      </>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    return <Layout>{children}</Layout>;
  };

  return (
    <Routes>
      <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage onLoginSuccess={handleLoginSuccess} />} />
      <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      <Route path="/options/:level" element={<ProtectedRoute><OptionsPage /></ProtectedRoute>} />
      <Route path="/pathway/:pathwayId" element={<ProtectedRoute><PathwayPage /></ProtectedRoute>} />
      <Route path="/group/:groupId" element={<ProtectedRoute><GroupDetailPage /></ProtectedRoute>} />
      <Route path="/uses/:groupId" element={<ProtectedRoute><UsesPage /></ProtectedRoute>} />
      <Route path="/videos/:groupId" element={<ProtectedRoute><VideosPage /></ProtectedRoute>} />
      {/* ADD THE NEW JOBS ROUTE */}
      <Route path="/jobs" element={<ProtectedRoute><JobNotificationsPage /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />
    </Routes>
  );
}

export default App;