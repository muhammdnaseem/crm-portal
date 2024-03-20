import React, { useState } from 'react';

import LoginForm from '../components/LoginForm';
import App from '../App'; // Import your main App component

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
console.log(process.env.REACT_APP_BASE_URL);

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/getusercrediantial`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
       
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const { token } = await response.json();
      console.log('Token:', token); // Print token received from the backend

    
      // Store token in localStorage
      localStorage.setItem('token', token);
      // Update login state
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid username or password');
    }
  };

  return (
    <React.Fragment>
    
      {isLoggedIn ? (
        <App /> // Render App component if user is logged in
      ) : (
        <React.Fragment>
          <LoginForm onLogin={handleLogin} />
          {error && <p>{error}</p>} {/* Display error message if there is an error */}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default LoginPage;
