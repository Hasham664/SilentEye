import React from 'react'
import './Platform.css';
import { platformData } from '../../assets/PlatformData';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const Platform = () => {
  return (
    <div className='platform'>
      <h1>About Our Platform</h1>
      <div className='platform-flex'>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
          breakpoints={{
            824: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1124: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1250: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          }}
        >
          {platformData.map((item, ind) => {
            return (
              <SwiperSlide key={ind}>
                <div className='platform-map'>
                  <img src={item.icon} alt='' />
                  <h4>{item.title}</h4>
                  <p>{item.des}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Platform