import React from "react";
import "./HomePage.css";
export default function HomePage() {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="logo">Cubicle</div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="nav-btn">Get Started</button>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="badge">Modern React Homepage</p>

          <h1>Build beautiful websites with clean React design.</h1>

          <p className="hero-text">
            A professional, responsive homepage built with React.js and plain
            CSS. No Tailwind setup required. Just copy, paste, and run.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Start Project</button>
            <button className="secondary-btn">View Demo</button>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="dashboard-card main-card">
            <h3>Dashboard Preview</h3>
            <p>Visitors</p>
            <h2>24,500+</h2>
          </div>

          <div className="small-cards">
            <div className="dashboard-card">
              <h4>Speed</h4>
              <p>98%</p>
            </div>
            <div className="dashboard-card">
              <h4>Growth</h4>
              <p>72%</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="section-title">
          <h2>Powerful Features</h2>
          <p>Everything you need to create a professional homepage.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">⚡</div>
            <h3>Fast Performance</h3>
            <p>Optimized layout and clean code for better user experience.</p>
          </div>

          <div className="feature-card">
            <div className="icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Looks great on desktop, tablet, and mobile devices.</p>
          </div>

          <div className="feature-card">
            <div className="icon">🎨</div>
            <h3>Modern UI</h3>
            <p>Beautiful colors, spacing, cards, and professional layout.</p>
          </div>

          <div className="feature-card">
            <div className="icon">🔒</div>
            <h3>Clean Structure</h3>
            <p>Easy to edit, customize, and connect with your backend.</p>
          </div>
        </div>
      </section>

      <section id="about" className="stats-section">
        <div className="stat-card">
          <h2>10K+</h2>
          <p>Users</p>
        </div>
        <div className="stat-card">
          <h2>99%</h2>
          <p>Responsive</p>
        </div>
        <div className="stat-card">
          <h2>24/7</h2>
          <p>Support</p>
        </div>
      </section>

      <section id="pricing" className="cta-section">
        <h2>Ready to build your next React project?</h2>
        <p>
          Use this homepage as a starting point for your portfolio, SaaS app, or
          business website.
        </p>
        <button className="primary-btn">Get Started Now</button>
      </section>

      <footer id="contact" className="footer">
        <p>© 2026 Cubicle. All rights reserved.</p>
      </footer>
    </div>
  );
}
