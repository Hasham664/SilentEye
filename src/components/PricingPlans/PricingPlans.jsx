import React from 'react';
import './PricingPlans.css';
const PricingPlans = () => {
  return (
    <div className='pric-plan-one'>
      <div className='container'>
        <div className='pric-sec-one'>
          <h1>We’ve got a pricing plan that’s perfect for you</h1>
          <p>
            Explore our pricing options and choose the plan that suits you best
          </p>
          <div className='star'>
            <p className='spans'>
              Rated <span>Excellent </span>on <img src='/tru.png' alt='' />
              Based on <span> 456 reviews</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
