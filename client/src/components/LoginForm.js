// LoginForm.js
import React, { useState } from 'react';
import '../assets/css/login.css'; // Import your CSS file

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="background">
      <div className="company">
        <h3>
          <img src={require("../assets/images/crmlogo.png")} alt="CRM Logo" className="crmloginlogo" />
        </h3>
        <p>
          Visit Our Website:
          <a href="https://echoglitch.co/"> www.echoglitch.co </a>
        </p>
      </div>
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <form onSubmit={handleSubmit}>
        <img src={require("../assets/images/crmlogo.png")} alt="CRM Logo" className="crmlogo" />
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" className="login">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;