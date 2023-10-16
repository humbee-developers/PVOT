import { motion } from "framer-motion";
import RectangleCard from "../../../Common/RectangleCard";
import HeroHeading from "../Desktop6/HeroHeading/HeroHeading";
import Mask from "../../images/Mask group.png";
import ServicesPageCard from "../../components/services/servicesPageCards/ServicesPageCards";

const ServicesPage = () => {
  return (
    <div>
      <div className="" style={{ backgroundColor: "black" }}>
        <HeroHeading bigHeading="Services" hoverText={"Our Servicessss-"} />
        <ServicesPageCard />
        <RectangleCard title="Website Design" />
      </div>
      <div
        style={{ width: "100%", overflow: "hidden", backgroundColor: "black" }}
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 26,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            width: "auto",
            height: "200px",
            backgroundColor: "black",
            display: "flex",
          }}
        >
          <img
            src={Mask}
            alt="Moving Image"
            style={{ width: "auto", height: "100%" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
