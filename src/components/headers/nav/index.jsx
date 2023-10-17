import "./style.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";
import Footer from "./Footer";
import image1 from "../../../images/blog_1.png";
import image2 from "../../../images/blog_2.png";
import { Link } from "react-router-dom";
import NavImage from "./Image";

const links = [
  {
    title: "Home",
    href: "/",
    src: image1,
  },
  {
    title: "Services",
    href: "/services",
    src: image2,
  },
  {
    title: "Know-us",
    href: "/knowUs",
    src: image1,
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    src: image2,
  },
  {
    title: "Blogs",
    href: "/blog",
    src: image1,
  },
  {
    title: "Career",
    href: "/career",
    src: image2,
  },
  {
    title: "Contact-us",
    href: "/contact-us",
    src: image1,
  },
];

export default function NavSection({navLinkHandler}) {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="new_nav"
    >
      <div className="wrapper">
        <div className="container">
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            handleNavLink={navLinkHandler}
          />
          <Footer />
        </div>
        <NavImage
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
}
