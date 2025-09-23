// AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-container">
        <div className="about-us-content">
          <h1 className="about-us-title">About Us</h1>
          <p className="about-us-description">
            At Reliable Handyman Services, we're your trusted partners for all home repair and maintenance needs. 
            With over 15 years of experience in the industry, our team of skilled professionals is dedicated to 
            delivering high-quality workmanship that stands the test of time. We believe in transparency, 
            reliability, and customer satisfaction above all else.
          </p>
          <div className="about-us-features">
            <div className="feature-item">
              <h3>Experienced Team</h3>
              <p>Our certified handymen bring expertise to every job, from plumbing to electrical work.</p>
            </div>
            <div className="feature-item">
              <h3>Quality Guarantee</h3>
              <p>We stand by our work with a satisfaction guarantee and use only the best materials.</p>
            </div>
            <div className="feature-item">
              <h3>Local & Reliable</h3>
              <p>Serving your community with prompt service and fair pricing.</p>
            </div>
          </div>
          <p className="about-us-mission">
            Our mission is to make homeownership hassle-free. Whether it's a small fix or a major renovation, 
            we're here to help you create a safer, more comfortable living space.
          </p>
        </div>
        <div className="about-us-image-placeholder">
          {/* Placeholder for an image; replace with actual <img> tag */}
          <div className="image-placeholder-content">
          <img src="/images/istockphoto-1346125184-612x612.jpg"></img>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;