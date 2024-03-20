// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './pages/LoginPage';

const token = localStorage.getItem('token');
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {token ? <App /> : <LoginPage />}
  </React.StrictMode>
);

reportWebVitals();