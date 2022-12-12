import React,{useState, useEffect} from "react";
import styles from "./styles.module.scss";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import Card from "../components/card/card";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";


function LandingPage(props) {
    const [value, setValue]= useState('');
    const [movies, setMovies] = useState([]);


  
 useEffect(() => {
  async function getMovie() {
    const result = await axios.get('http://jsonplaceholder.typicode.com/albums');
    setMovies(result.data);
    console.log(result.data); 
  }
  getMovie();
}, []);




    // console.log(movies.filter(movie=>movie.movieName.toLowerCase().includes(value)));
  return (
    <div className={styles.body}>
      <div className={styles.upper_side}>
        <div className={styles.header}>
          <p className={styles.para1}> MyTestApp </p>
        </div>
        <div className={styles.banner}>
          <p className={styles.para2}>Watch something incredible</p>
        </div>
      </div>

      <div className="container">
        <div className="form">
          <FormControl>
            <FormLabel className={styles.para3}>Search</FormLabel>
            <Input type="text" onChange={(e)=>setValue(e.target.value)} />
          </FormControl>
        </div>
        <div className="swiper">


                {/* sweeps */}
              <p className={styles.para4}>Comedy</p>

                <Swiper
       breakpoints={{
         320:{
          width:320,
          slidesPerView:1.51,
          spaceBetween:10, 
         },
          640: {
            width: 640,
            slidesPerView: 3.05,
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
        // scrollbar={{ draggable: true }}
        speed={500}
        initialSlide={3}
       
        
      >
          <div>
            {movies.filter((movie)=>(movie.title.toLocaleLowerCase().includes(value)))
            .map(movie=>(
                <SwiperSlide key={movie.id}>
                    <Card data={movie.title}/>
                </SwiperSlide>
                      ))}
          </div>
        

           
        
      </Swiper>
                {/* sweeps */}
              <p className={styles.para4}>Action</p>

                <Swiper
       breakpoints={{
         320:{
          width:320,
          slidesPerView:1.51,
          spaceBetween:10, 
         },
          640: {
            width: 640,
            slidesPerView: 3.65,
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
        speed={500}
        initialSlide={3}
       
        
      >
          <div>
            {movies.filter((movie)=>(movie.title.toLocaleLowerCase().includes(value)))
            .map(movie=>(
                <SwiperSlide key={movie.id}>
                    <Card data={movie.title}/>
                </SwiperSlide>
                      ))}
          </div>
        

           
        
      </Swiper>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
