import  './style.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from "../../../images/blog_1.png"
import {Link} from "react-router-dom"

const links = [
  {
    title: "Home",
    Link: "/",
    src: "blog_1.png"
  },
  {
    title: "Services",
    Link: "/shop",
    src: ""
  },
  {
    title: "About Us",
    Link: "/about",
    src: ""
  },
  {
    title: "Portfolio",
    Link: "/lookbook",
    src: ""
  },
  {
    title: "Blogs",
    Link: "/contact",
    src: ""
  },
  {
    title: "Career",
    Link: "/contact",
    src: ""
  },
  {
    title: "Contact us",
    Link: "/contact",
    src: ""
  }
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className="nav">
      <div className="wrapper">
        <div className="container">
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <Footer />
        </div>

        <div className="nav_image">
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
        </div>
        
      </div>
    </motion.div>
  )
}