import React from "react";
import { useNavigate,} from "react-router-dom";

function Hero() {

    const handleSubmit = (event) => {
    event.preventDefault();
    alert('Schedule sent!');
  };

    const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container hero-container">
        
        <div className="hero-text">
          <h1>Handyman & Remodeling Services</h1>
          <p>
            This is an eco-friendly services providing 
            reliable, green-focused handyman solutions
            for all your home needs.
          </p>
          <button onClick={() => navigate("/booking")}>Book Your Shedule</button>
        </div>

    
        <div className="hero-image">
      
        </div>

      
        <div className="hero-form shadow">
          <h3>Pick the Services you Want</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <select>
              <option>Services type</option>
              <option>Furniture Assembly</option>
              <option >Gutter Cleaning</option>
              <option >Home Repairs</option>
              <option >Painting</option>
              <option >Plumbing</option>
              <option >House Siding</option>
              <option >Carpentry</option>
              <option >Electrical</option>
              <option >Outdoor Living</option>
              <option >Pools</option>
              <option >Hardscaping</option>
              <option >Patios</option>
              <option >Outdoor Kitchens</option>
            </select>
            <button type="submit" className="btn btn-secondary">
              Get Schedule
            </button>
            
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;



