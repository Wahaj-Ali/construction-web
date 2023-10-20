import React, { useEffect, useState } from 'react';
// import logo from '../../assets/logomin.png';
import { Link } from 'react-router-dom';
import {AiOutlineDoubleRight} from 'react-icons/ai';
import './Navbar.css';

export const Navbar = () => {

  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    // { url: '/', name: 'Home' },
    
    {
      name: 'Insurance Services',
      url: '/insurance_services',
      submenu: [
        { url: '/insurance_services/auto', name: 'Auto Insurance' },
        { url: '/insurance_services/home', name: 'Home Insurance' },
        { url: '/insurance_services/medical', name: 'Medical Insurance' },
        { url: '/insurance_services/business', name: 'Business Insurance' },
        // Add more submenu items as needed
      ],
    },
    { url: '/insurance_carriers', name: 'Insurance Carriers' },
    { url: '/contact_us', name: 'Contact Us' },
    { url: '/FAQs', name: 'FAQs' },
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

  // const closeMobileMenu = () => {
  //   setIsMobileMenuOpen(false);
  // };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          {/* <Link to="/"><img src={logo} alt="Logo" /></Link> */}
          <p>Logo</p>
        </div>
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span className="menu-icon">&#9776;</span>
        </div>
        <ul className={`nav-list ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map(({ url, name, submenu }) => (
            <li
              key={name}
              className={submenu ? 'nav-item dropdown' : 'nav-item'}
            >
              <Link to={url}>{name}</Link>
              {isMobileView && <AiOutlineDoubleRight />}
              {/* {submenu && (
                <ul className="dropdown-menu">
                  {submenu.map(({ url: subUrl, name: subName }) => (
                    <li key={subName}>
                      <Link to={subUrl} onClick={closeMobileMenu}>{subName}</Link>
                    </li>
                  ))}
                </ul>
              )} */}
            </li>
          ))}
          {isMobileView && (
            <li className="nav-item qBtn">
              <Link to="/get_a_quote"><button className='quote-btn mblMEnu'>Get a Quote</button></Link>
            </li>
          )}
        </ul>
        <Link to="/get_a_quote"><button className='quote-btn nav'>Get a Quote</button></Link>
      </div>
    </nav>
  );
}
