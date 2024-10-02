import React from 'react';
import './LoginSec.css';
const LoginSec = () => {
  return (
    <div className='loginsec'>
      <div className='loginsec-grid'>
        <div className='loginsec-grid-one'>
          <img src='/login-phone.png' alt='' />
        </div>
        <div className='loginsec-grid-two'>
          <h1>Login to SilentEye</h1>
          <p className='welcom'>Welcome Back 👋</p>
          <div className='loginsec-inps'>
            <div className='emails-login'>
              <p>Email</p>
              <div className='email-login'>
                <img src='/login-mail.png' alt='' />
                <input
                  email='email'
                  placeholder='Enter Your Mail ID' required
                />
              </div>
            </div>
            <div className='password-login'>
              <p>Password</p>
              <div className='email-login'>
                <img src='/login-lock.png' alt='' />
                <input
                  password='password'
                  placeholder='Enter Your Password'
                  required
                />
              </div>
            </div>
          </div>
          <div className='login-remember'>
            <input type='checkbox' name='' id='' re/>
            <p>Remember Me</p>
          </div>
          <div className='login-btn'>
            <button>Login</button>
            <img src='/login-arrow.png' alt='' />
          </div>
          <div className='login-acc'>
            <p>
              Don’ have an account? <span>Purchase Plan</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSec;
