import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./serviceScrollSlider.css";
import { useEffect, useRef } from "react";
import sliderImage from "../../images/slider_image1.png";
import "./serviceScrollSlider.css";

const ServicesScrollSlider = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  //   const ref3 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref1.current,
        start: "top center-=200px",
        end: "bottom+=3000px center-=200px",
        scrub: true,
        pin: true,
      },
    });

    tl.to(ref2.current, {
      duration: 20,
      rotateY: -300,
      ease: "none",
    });
    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".servicesText",
    //     start: "120px",
    //     end: "500px",
    //     scrub: true,
    //     pin: true,
    //   },
    // });

    // tl.fromTo(
    //   ref3.current,
    //   { y: 100, translateY: 20 },
    //   { y: -150, translateY: -100 }
    // );
  }, []);

  return (
    <div className="servicesCard">
      <div className="work2">
        <div className="gallery_box" ref={ref1}>
          <div
            className="servicesText"
            style={{ color: "white", textAlign: "center" }}
          >
            <h2>Services</h2>
          </div>
          <div className="gallery_box_outer" ref={ref2}>
            <div className="gallery_box_in">
              <img src={sliderImage} alt="sliderImage" />
            </div>
            <div className="gallery_box_in">
              <img src={sliderImage} alt="sliderImage" />
            </div>
            <div className="gallery_box_in">
              <img src={sliderImage} alt="sliderImage" />
            </div>
            <div className="gallery_box_in">
              <img src={sliderImage} alt="sliderImage" />
            </div>
            <div className="gallery_box_in">
              <img src={sliderImage} alt="sliderImage" />
            </div>
            <div className="gallery_box_in">
              <img src={sliderImage} alt="sliderImage" />
            </div>
            {/* <div className="gallery_box_in">
              <img src={sliderImage} alt="sliderImage" />
            </div>
            <div className="gallery_box_in">
              {" "}
              <img src={sliderImage} alt="sliderImage" />
            </div>
            <div className="gallery_box_in">
              {" "}
              <img src={sliderImage} alt="sliderImage" />
            </div> */}
          </div>
        </div>
      </div>
      <div className="services_card_mobile">
        <div
          className="servicesText_mobile"
          style={{ color: "white", textAlign: "center" }}
        >
          <h2>Services</h2>
        </div>

        <div className="servicesCard_wrapper_mobile">
          <img src={sliderImage} alt="slide1" />
          <img src={sliderImage} alt="slide1" />
          <img src={sliderImage} alt="slide1" />
          <img src={sliderImage} alt="slide1" />
          <img src={sliderImage} alt="slide1" />
          <img src={sliderImage} alt="slide1" />
        </div>
      </div>
    </div>
  );
};
export default ServicesScrollSlider;
