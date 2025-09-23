import React, { useState } from 'react';
import LoginPage from './LoginPage';   // We need both pages now
import HomePage from './HomePage';
import './App.css'; 

function App() {
  // NEW: A state to check if the user is logged in or not.
  // By default, they are not logged in.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // NEW: This function will be called by the LoginPage when login is successful.
  // It will change the state and cause the HomePage to render.
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {/* 
        This is the core logic:
        - If 'isLoggedIn' is true, show the HomePage.
        - If 'isLoggedIn' is false, show the LoginPage.
      */}
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;