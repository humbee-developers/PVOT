import { useState } from "react";
import ServicesPageCardItem from "./ServicesPageCardItem";
import { Link } from "react-router-dom";
import img1 from "../../../images/inner_3d_laptop.png";
import img2 from "../../../images/inner_laptop.png";
import img3 from "../../../images/inner_cloud.png";
import img4 from "../../../images/yellowbg.png";
import img5 from "../../../images/technology-banner.png";
import img6 from "../../../images/servicesBanner.png";
import img7 from "../../../images/inner_tv_lamp.png";
import img8 from "../../../images/inner_e_commerce_header_image.png";
import ServicesPageCardHover from "./ServicesPageCardHover";
const projects = [
  {
    title: "Integrated Marketing Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque.",
    image: img1,
    link: "/integrated-Marketing",
  },
  {
    title: "Digital Content Creation & SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque.",
    image: img2,
    link: "/digital-Content",
  },
  {
    title: "Digital & Performance Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque.",
    image: img3,
    link: "/digital-performance",
  },
  {
    title: "Video Production and Photography",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque.",
    image: img4,
    link: "/Video-production",
  },
  {
    title: "Technology and Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque.",
    image: img5,
    link: "/Technology",
  },
  {
    title: "Branding & Advertising",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque.",
    image: img6,
    link: "/branding-advertising",
  },
  {
    title: "Media Planning and Buying",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque.",
    image: img7,
    link: "/media-planning",
  },
  {
    title: "E-commerce Strategy and Execution",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque.",
    image: img8,
    link: "/e-commerce",
  },
];
const ServicesPageCard = () => {
  const [hoverImage, setHoverImage] = useState({ active: false, index: 0 });
  return (
    <div className={"servicesPageCard"}>
      <div className={"servicesPageCard_wrapper"}>
        {projects.map((project, index) => {
          return (
            <Link
              to={project.link} // Use the link from the card or "/" as a fallback
              key={index}
            >
              <ServicesPageCardItem
                index={index}
                title={project.title}
                setHoverImage={setHoverImage}
                description={project.description}
              />
            </Link>
          );
        })}
      </div>
      <ServicesPageCardHover hoverImage={hoverImage} projects={projects} />
      {/* <CoCard modal={modal} projects={projects} /> */}
    </div>
  );
};

export default ServicesPageCard;
