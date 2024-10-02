import React from 'react'
import './PricingBoxes.css';
import { PricingPlans } from '../../assets/PricingPlans';
const PricingBoxes = () => {
  return (
    <div className='prices-plans'>
      <div className='container'>
        <div className='pric-texts'>
          <h1>Pricing Plans</h1>
          <div className='main-flexes'>
            <div className='prices-flex'>
              <div className='prices-icon-green1'>
                <img src='/green-icon.png' alt='' />
              </div>
              <div className='prices-flex-text'>
                <h4>30-Day Money Back Guarantee</h4>
                <p>No Questions Asked.</p>
              </div>
            </div>
            <div className='prices-flex2'>
              <div className='prices-icon-green'>
                <img src='/red-icon.png' alt='' />
                <h4>Don’t wait ! Discounts Ends in 00:15:00</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="pric-box-map">
            {
                PricingPlans.map((item,ind)=>{
                    return (
                      <div>
                        <div className='main-map'>
                          <div
                            className={`flex-stars ${
                              ind % 3 === 2 ? 'back-color-most' : ''
                            }`}
                          >
                            <p>{item.most}</p>
                            <img src={item.pic} alt='' />
                          </div>
                          <div className='sid-pad'>
                            <div className='heading-price'>
                              <div
                                className={`flex-prices-1 ${
                                  ind % 2 === 1 ? 'off' : ''
                                }`}
                              >
                                <img src={item.img} alt='' />
                                <h1>{item.heading}</h1>
                                <p>{item.off}</p>
                              </div>
                              <div className='radio-price'>
                                <input type='radio' name='' id='' />
                              </div>
                            </div>
                            <p className='pric-dec-map'>{item.descri}</p>
                            <div className='prices-map'>
                              <p className='old-pric-ha'>{item.oldPrice}</p>
                              <div className='pricflex-old'>
                                <p className='nopr'>{item.noPrice}</p>
                                <h4>{item.newPrice}</h4>
                              </div>
                            </div>
                            <button>{item.buton}</button>
                          </div>
                        </div>
                      </div>
                    );
                })
            }
        </div>
      </div>
    </div>
  );
}

export default PricingBoxes