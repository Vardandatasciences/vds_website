import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';
import vardaanlogo from '../../assets/Images/v-logo.png';
import google from '../../assets/Images/google.jpeg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/login', {
        email,
        password,
      });
      setMessage(response.data);
      // Add login success handling here
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  return (
    <div className="auth-container">
      <img src={vardaanlogo} alt="Vardaan Logo" className="vardaan-logo" />
      <h2>Hey welcome back!</h2>
      {message && <p>{message}</p>}
      <button className="google-login-button">
        <img src={google} alt="Google logo" className="google-logo" />
        Continue with Google
      </button>
      <div className="separator">or</div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email/Username:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="forgot-password">Forgot Password?</p>
      <p>
        Don't have an account?{' '}
        <span onClick={() => window.location.href='/signup'} className="toggle-link">
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Login;
