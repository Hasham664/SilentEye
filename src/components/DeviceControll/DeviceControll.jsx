import React, { useState } from 'react'
import './DeviceControll.css';
import { phone } from '../../assets/phone';
import { Link } from 'react-router-dom';
const DeviceControll = () => {
  return (
    <>
      <div className='heading'>
        <h1>Even more Great Features</h1>
      </div>
      <div className='device container'>
        {phone.map((item, ind) => {
          return (
            <div
              className={`main-device ${ind % 2 === 1 ? 'reverse' : ''}`}
              key={ind}
            >
              <div className='text-device'>
                <h2>{item.header}</h2>
                <p className='para'>{item.para}</p>
                {item.list.map((pro, ind) => {
                  return (
                    <div className='device-flex' key={ind}>
                      <img src={pro.icon} alt='' />
                      <div className='text-flex'>
                        <h4>{pro.title}</h4>
                        <p>{pro.services}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className='phone-img'>
                <img src={item.image} alt='' />
              </div>
            </div>
          );
        })}
          <div className='btn'>
            <button>View More Features</button>
            <img src='/button.png' alt='' />
          </div>
      </div>
    </>
  );
}

export default DeviceControll