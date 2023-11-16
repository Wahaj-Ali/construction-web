import React, { useEffect, useState } from 'react';
import logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import {AiOutlineDoubleRight} from 'react-icons/ai';
import './Navbar.css';

export const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    {
      name: 'About Us', url: '/about_us',
    },
    
    { url: '/services', name: 'Services' },
    { url: '/FAQs', name: 'FAQs' },
    {
      name: 'Contact Us', url: '/contact_us',
    },
    // { url: '/blogs', name: 'Blogs' },
  ].filter(Boolean);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    if (!isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-active');
    } else {
      document.body.classList.remove('mobile-menu-active');
    }
  };

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      document.body.classList.remove('mobile-menu-active');
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/" onClick={closeMobileMenu}><img src={logo} alt="Fully Constructed" /></Link>
        </div>
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span className="menu-icon">&#9776;</span>
        </div>
        <ul className={`nav-list ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map(({ url, name, submenu }) => (
            <li
              key={name}
              className={submenu ? 'nav-item dropdown' : 'nav-item'}
              onClick={closeMobileMenu}
            >
              <Link to={url}>{name}</Link>
              {isMobileView && <AiOutlineDoubleRight />}
            </li>
          ))}
          {isMobileView && (
            <li className="nav-item qBtn" onClick={closeMobileMenu}>
              <Link to="/get-a-quote"><button className='quote-btn mblMEnu'>Get a Quote</button></Link>
            </li>
          )}
        </ul>
        <Link to="/get-a-quote"><button className='quote-btn nav'>Get a Quote</button></Link>
      </div>
    </nav>
  );
}
