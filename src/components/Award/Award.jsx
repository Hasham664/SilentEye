import React from 'react'
import './Award.css'
import { Awards } from '../../assets/Awards'
const Award = () => {
  return (
    <div className="border-line-award">
    <div className='container'>
      <div className='award-text'>
        <h1>Awards & Recognitions</h1>
        <p>
          SilentEye has been recognized as one of the best MDM solutions out in
          the market today
        </p>
      </div>
      <div className='awards-main'>
        {Awards.map((column, ind) => (
          <div className='column' key={ind}>
            <div className='text-content'>
              <h3>{column.title}</h3>
              <p>{column.description}</p>
            </div>
            <div className='image-grid'>
              {column.images.map((image, index) => (
                <img src={image} alt={`Image ${index + 1}`} key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
  );
}

export default Award