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


const options = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/title/find',
  params: {q: 'game of thr'},
  headers: {
    'X-RapidAPI-Key': '0a46156023mshc11410caa674925p11bb2bjsn13510e42b370',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  }
};


useEffect(() => {
  
  axios.request(options).then(function (response) {
    setMovies(response.data.results);
  }).catch(function (error) {
    console.error(error);
  });
     
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
            <Input className="inp" type="text" onChange={(e)=>setValue(e.target.value)} />
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
             
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
