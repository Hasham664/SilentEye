import React from 'react';
import DeviceControll from '../../components/DeviceControll/DeviceControll';
import Icons from '../../components/Icons/Icons';
import './Feature.css';
const Feature = () => {
  return (
    <>
    <div className="feat-botom">
      <div className='container'>
        <div className='featur-text'>
          <h1>SilentEye Features</h1>
          <p>
            SilentEye is the only monitoring app that you’ll ever need. Why?
            Just because we’ve developed it with you in mind. You deserve to
            know it all and now you can.
          </p>
          <div className='btns-fea'>
            <button className='try'>Try Now</button>
            <div className='flex-btton'>
              <img src='./video.png' alt='' />
              <button>View Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <DeviceControll />
      <div className='feat-icons'>
        <Icons />
      </div>
    </>
  );
};

export default Feature;
