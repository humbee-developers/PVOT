import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "./services.css";
import ServicesCard from "./servicesCard/ServicesCard";

const Services = () => {
  return (
    <div className="services">
      {/* <div className="services_wrapper"> */}
        {/* <div className="slider-container"> */}
          {/* <motion.h1
            className="service-text"
            initial={{ y: 400 }}
            animate={{ y: 800 }}
            // transition={{
            //   duration: 0,
            //   delay: 1,
            // }}
            style={{ position: "sticky" }}
          >
            Services
          </motion.h1> */}
          <ServicesCard />
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};
export default Services;
