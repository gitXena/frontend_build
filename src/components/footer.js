import React from "react";

const Footer = () => {
  return (
    <footer className="gg-footer">
      <div className="gg-container">

  
        <div className="gg-news-row">
          <h1 className="gg-news-title">Get The Latest<br />Updates</h1>
          <form className="gg-news-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="gg-input"
              placeholder="Enter your email"
              aria-label="Email address"
            />
            <button className="gg-btn" type="submit">Subscribe</button>
          </form>
        </div>

        <hr className="gg-divider" />

        {/* ===== Links + Brand ===== */}
        <div className="gg-links-row">
          <div className="gg-col">
            <h4 className="gg-col-title">Services</h4>
            <ul className="gg-list">
              <li><a className="gg-link">Outdoor Living</a></li>
              <li><a className="gg-link">Pools</a></li>
              <li><a className="gg-link">Hardscaping</a></li>
              <li><a className="gg-link">Patios</a></li>
              <li><a className="gg-link">Outdoor Kitchens</a></li>
            </ul>
          </div>

          <div className="gg-col">
            <h4 className="gg-col-title">About Us</h4>
            <ul className="gg-list">
              <li><a className="gg-link active" href="/">Home</a></li>
              <li><a className="gg-link" href="#">Projects</a></li>
              <li><a className="gg-link" href="#">Plants List</a></li>
              <li><a className="gg-link" href="/about">About Us</a></li>
              <li><a className="gg-link" href="/blog">Blog</a></li>
            </ul>
          </div>

          <div className="gg-col">
            <h4 className="gg-col-title">Resource</h4>
            <ul className="gg-list">
              <li><a className="gg-link" href="/contact">Contact Us</a></li>
              <li><a className="gg-link">Terms</a></li>
              <li><a className="gg-link">Policy</a></li>
              <li><a className="gg-link" href="payment">Payments</a></li>
            </ul>
          </div>

          {/* Brand block */}
          <div className="gg-brand">
            <div className="gg-logo">
              <img src="/images/Footer/garden-gems-logo.svg"/>
      
              <span className="gg-logo-text">
                <span>Garden</span><br />
                <strong>Gems</strong>
              </span>
            </div>

            <div className="gg-call">
              <small>Book Online Or Call</small>
              <p className="gg-phone">(000) 000 - 0000</p>
            </div>
          </div>
        </div>

        {/* ===== Meta row ===== */}
        <div className="gg-meta-row">
          <div className="gg-meta">
            <span className="gg-circle-icon" aria-hidden="true">📧</span>
            <div>
              <small className="gg-meta-label">Email Us:</small>
              <div className="gg-meta-value">uvesmursalin3@gmail.com</div>
            </div>
          </div>

          <div className="gg-meta">
            <span className="gg-circle-icon" aria-hidden="true">⏰</span>
            <div>
              <small className="gg-meta-label">Mon To Sun:</small>
              <div className="gg-meta-value">10:00 AM To 6:00 PM</div>
            </div>
          </div>

          <div className="gg-socials">
            <img src="/images/Footer/twitter.svg" alt="icon" className="gg-social"/>
            <img src="/images/Footer/linkedln.svg" alt="icon"  className="gg-social"/>
            <img src="/images/Footer/facebook.svg" alt="icon"  className="gg-social" />
            <img src="/images/Footer/instagram.svg" alt="icon"   className="gg-social" />


          </div>
        </div>
        <hr className="gg-divider" />
           <div className="gg-meta-row">
        <p className="gg-copy">Copyright @ 2023 Webtechsolution.in,All Rights reserved.</p>
        <p className="gg-privacy">Privacy Policy | Terms & Conditions | Cookie</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
