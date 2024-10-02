import React from 'react';
import './ContactInputs.css';
const ContactInputs = () => {
  return (
    <div className='contactinput'>
      <div className='container'>
        <div className='contacts-inp-grid'>
          <div className='contacts-inp-grid-one'>
            <h1>We’d love to hear from you</h1>
            <p>
              Whether you have a question about features, trials, pricing, need
              a demo, or anything else, our team is ready to answer all your
              questions
            </p>
            <img src='/men.png' alt='' />
          </div>
          <div className='contacts-inp-grid-two'>
            <h1>We are Happy To Help !</h1>
            <div className='contacts-inps'>
              <div className='contacts-flex-one-inps'>
                <div className='contacts-names-inps'>
                  <p>First Name</p>
                  <input type='text' placeholder='Enter Your First Name' />
                </div>
                <div className='contacts-names-inps'>
                  <p>Last Name</p>
                  <input type='text' placeholder='Enter Your Last Name' />
                </div>
              </div>
              <div className='contacts-flex-one-inps'>
                <div className='contacts-names-inps'>
                  <p>Email</p>
                  <input type='text' placeholder='Enter Your Mail ID' />
                </div>
                <div className='contacts-names-inps'>
                  <p>Contact Number</p>
                  <input type='text' placeholder='Enter Your Number' />
                </div>
              </div>
              <div className='sub-contact'>
                <p>Subject</p>
                <input type='text' placeholder='Enter Your Concern' />
              </div>
              <div className='message-cont'>
                <p>Message</p>
                <textarea
                  name=''
                  id=''
                  cols='30'
                  rows='5'
                  placeholder='Type your message here...'
                ></textarea>
              </div>
            </div>
            <div className='inps-cantact-btn'>
              <p>Send Message</p>
              <img src="/msg.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInputs;
