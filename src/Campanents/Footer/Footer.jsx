import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
       <div className="newsletter-container">
        <span className="newsletter-subtitle">Newsletter</span>
        <h2 className="newsletter-title">Subscribe To Our Newsletter</h2>
        <p className="newsletter-desc">And never miss latest Updates!</p>
        
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Email Address" 
            className="newsletter-input" 
            required
          />
          <button type="submit" className="newsletter-btn">Subscribe</button>
        </form>
      </div>

       <div className="container main-footer">
         <div className="footer-column">
          <h3>Contact Us</h3>
          <p>9 W 53rd St, London, NY 10019, UK</p>
          <p className="footer-phone">+1 212-344-1230</p>
          <p className="footer-phone">+1 212-555-1230</p>
        </div>

         <div className="footer-column footer-center">
           <img src="/src/assets/logo.png" alt="Eat Turkish Logo" className="footer-logo" />
          <p className="footer-quote">
            "The best way to find yourself is to lose yourself in the service of others."
          </p>
          <div className="footer-socials">
            <a href="#facebook" aria-label="Facebook"><span className="social-icon">f</span></a>
            <a href="#twitter" aria-label="Twitter"><span className="social-icon">t</span></a>
            <a href="#instagram" aria-label="Instagram"><span className="social-icon">i</span></a>
          </div>
        </div>

         <div className="footer-column">
          <h3>Working Hours</h3>
          <p>Monday-Friday:</p>
          <p className="footer-hours">08:00 am - 12:00 am</p>
          <p>Saturday-Sunday:</p>
          <p className="footer-hours">07:00 am - 11:00 pm</p>
        </div>
      </div>

       <div className="footer-copyright">
        <p>2026 Pop online. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;