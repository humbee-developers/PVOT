import { useLocation } from "react-router-dom";
import relatedServicesData from "./relatedServicesData";
import RelatedServicesItem from "./RelatedServicesItem";
import "./relatedServices.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation } from "swiper/modules";
import arrowIcon from "../../images/relatedServicesSliderIcon.svg";
import { useState } from "react";

const RelatedServices = () => {
  const [resize, setResize] = useState(window.innerWidth);
  function checkWidthSize() {
    setResize(window.innerWidth);
  }
  let showCard = (resize < 767 ? 1 : resize < 991 ? 2 : 3) 
  window.addEventListener("resize", checkWidthSize);
  const location = useLocation();
  return (
    <div className="relatedServices">
      <div className="common_container">
        <div className="relatedServices_wrapper">
          <div className="relatedServices_heading_wrapper">
            <div className="relatedServices_heading">
              <h2>Related Services</h2>
            </div>
            <div className="relatedServices_slide_btn">
              <div className="relatedServices-next">
                <img src={arrowIcon} alt="arrow_right" />
              </div>
              <div className="relatedServices-prev">
                <img src={arrowIcon} alt="arrow_left" />
              </div>
            </div>
          </div>
          <Swiper
            grabCursor={true}
            centeredSlides={false}
            loop={true}
            // speed={1000}
            slidesPerView={showCard}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".relatedServices-next",
              prevEl: ".relatedServices-prev",
              disabledClass: "swiper-button-disabled",
            }}
            // autoplay={{ delay: 1500 }}
            className="relatedServices_slide"
          >
            {relatedServicesData.map((item, index) => {
              return (
                location.pathname !== item.link && (
                  <SwiperSlide key={index}>
                    <RelatedServicesItem
                      key={index}
                      title={item.title}
                      image={item.image}
                      link={item.link}
                    />
                  </SwiperSlide>
                )
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default RelatedServices;
