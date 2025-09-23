import React, { useState } from 'react';

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    console.log('Login successful for:', email);
    onLoginSuccess();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to DREAM TRACK</h2>
        <p>Login to continue your journey</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        
        {/* --- THIS SECTION HAS BEEN REMOVED --- */}
        {/*
        <div className="extra-links">
          <a href="#">Forgot Password?</a>
          <a href="#">Don't have an account? Sign Up</a>
        </div>
        */}
      </div>
    </div>
  );
};

export default LoginPage;