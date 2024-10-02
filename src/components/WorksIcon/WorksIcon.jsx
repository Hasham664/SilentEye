import React from 'react';
import './WorksIcon.css';
import { Works } from '../../assets/Works';
const WorksIcon = () => {
  return (
    <div className="work-bottom">
    <div className='works'>
      <div className='container'>
        <h1 className='head'>How It Works</h1>
        <div className='work-grid'>
          {Works.map((item, ind) => {
            return (
              <div className='main-work-box'>
                <div className='work-box'>
                  <img src={item.img} alt='' />
                </div>
                <p>{item.des}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
          </div>
  );
};

export default WorksIcon;
