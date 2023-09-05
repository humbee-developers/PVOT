import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Autoplay,
//   EffectCoverflow,
//   Pagination,
//   Navigation,
// } from "swiper/modules";
// import sliderImage from "../../images/slider_image1.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./services.css";
import ServicesCard from "./servicesCard/ServicesCard";

const Services = () => {
  return (
    <div className="services">
      <div className="services_wrapper">
        <div className="slider-container">
          <motion.h1
            className="service-text"
            initial={{ y: 500 }}
            animate={{ y: 1000 }}
            // transition={{
            //   duration: 0,
            //   delay: 1,
            // }}
            style={{ position: "sticky" }}
          >
            Services
          </motion.h1>

          {/* <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          
            autoplay={{ delay: 1500 }}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={sliderImage} alt="slide1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImage} alt="slide2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImage} alt="slide3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImage} alt="slide4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImage} alt="slide5" />
            </SwiperSlide>
          </Swiper> */}
          <ServicesCard />
        </div>
      </div>
    </div>
  );
};
export default Services;
