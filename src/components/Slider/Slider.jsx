import React, {useState} from 'react';

import { Autoplay, Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css"

import "./Slider.css"

import Card from './Card';
const Slider = ({data, delay}) => {

  /*
  props
  1.  items (movies, series, etc)
  2. delay
   */

    return (  
        <div className=''>

            <div className=''>
                <div className=' overflow-x-hidden swiperContainer my-5'>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        
                        autoplay={{
                          delay: delay,
                          disableOnInteraction: false
                        }}
                        
                        pagination={{
                          el: ".pagination",
                          // type: 'bullets',
                          clickable: true,
                        }}
                        slidesPerView={4}
                        breakpoints={{
                          "@0.00": {
                            slidesPerView: 'auto',
                            spaceBetween: 30,
                          },
                          "@0.50": {
                            slidesPerView: 'auto',
                            spaceBetween: 30,
                          },
                          "@1.00": {
                            slidesPerView: 'auto',
                            spaceBetween: 30,
                          },
                          "@1.25": {
                            slidesPerView: 'auto',
                            spaceBetween: 30,
                          },
                          "@1.50": {
                            slidesPerView: 'auto',
                            spaceBetween: 30,
                          },
                          "@1.75": {
                            slidesPerView: 'auto',
                            spaceBetween: 30,
                          },
                        }}
                        // loop={true}
                    >
                        {data.map(item => (
                            <SwiperSlide
                                key={item.id}
                                
                            >
                                <Card 
                                    item={item}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="pagination" />
            </div>
        </div>
    );
}
 
export default Slider;