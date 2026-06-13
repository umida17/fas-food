import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../../assets/Frame 64(1).png';

const Navbar = () => {
 
    const navLinks = [
    { path: '/menu', label: 'Menu' },
    { path: '/news', label: 'News' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="header">
      <div className="container header-container">
         <Link to="/" className="logo-link">
          <img src={logo} alt="Eat Turkish Logo" className="logo-img" />
        </Link>

         <nav className="nav-menu">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            
             <li className="nav-item">
              <Link to="/login" className="login-btn">
                Log in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;