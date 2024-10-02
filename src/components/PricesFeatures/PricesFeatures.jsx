import React from 'react';
import './PricesFeatures.css';
import { Pricesfeature } from '../../assets/Pricesfeature';
const PricesFeatures = () => {
  return (
    <div className='pricesFeature'>
      <div className='container'>
        <div className='pricesFeature-flex'>
          <h5>Included Features</h5>
          {Pricesfeature.map((item, ind) => {
            return (
              <div className='main-pricesFeature-flex'>
                <div>
                  <img src={item.icon} alt='' />
                </div>
                <div className='pricesFeature-text'>
                  <h4>{item.head}</h4>
                  <p>{item.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricesFeatures;
