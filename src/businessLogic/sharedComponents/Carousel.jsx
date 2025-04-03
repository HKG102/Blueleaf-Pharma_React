import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";  // Import Swiper React components
import "swiper/css";  // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";  // Import Swiper modules
import CarasouelImage from "../Data/CarasouelImage"; // Import your images

const Images = CarasouelImage.images.map((image)=>{
    return(<SwiperSlide key={image.id}>
        <img src={image.url} className="w-full h-full object-cover" alt={image.description} />
      </SwiperSlide>)
})

function Carousel() {

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Add modules
      navigation  // Enables navigation arrows
      pagination={{ clickable: true }} // Enables pagination (dots)
      autoplay={{ delay: 5000 }} // Auto-slide every 5s
      loop={true} // Infinite loop
      speed={1500}
      className="w-full h-full"
    >
        {Images}
    </Swiper>
  );
}

export default Carousel;

