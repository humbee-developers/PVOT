import React, { useState, useEffect } from 'react';
import {motion, AnimatePresence } from 'framer-motion'
import ani from "../../images/Group 1.png"
import sphere from "../../images/3d-sphere.png"
import "./heroSection.css"
const HeroSection = () => {
  const textVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    exit: { y: 20, opacity: 0, transition: { duration: 1 } },
  };

  const textContent = [
    "AWESOME",
    'Strategies',
    'Designs',
    'Concepts',
    'Brands'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textContent.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='hero-heading'>
        <motion.img
          src={sphere}
          style={{ display: "block", width: "50%", marginLeft: "auto", marginRight: "auto" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <div className="text">
          <motion.h1
            className='hero-text'
            style={{ fontWeight: "300", bottom: "25rem" }}
            initial={{ x: -1000 }}
            animate={{ x: 300 }}
            transition={{
              duration: 2,
              delay: 1,
            }}
          >
            WE CREATE
          </motion.h1>





          <motion.div className='x' style={{display:'flex'}}
          initial={{ x: 2000 }}
            animate={{ x: 600 }}
            transition={{
              duration: 2,
              delay: 1,
            }}
          
          >
          
          <motion.img 
          src={ani}
          alt="Rotating Image"
          style={{ width: "100px", marginBottom: "22px",position:'absolute',bottom:'17rem',left:"-7rem" }}
          initial={{ rotate: 0 }}
          animate={{ rotate:-360 }}
          transition={{ duration: 3, ease: 'linear' }}
        />
          
          

         
          <AnimatePresence mode='wait'>
            <motion.h1
              key={textContent[currentIndex]}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className='hero-text'
              style={{ bottom: "17rem" }}
            >
             
              {textContent[currentIndex]}
            </motion.h1>
          </AnimatePresence>
         
          </motion.div>

          
        </div>
      </div>
    </div>
  )
}

export default HeroSection;