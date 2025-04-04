// src/profile_option.js
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './profile_option.css';

const ProfileOption = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogin = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setDropdownOpen(false);
  };

  return (
    <div className="user-menu">
      {isLoggedIn ? (
        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <button className="user-icon">
            <FaUserCircle size={30} />
            <span>syam</span>
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>putturmunisyam@gmail.com</li>
              <li><a href="#profile">Profile</a></li>
              <li><a href="#dashboard">Dashboard</a></li>
              <li><a href="#settings">Additional Settings</a></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          )}
        </div>
      ) : (
        <button className="login-button" onClick={handleLogin}>Login / Signup</button>
      )}
    </div>
  );
};

export default ProfileOption;
