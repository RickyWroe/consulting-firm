import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          APEX
        </Link>

        <nav className="header__nav">
          <Link 
            to="/" 
            className={`header__nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`header__nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`header__nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact
          </Link>
        </nav>

        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <Link 
          to="/" 
          className="mobile-nav__link"
          onClick={closeMobileMenu}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="mobile-nav__link"
          onClick={closeMobileMenu}
        >
          About
        </Link>
        <Link 
          to="/contact" 
          className="mobile-nav__link"
          onClick={closeMobileMenu}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
