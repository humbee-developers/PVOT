import { motion } from "framer-motion";
import RectangleCard from "../../../Common/RectangleCard";
import CoCard from "../../../Common/CoCard";
import HeroHeading from "../Desktop6/HeroHeading/HeroHeading";
import Mask from "../../images/Mask group.png";
import ServicesPageCardItem from "./ServicesPageCardItem";
import { useState } from "react";
import hoverImage from "../../images/i2.webp"
import { Link } from "react-router-dom"; 

const servicesPageCardContent = [
  {
    title: "Integrated Marketing Solutions",
    src: "c2montreal.png",
    // color: "#000000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque.",
      image:hoverImage,
      link: "/integrated-Marketing",
  },
  {
    title: "Digital Content Creation & SEO",
    src: "c2montreal.png",
    // color: "#000000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque.",
      image:hoverImage,
      link: "/digital-Content",
  },
  {
    title: "Digital & Performance Marketing",
    src: "officestudio.png",
    // color: "#8C8C8C",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque.",
      image:hoverImage,
      link :"/digital-performance"
      
  },
  {
    title: "Video Production and Photography",
    src: "locomotive.png",
    // color: "#EFE8D3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque.",
      link:"/Video-production",
  },
  {
    title: "Technology and Design",
    src: "silencio.png",
    // color: "#706D63",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque.",
      link:"/Technology",
  },
  {
    title: "Branding & Advertising",
    src: "silencio.png",
    // color: "#706D63",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque.",
      link:"/branding-advertising",
  },
  {
    title: "Media Planning and Buying",
    src: "silencio.png",
    // color: "#706D63",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque.",
      link:"/media-planning",
  },
  {
    title: "E-commerce Strategy and Execution",
    src: "silencio.png",
    // color: "#706D63",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque.",
      link:"/e-commerce",
  },
];

const ServicesPage = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div>
      <div className="" style={{ backgroundColor: "black" }}>
        <HeroHeading bigHeading="Services" hoverText={"Our Servicessss-"} />
        <div className={"servicesPageCard"}>
          <div className={"servicesPageCard_wrapper"}>
            {servicesPageCardContent.map((project, index) => {
              return (
                <Link
                  to={project.link || "/"} // Use the link from the card or "/" as a fallback
                  key={index}
                >
                  <ServicesPageCardItem
                    index={index}
                    title={project.title}
                    setModal={setModal}
                    description={project.description}
                  />
                </Link>
              );
            })}
          </div>
        </div>
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
