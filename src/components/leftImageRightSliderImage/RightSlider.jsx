import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation } from "swiper/modules";
import PropTypes from "prop-types";
import arrowIcon from "../../images/relatedServicesSliderIcon.svg";
import { useState } from "react";

const RightSlider = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
}) => {
  const [current, setCurrent] = useState(1);
  const [totalSlide, setTotalSlide] = useState();
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
        onBeforeInit={(index) =>
          setTotalSlide(
            index.wrapperEl.querySelectorAll(".swiper-slide").length
          )
        }
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
        {title3 && text3 !== "" && (
          <SwiperSlide>
            <div className="rightSlider_wrapper">
              <div className="rightSlider_wrapper_title">{title3}</div>
              <div className="rightSlider_wrapper_content">{text3}</div>
            </div>
          </SwiperSlide>
        )}
        {title4 && text4 !== "" && (
          <SwiperSlide>
            <div className="rightSlider_wrapper">
              <div className="rightSlider_wrapper_title">{title4}</div>
              <div className="rightSlider_wrapper_content">{text4}</div>
            </div>
          </SwiperSlide>
        )}
        {title5 && text5 !== "" && (
          <SwiperSlide>
            <div className="rightSlider_wrapper">
              <div className="rightSlider_wrapper_title">{title5}</div>
              <div className="rightSlider_wrapper_content">{text5}</div>
            </div>
          </SwiperSlide>
        )}
        {title6 && text6 !== "" && (
          <SwiperSlide>
            <div className="rightSlider_wrapper">
              <div className="rightSlider_wrapper_title">{title6}</div>
              <div className="rightSlider_wrapper_content">{text6}</div>
            </div>
          </SwiperSlide>
        )}
        <div className="rightSlider_wrapper_counter_and_btns">
          <div className="slider_counter">
            {current}/{totalSlide}
          </div>
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
  title3: PropTypes.string,
  title4: PropTypes.string,
  title5: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
};
