import React from "react";
import "./App.css";

export default function App() {
  return (
    <main className="home">
      <nav className="nav">
        <h2>BrandName</h2>
        <div>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <p className="tag">Modern React Website</p>
          <h1>Build faster with a clean, responsive homepage.</h1>
          <p>
            A polished landing page layout for startups, portfolios, products,
            and SaaS websites.
          </p>
          <button>Get Started</button>
        </div>

        <div className="card">
          <h3>Dashboard Preview</h3>
          <p>Fast. Simple. Beautiful.</p>
        </div>
      </section>

      <section id="features" className="features">
        <div>
          <h3>Responsive</h3>
          <p>Looks great on mobile, tablet, and desktop.</p>
        </div>
        <div>
          <h3>Reusable</h3>
          <p>Easy to customize and expand.</p>
        </div>
        <div>
          <h3>Modern UI</h3>
          <p>Clean spacing, soft shadows, and strong typography.</p>
        </div>
      </section>
    </main>
  );
}
