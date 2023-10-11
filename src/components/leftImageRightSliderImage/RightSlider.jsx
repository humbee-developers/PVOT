import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation} from "swiper/modules";
import PropTypes from "prop-types";
import arrowIcon from "../../images/relatedServicesSliderIcon.svg";
import { useState } from "react";

const RightSlider = ({ text1, text2, title1, title2 }) => {
  const [current, setCurrent] = useState(1);
  console.log(current);

  return (
    <div className="rightSlider">
      <Swiper
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        // speed={1000}
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".rightSlider_next",
          prevEl: ".rightSlider_prev",
          // disabledClass: "swiper-button-disabled",
        }}
        onSlideChange={(index) => setCurrent(index.realIndex + 1)}
        // autoplay={{ delay: 1500 }}
        className="rightSlider_inner"
      >
        <SwiperSlide>
          <div className="rightSlider_wrapper">
            <div className="rightSlider_wrapper_title">{title1}</div>
            <div className="rightSlider_wrapper_content">{text1}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rightSlider_wrapper">
            <div className="rightSlider_wrapper_title">{title2}</div>
            <div className="rightSlider_wrapper_content">{text2}</div>
          </div>
        </SwiperSlide>
        <div className="rightSlider_wrapper_counter_and_btns">
          <div className="slider_counter">2 / {current}</div>
          <div className="rightSlider_btns">
            <div className="rightSlider_prev">
              <img src={arrowIcon} alt="arrowIcon" />
            </div>
            <div className="rightSlider_next">
              <img src={arrowIcon} alt="arrowIcon" />
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};
export default RightSlider;

RightSlider.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
