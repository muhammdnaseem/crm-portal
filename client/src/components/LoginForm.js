import React, { useState } from 'react';
import '../assets/css/login.css';

const LoginForm = ({onLogin}) => {
  // State to manage form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here using the 'username' and 'password' state values
    console.log('Username:', username);
    console.log('Password:', password);
    
    
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form >
        <div className="user-box">
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>
        <button type="submit" onClick={onLogin}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
