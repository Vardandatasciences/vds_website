import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import vardaanlogo from '../../assets/Images/v-logo.png';
import './Auth.css';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5001/signup', {
        firstName,
        lastName,
        email,
        password,
      });
      setMessage(response.data);
      setShowPopup(true);
      setWelcomeMessage(`Welcome ${firstName} ${lastName}`);
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    const { credential } = credentialResponse;
    try {
      const res = await axios.post('http://localhost:5001/google-signup', { tokenId: credential });
      if (res.data && res.data.user) {
        const user = res.data.user;
        setWelcomeMessage(`Hey ${user.name}`);
        setMessage(res.data.message);
        setShowPopup(true);
      } else {
        setMessage('Google sign-in was successful but user data is missing.');
      }
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  const handleGoogleFailure = (error) => {
    setMessage('Google sign-in was unsuccessful. Try again later.');
  };

  return (
    <GoogleOAuthProvider clientId="697324508813-dghma537lfaqvomdccov0qdeg5v64l9c.apps.googleusercontent.com">
      <div className="auth-container">
        <img src={vardaanlogo} alt="Vardaan Logo" className="vardaan-logo" />
        <h2>Join us</h2>
        {message && <p>{message}</p>}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h3>{welcomeMessage}</h3>
              <p>Your account has been successfully created.</p>
              <button onClick={handlePopupClose}>Close</button>
            </div>
          </div>
        )}
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
          useOneTap
          className="google-login-button"
        />
        <div className="separator">or</div>
        <form onSubmit={handleSubmit}>
          <div className="name-container">
            <div className="input-container">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="password-container">
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
            <div className="input-container">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="create-account-button">Create Account</button>
        </form>
        <p>
          Have an account?{' '}
          <span onClick={() => window.location.href='/login'} className="toggle-link">
            Log In
          </span>
        </p>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Signup;

