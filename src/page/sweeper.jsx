import React from 'react';

import Card from "../components/card/card";
import {movies} from './util';
import styles from "./styles.module.scss";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";


function Sweeper(props) {
    return (
        <div>
              {/* sweeps */}
                <Swiper
       breakpoints={{
         320:{
          width:320,
          slidesPerView:1.05,
          spaceBetween:10,
          

          
         },
          640: {
            width: 640,
            slidesPerView: 3,
            spaceBetween:0,
           

          },
         
          768: {
            width: 768,
            slidesPerView:2,
            spaceBetween:10,
         

          },
        }}
        modules={[Navigation, Scrollbar]}
        spaceBetween={0}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        speed={500}
        initialSlide={3}
       
        
      >
          <div>
                      {movies.map(movie=>(
                <SwiperSlide>
                    <Card data={movie.movieName}/>
                </SwiperSlide>
                      ))}
          </div>        
      </Swiper>
        </div>
    );
}

export default Sweeper;