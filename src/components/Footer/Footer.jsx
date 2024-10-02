import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div className='foter-line'>
        <div className='container'>
          <div className='main-grid-foter'>
            <div className='grid-1'>
              <div className='logo-fot'>
                <img src='./logo-eye.png' alt='' />
                <p>SilentEye App is designed for legal use only.</p>
              </div>
              <img src='./Approved1.png' alt='' />
              <div className='grid-1-flex'>
                <img src='./stop-foter.png' alt='' />
                <img src='./credit-foter.png' alt='' />
                <img src='./pic-foter.png' alt='' />
              </div>
            </div>
            <div className='grid-2'>
              <h2>Quick Links</h2>
              <div className='links'>
                <Link to='home'>
                  <a>Home</a>
                </Link>
                <Link to='features'>
                  {' '}
                  <a>About Us</a>
                </Link>

                <Link to='contact'>
                  {' '}
                  <a>Contact Us</a>
                </Link>
                <Link to='pricing'>
                  {' '}
                  <a>Pricing</a>
                </Link>
                <Link to='reviews'>
                  {' '}
                  <a>Reviews</a>
                </Link>

                <a>FAQs</a>
              </div>
            </div>
            <div className='grid-2'>
              <h2>Help & Policy</h2>
              <div className='links'>
                <a>Refund Policy</a>
                <a> Privacy Policy</a>
                <a>Terms & Conditions</a>
                <a>Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copy-foter'>
        <p>Copyright © 2024. SilentEye. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer