// src/ImageWithText.js
import React from 'react';
import './ImageWithText.css';

const ImageWithText = () => {
  return (
    <div className="hero-container">
      <div className="preview-button">Preview</div>
      <div className="diagonal-cut"></div>
      
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <div className="gradient-waves">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      
      <div className="diagonal-bars">
        <div className="color-bar"></div>
        <div className="color-bar"></div>
        <div className="color-bar"></div>
        <div className="color-bar"></div>
      </div>
      
      <div className="light-streaks">
        <div className="light-streak"></div>
        <div className="light-streak"></div>
        <div className="light-streak"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className="gradient-text">Powering the world</span> <span className="gradient-text-3">with data,</span>
            <br />
            <span className="gradient-text-4">innovative</span><span className="gradient-text-5">solutions,</span>
            <br />
            <span className="gradient-text">and</span> <span className="gradient-text-3">artificial </span>
            <br />
            <span className="gradient-text-4">intelligence</span>.
          </h1>
          <p>
            Join the millions of companies that use Vardaan to transform 
            raw data into actionable intelligence, embed analytics services,
            and create powerful AI-driven business solutions.
          </p>
          <button className="cta-button">Get started</button>
        </div>
        
        <div className="preview-card">
          <div className="dashboard-header">
            <div className="company-info">
              <div className="company-logo">V</div>
              <div className="company-name">VARDAAN ANALYTICS</div>
            </div>
            <div className="dashboard-actions">
              <div className="search-bar">
                <span className="search-icon">🔍</span>
                <span>Search</span>
              </div>
              <div className="user-menu">
                <span className="user-avatar">AB</span>
              </div>
            </div>
          </div>
          
          <div className="dashboard-content">
            <div className="dashboard-sidebar">
              <div className="sidebar-item active">
                <span className="sidebar-icon">📊</span>
                <span className="sidebar-text">Dashboard</span>
              </div>
              <div className="sidebar-item">
                <span className="sidebar-icon">📈</span>
                <span className="sidebar-text">Models</span>
              </div>
              <div className="sidebar-item">
                <span className="sidebar-icon">🔍</span>
                <span className="sidebar-text">Predictions</span>
              </div>
              <div className="sidebar-item">
                <span className="sidebar-icon">📁</span>
                <span className="sidebar-text">Datasets</span>
              </div>
              <div className="sidebar-item">
                <span className="sidebar-icon">⚙️</span>
                <span className="sidebar-text">Settings</span>
              </div>
            </div>
            
            <div className="dashboard-main">
              <div className="dashboard-title">Performance Overview</div>
              
              <div className="metrics-grid">
                <div className="metric-tile">
                  <div className="metric-label">Model Accuracy</div>
                  <div className="metric-value">98.72%</div>
                  <div className="metric-change positive">+2.8%</div>
                  <div className="metric-chart mini-chart-accuracy"></div>
                </div>
                
                <div className="metric-tile">
                  <div className="metric-label">Processing Speed</div>
                  <div className="metric-value">3.4ms</div>
                  <div className="metric-change positive">-0.7ms</div>
                  <div className="metric-chart mini-chart-speed"></div>
                </div>
                
                <div className="metric-tile">
                  <div className="metric-label">Data processed</div>
                  <div className="metric-value">1.2TB</div>
                  <div className="metric-change positive">+15.4%</div>
                  <div className="metric-chart mini-chart-data"></div>
                </div>
                
                <div className="metric-tile">
                  <div className="metric-label">Active predictions</div>
                  <div className="metric-value">524k</div>
                  <div className="metric-change positive">+32.8%</div>
                  <div className="metric-chart mini-chart-predictions"></div>
                </div>
              </div>
              
              <div className="main-chart-container">
                <div className="chart-header">
                  <div className="chart-title">Model Performance Trends</div>
                  <div className="chart-time-selector">
                    <span className="time-option active">Day</span>
                    <span className="time-option">Week</span>
                    <span className="time-option">Month</span>
                    <span className="time-option">Year</span>
                  </div>
                </div>
                <div className="main-chart">
                  <div className="chart-visualization"></div>
                  <div className="chart-legend">
                    <div className="legend-item">
                      <span className="legend-color accuracy"></span>
                      <span className="legend-text">Accuracy</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-color predictions"></span>
                      <span className="legend-text">Predictions</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-color latency"></span>
                      <span className="legend-text">Latency</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="recent-activity">
                <div className="activity-header">
                  <div className="activity-title">Recent Activity</div>
                  <button className="view-all-btn">View All</button>
                </div>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon model-updated">🔄</div>
                    <div className="activity-content">
                      <div className="activity-text">NLP Model v2.3 was updated</div>
                      <div className="activity-time">10 minutes ago</div>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon data-import">📤</div>
                    <div className="activity-content">
                      <div className="activity-text">New dataset imported (345MB)</div>
                      <div className="activity-time">2 hours ago</div>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon alert">⚠️</div>
                    <div className="activity-content">
                      <div className="activity-text">Anomaly detected in prediction service</div>
                      <div className="activity-time">Yesterday, 18:43</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageWithText;
