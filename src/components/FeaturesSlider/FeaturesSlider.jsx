import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './FeaturesSlider.css';
import { slides } from '../../assets/Slider';
const FeaturesSlider = () => {
  return (
    <div className='feature'>
      <h1>Most Used Features</h1>
      <div className='feature-color'>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
            1150: {
              slidesPerView: 4.2,
              spaceBetween: 20,
            },
          }}
        >
          {slides.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='box'>
                  <img src={item.image} alt='' />
                  <h3>{item.headin}</h3>
                  <p>{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturesSlider;
