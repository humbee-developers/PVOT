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
      "Consider us your brand's personal assistant. We juggle the marketing madness, so you don't have to. Your brand shines, and you get more time for chai breaks!  Our mission? To make sure your brand's tale is the blockbuster that everyone loves.",
    image: img1,
    link: "/pvot/integrated-Marketing",
  },
  {
    title: "Digital Content Creation & SEO",
    description:
      "Crafting engaging content that climbs search rankings. With us, your website becomes a magnet for both readers and search engines, putting your brand in the spotlight. The result? Your website's the party everyone wants an invite to.",
    image: img2,
    link: "/pvot/digital-Content",
  },
  {
    title: "Digital & Performance Marketing",
    description:
      "We don't just make ads; we make them do the cha-cha with your ROI. Our performance marketing is like a personal trainer for your campaigns, ensuring they're always fit, fabulous, and financially successful.",
    image: img3,
    link: "/pvot/digital-performance",
  },
  {
    title: "Video Production and Photography",
    description:
      "We don't just make ads; we make them do the cha-cha with your ROI. Our performance marketing is like a personal trainer for your campaigns, ensuring they're always fit, fabulous, and financially successful.",
    image: img4,
    link: "/pvot/Video-production",
  },
  {
    title: "Technology and Design",
    description:
      "We're the tech geeks who ensure your website runs smoothly and the artists who make it look stunning. We blend the best of brains and aesthetics to create a digital experience that's both beautiful and efficient.",
    image: img5,
    link: "/pvot/Technology",
  },
  {
    title: "Branding & Advertising",
    description:
      "Your brand is our canvas, and we paint with the colors of impact. Let us turn your business into a work of art that leaves an impression that lasts longer than a catchy jingle.",
    image: img6,
    link: "/pvot/branding-advertising",
  },
  {
    title: "Media Planning and Buying",
    description:
      "Planning, buying, and making your ads shine – it's all in a day's work. With us, your brand is front and center, like a lead actor in a blockbuster. We help you reach the right people, in the right place, at the right time. ",
    image: img7,
    link: "/pvot/media-planning",
  },
  {
    title: "E-commerce Strategy and Execution",
    description:
      "Turning browsers into buyers? That's our superpower. We'll help you navigate the e-commerce jungle, ensuring your online store isn't just a place to shop, but an unforgettable experience. ",
    image: img8,
    link: "/pvot/e-commerce",
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
