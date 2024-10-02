import React from 'react';
import './Hero.css';
const Hero = () => {
  return (
    <div className='back-color'>
      <div className='container '>
        <div className='hero-main '>
          <div className='hero-text'>
            <h2>Get Any Phone's Entire Access Instantly With Just Number</h2>
            <div className='choice'>
              <img src='/curcle-flag.png' alt='' />
              <h4>No. 1 Choice in USA</h4>
            </div>
            <p className='typ'>Type in the phone number you want to access.</p>
            <div className='input'>
              <div className='flag'>
                <img src='/american-flag.png' alt='' />
                <select>
                  <option value=''>+1</option>
                  <option value=''>+92</option>
                  <option value=''>+82</option>
                  <option value=''>+12</option>
                  <option value=''>+86</option>
                </select>
                <input type='text' placeholder='(555) 555-1234' />
              </div>
              <div className='inp-button'>
                <button>Access</button>
              </div>
            </div>
            <div className='person'>
              <img src='/person.png' alt='' />
              <p> 00000 People Gained Device Access Today!</p>
            </div>
            <div className='star'>
              <p className='spans'>
                Rated <span>Excellent </span>on <img src='/tru.png' alt='' />
                Based on <span> 456 reviews</span>
              </p>
            </div>
            <p className='para'>
              SilentEye is a robust spyware providing unrestricted access to any
              device worldwide through a phone number, no app installs or
              physical contact needed.
            </p>
          </div>
          <div className='hero-img'>
            <img src='/hero.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero