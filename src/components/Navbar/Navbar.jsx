import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='navbar'>
      <ul className={isMobileMenuOpen ? 'nav-links-mobile' : 'nav-links'}>
        <Link to='home'>
          <li>Home</li>
        </Link>
        <Link to='features'>
          <li>Features</li>
        </Link>
        <Link to='pricing'>
          <li>Pricing</li>
        </Link>
        <Link to='reviews'>
          <li>Reviews</li>
        </Link>
        <Link to='contact'>
          <li>Contact</li>
        </Link>
        <li className='phone'>
          <div className='phone-login'>
            <img src='/eye.png' alt='' />
            <h4>Try Demo</h4>
          </div>
        </li>
        <li className='phone'>
          <Link to='login'>
            <div className='phone-login'>
              <img src='/arrow.png' alt='' />
              <h4>Login</h4>
            </div>
          </Link>
        </li>
      </ul>
      <div className='logo'>
        <img src='/logo.png' alt='' />
      </div>
      <div className='btns'>
        <img src='/demo.png' alt='' />
        <Link to='login'>
          <button className='login'>Login</button>
        </Link>
        <button className='demo'>Try Demo</button>
      </div>
      <div className='hamburger' onClick={handleMenuToggle}>
        {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
