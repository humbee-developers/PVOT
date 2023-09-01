import TestimonialSlider from "./testimonialSlider/TestimonialSlider";
import TestimonialText from "./testimonialText/TestimonialText";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial_container">
        <div className="testimonial_wrapper">
          <TestimonialText />
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
