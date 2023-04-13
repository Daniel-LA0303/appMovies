import React from 'react'
import { Autoplay, Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css"
import CardMovie from '../../Cards/CardMovie/CardMovie';


const SliderPrincipal = ({data, delay}) => {
  return (
    <div className=''>
      <div className=' overflow-x-hidden swiperContainerBig my-5 mx-0'>
        <Swiper
            modules={[Pagination, Autoplay]}
            
            autoplay={{
              delay: delay,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            
            pagination={{
              el: ".pagination",
              // type: 'bullets',
              clickable: true,
            }}
            slidesPerView={3}
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
                  {/* <CardMovie /> */}
                  {item.poster_path == null ? 
                  <div className='hidden '>
                    Archivo no encontrado
                  </div> : (
                    <CardMovie 
                      item={item}
                    //   series={series}
                    />
                  )}

                </SwiperSlide>
            ))}
        </Swiper>
    </div>
    <div className="pagination" />
</div>
  )
}

export default SliderPrincipal