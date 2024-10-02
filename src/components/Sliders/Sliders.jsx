import React from 'react';
import './Sliders.css';
import { WithUs } from '../../assets/Withus';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';

const Sliders = () => {
  return (
    <div className='sliders'>
      <div className='sliders-btns'>
        <button className='without'>Without Us</button>
        <button className='with'>With Us</button>
      </div>
      <div className='n'>
        <Swiper
          slidesPerView={1.7}
          spaceBetween={20}
          freeMode={true}
          breakpoints={{
            660: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
            924: {
              slidesPerView: 4.2,
              spaceBetween: 20,
            },
            1150: {
              slidesPerView: 6.3,
              spaceBetween: 20,
            },
          }}
        >
          {WithUs.map((item, ind) => {
            return (
              <SwiperSlide key={ind}>
                <div className='slid-img'>
                  <img src={item.slide} alt='' />
                  <p>{item.title}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Sliders;
