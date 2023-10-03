import { Swiper, SwiperSlide } from "swiper/react";
import client1 from "../../../images/Rectangle8.png";
import "./testimonialSlider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation } from "swiper/modules";
import rightArrow from "../../../images/ArrowRight.svg";
import quote from "../../../images/quotes.svg";

const TestimonialSlider = () => {
  return (
    <div className="testimonial_slider">
      <div className="testimonial_slider_wrapper">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          speed={1000}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
            autoplay={{ delay: 1500 }}
          className="testimonial_swiper_slider"
        >
          <SwiperSlide>
            <div className="testimonial_slide">
              <div className="testimonial_slide_heading_sec">
                <h3 className="testimonial_slider_heading">
                  <img src={quote} alt="quate" />
                  Their attention to detail is unmatched. They took the time to understand
                  our brand, and it paid off in the results.
                </h3>
              </div>
              <div className="testimonial_slider_client">
                <div className="testimonial_slider_client_image">
                  <img src={client1} alt="client" />
                </div>
                <div className="testimonial_slider_client_data">
                  <div className="testimonial_slider_client_name">
                    Jackson Martinez
                  </div>
                  <div className="testimonial_slider_client_content">
                    Founder & CEO, Visia
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial_slide">
              <div className="testimonial_slide_heading_sec">
                <h3 className="testimonial_slider_heading">
                  <img src={quote} alt="quate" />
                  PVOT doesn't just create websites; they craft digital masterpieces. Our
                  brand's online presence has never been more captivating.
                </h3>
              </div>
              <div className="testimonial_slider_client">
                <div className="testimonial_slider_client_image">
                  <img src={client1} alt="client" />
                </div>
                <div className="testimonial_slider_client_data">
                  <div className="testimonial_slider_client_name">
                    Jackson Martinez
                  </div>
                  <div className="testimonial_slider_client_content">
                    Founder & CEO, Visia
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial_slide">
              <div className="testimonial_slide_heading_sec">
                <h3 className="testimonial_slider_heading">
                  <img src={quote} alt="quate" />
                  PVOT focuses on the end-user and helps improve retention. They excel in
                  user experience and big-picture thinking.
                </h3>
              </div>
              <div className="testimonial_slider_client">
                <div className="testimonial_slider_client_image">
                  <img src={client1} alt="client" />
                </div>
                <div className="testimonial_slider_client_data">
                  <div className="testimonial_slider_client_name">
                    Jackson Martinez
                  </div>
                  <div className="testimonial_slider_client_content">
                    Founder & CEO, Visia
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-button image-swiper-button-next nextBtn">
            <img src={rightArrow} alt="rightArrow" />
          </div>
          <div className="swiper-button image-swiper-button-prev prevBtn">
            <img src={rightArrow} alt="rightArrow" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
