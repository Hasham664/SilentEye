import React from 'react'
import './ReviewsNumbers.css';
const ReviewsNumbers = () => {
  return (
    <div className='reveiw-numbers'>
      <div className='container'>
        <div className='review-num-text'>
          <h1>Numbers that showcase our success</h1>
          <p>
            Technology is always changing. That’s why we’re always focused on
            what’s next and helping you stay one step ahead.
          </p>
        </div>
        <div className='review-boxes'>
          <div className='rev-box-one'>
            <img src='/person.icon.png' alt='' />
            <h5>1.5M+</h5>
            <p>Satisfied Users</p>
          </div>
          <div className='rev-box-two'>
            <img src='/goal-icon.png' alt='' />
            <h5>180</h5>
            <p>Countries</p>
          </div>
          <div className='rev-box-three'>
            <img src='/cal-icon.png' alt='' />
            <h5>100+</h5>
            <p>Employees</p>
          </div>
          <div className='rev-box-four'>
            <img src='/smile-icon.png' alt='' />
            <h5>1.5M+</h5>
            <p>Satisfied Users</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsNumbers