import React from 'react';
import alexImg from './assets/alex.jpg';
import anu from './assets/anu.jpg';
import san from './assets/san.jpg';
import abhi from './assets/abhi.jpg';
 

export default function App() { 
  return (
    <div>
      {/* HEADER SECTION */}
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo-box">GRAYMATICS</div>
          <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>UK</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HOME / HERO SECTION */}
      <header id="home" className="hero">
        <div className="grid-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="col-12">
            <span style={{ color: '#58a6ff', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
              London-Based AI & Cognitive Video Analytics Leader
            </span>
            <h1 style={{ marginTop: '1rem' }}>Transforming Visual Data into Actionable Real-Time Insights</h1>
            <p>
              Established in 2021, Graymatics UK specializes in cutting-edge Video Analytics (VA), Generative AI (GenAI), 
              and Agentic AI to empower cities and enterprises with smart, data-driven ecosystems.
            </p>
            <a href="#solutions" className="btn">Explore Solutions</a>
          </div>
        </div>
      </header>

      {/* ABOUT US SECTION */}
      <section id="about" className="section">
        <div className="grid-container">
          <div className="col-8 card">
            <h2>About Us</h2>
            <p style={{ marginTop: '1rem', color: '#c9d1d9' }}>
              Graymatics UK is a London-based AI startup, established in 2021, with active research and development, 
              product engineering, and business development operations across the United Kingdom. The company specializes 
              in delivering a cognitive multimedia analytics platform that transforms visual data—such as images and video 
              streams—into actionable, real-time insights.
            </p>
            <p style={{ marginTop: '1rem', color: '#c9d1d9' }}>
              Leveraging advanced technologies including Video Analytics (VA), Generative AI (GenAI), and Agentic AI, 
              Graymatics UK enables organizations to interpret and respond to complex visual environments with greater speed and accuracy.
            </p>
          </div>
          <div className="col-4 card" style={{ background: '#1f2937' }}>
            <h3>Key Highlights</h3>
            <ul style={{ paddingLeft: '20px', marginTop: '1rem', color: '#8b949e', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>Founded: 2021 in London</li>
              <li>Focus: GenAI & Video Analytics</li>
              <li>Global Expansion: Europe & Asia</li>
              <li>Top 30 Finalist JUMPSTARTER 2026</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OUR SOLUTIONS */}
      <section id="solutions" className="section" style={{ background: '#161b22' }}>
        <div className="grid-container">
          <div className="col-12">
            <h2>Our Solutions</h2>
            <p style={{ color: '#8b949e', marginTop: '0.5rem' }}>
              Developed upon extensive research and tried and tested on various platforms to ensure nearly accurate results across industries.
            </p>
          </div>
          <div className="col-6 card">
            <h3>Security & Surveillance</h3>
            <p style={{ marginTop: '10px', color: '#c9d1d9' }}>Advanced threat detection and continuous monitoring for public and private infrastructure.</p>
          </div>
          <div className="col-6 card">
            <h3>Retail & Smart Malls</h3>
            <p style={{ marginTop: '10px', color: '#c9d1d9' }}>Analyze customer demographics, foot traffic, and behavior patterns in real time.</p>
          </div>
        </div>
      </section>

      {/* OUR PRODUCTS (Grid 3 & 6 layout) */}
      <section id="products" className="section">
        <div className="grid-container">
          <div className="col-12">
            <h2>Our Products</h2>
          </div>
          <div className="col-3 card">
            <h3>Urban Vision</h3>
            <p style={{ fontSize: '0.9rem', color: '#8b949e', marginTop: '10px' }}>Smart cities solution split into Smart Infrastructure and Smart Public Services.</p>
          </div>
          <div className="col-3 card">
            <h3>Lab Vista</h3>
            <p style={{ fontSize: '0.9rem', color: '#8b949e', marginTop: '10px' }}>Video streaming analysis for smart laboratories, factories, and workplace safety.</p>
          </div>
          <div className="col-3 card">
            <h3>Vista Mart</h3>
            <p style={{ fontSize: '0.9rem', color: '#8b949e', marginTop: '10px' }}>Retail analytics monitoring customer demographics, age, gender, and emotions.</p>
          </div>
          <div className="col-3 card">
            <h3>Site Insights</h3>
            <p style={{ fontSize: '0.9rem', color: '#8b949e', marginTop: '10px' }}>Optimal solutions for building managers regarding safety and security concerns.</p>
          </div>
          <div className="col-6 card">
            <h3>Smart Bank</h3>
            <p style={{ fontSize: '0.9rem', color: '#8b949e', marginTop: '10px' }}>Analyzes customer profiles, dwell time, queue patterns, and abandoned object detection.</p>
          </div>
          <div className="col-6 card">
            <h3>Smart Port</h3>
            <p style={{ fontSize: '0.9rem', color: '#8b949e', marginTop: '10px' }}>Enhances port security with vehicle, port, and COVID analytics, illegal parking, and vessel detection.</p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="section" style={{ background: '#161b22' }}>
        <div className="grid-container">
          <div className="col-12">
            <h2>Vanguard Leadership & Team</h2>
          </div>
          
          <div className="col-3 card" style={{ textAlign: 'center' }}>
            <img src={abhi} alt="Abhijit Shanbhag" className="team-img" />
            <h4>Abhijit Shanbhag</h4>
            <p style={{ fontSize: '0.85rem', color: '#8b949e', margin: '5px 0' }}>Founder GRAYMATICSUK LTD</p>
            <a href="https://www.linkedin.com/in/ashanbhag/" target="_blank" rel="noreferrer" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.9rem' }}>
              LinkedIn Profile ↗
            </a>
          </div>

          <div className="col-3 card" style={{ textAlign: 'center' }}>
              <img src={san} alt="Sandeep Arora" className="team-img" />
            <p style={{ fontSize: '0.85rem', color: '#8b949e', margin: '5px 0' }}>UK General Manager</p>
            <a href="https://www.linkedin.com/in/sandeep-arora/" target="_blank" rel="noreferrer" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.9rem' }}>
              LinkedIn Profile ↗
            </a>
          </div>

          <div className="col-3 card" style={{ textAlign: 'center' }}>
           <img src={anu} alt="Anuradha Pullagura" className="team-img" />
            <h4>Anuradha Pullagura</h4>
            <p style={{ fontSize: '0.85rem', color: '#8b949e', margin: '5px 0' }}>Business Development Lead</p>
            <a href="https://www.linkedin.com/in/anuradhapullagura/" target="_blank" rel="noreferrer" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.9rem' }}>
              LinkedIn Profile ↗
            </a>
          </div>

          <div className="col-3 card" style={{ textAlign: 'center' }}>
            <img src={alexImg} alt="Alex Kaiser" className="team-img" />
            <h4>Alex Kaiser</h4>
            <p style={{ fontSize: '0.85rem', color: '#8b949e', margin: '5px 0' }}>Product Manager</p>
            <a href="https://www.linkedin.com/in/alex-ignacio-kaiser-650b35108/" target="_blank" rel="noreferrer" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.9rem' }}>
              LinkedIn Profile ↗
            </a>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section id="news" className="section">
        <div className="grid-container">
          <div className="col-12 card">
            <h2>Latest News & Accolades (2026)</h2>
            <p style={{ marginTop: '1rem', color: '#c9d1d9' }}>
              <strong>Graymatics UK Marks Major Global Expansion:</strong> Selected for Grow London Global (Cohort 7) supported by the Mayor of London, 
              completed successful trade missions to Germany and Madrid, recognized as a Top 30 Finalist at Alibaba JUMPSTARTER 2026 in Hong Kong, 
              and awarded the Startup Welcome Package in Stuttgart, Germany.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section" style={{ background: '#161b22', textAlign: 'center' }}>
        <div className="grid-container" style={{ justifyContent: 'center' }}>
          <div className="col-8 card" style={{ margin: '0 auto' }}>
            <h2>Contact Us</h2>
            <p style={{ marginTop: '1rem', color: '#c9d1d9' }}>
              For inquiries or to learn more about our solutions, please contact Anuradha at:
            </p>
            <p style={{ marginTop: '1rem' }}>
              <a href="mailto:anuradha@graymatics.co.uk" style={{ color: '#58a6ff', fontSize: '1.2rem', fontWeight: 'bold' }}>
                anuradha@graymatics.co.uk
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2026 Graymatics UK Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}