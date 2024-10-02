import React from 'react'
import './Reviews.css';
import Platform from '../../components/Platform/Platform';
import ReviewsNumbers from '../../components/ReviewsNumbers/ReviewsNumbers';
import Award from '../../components/Award/Award';
import TryNow from '../../components/TryNow/TryNow';
const Reviews = () => {
  return (
    <div className='reviews-page-main'>
      <div className="reviews-page">
      <Platform />
      </div>
      <ReviewsNumbers/>
      <TryNow/>
      <Award/>
    </div>
  );
}

export default Reviews