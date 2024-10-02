import React from 'react'
import './ContactUs.css'
import { Contactdata } from '../../assets/ContactsData';
const ContactUs = () => {
  return (
    <div className='contact-us'>
      <div className='container'>
        <div className='contact-us-text'>
          <h1>Contact Us</h1>
          <p>
            We are here to help and answer any questions you might have. Here is
            how you can reach us.
          </p>
          <button>Contact Us</button>
        </div>
        <div className="contacs-main-flex">
            {
                Contactdata.map((item,ind)=>{
                    return(
                        <div className='contactdata-flex'>
                            <img src={item.icon} alt="" />
                            <div className="contactdata-map-text">
                                <h4>{item.heads}</h4>
                                <p> {item.des} </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
}

export default ContactUs