// src/SignIn.js
import React from 'react';
import './signin.css';

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-form">
        <h2>Sign In</h2>
        <p>Enter your email and password to Sign In.</p>
        <button className="google-signin-button">
          <img src="path/to/google-logo.png" alt="Google Logo" />
          LOGIN WITH GOOGLE
        </button>
        <div className="divider">
          <span>or</span>
        </div>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <button type="submit" className="signin-button">SIGN IN</button>
        </form>
        <a href="#forgot-password" className="forgot-password-link">Forgot Password?</a>
        <p>Don't have an account? <a href="#signup" className="signup-link">Sign up</a></p>
      </div>
    </div>
  );
};

export default SignIn;
