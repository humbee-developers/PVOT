import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Rooler from '../roler/Rooler';
import "./animation.css"
function LottieAnimation() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    const container = document.querySelector('.c-sphere-lottie');
    const anim = lottie.loadAnimation({
      container,
      path: 'https://assets.website-files.com/63b386e70e89095e936cc9c2/63b7a56290828f5d7ac9bde4_sphere.json', // Replace with your animation URL
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
    return () => {
      anim.destroy();
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 0.7, // Set the scale to 2.4 when in view
        transition: { duration: 3 },
        
        

      });
    } else {
      controls.start({
        opacity: 1,
        scale: 0.2, // Set the scale to 0.4 when out of view
      });
    }
  }, [inView, controls]);

  return (
    

 <div style={{backgroundColor:"black"}}>
 <section scroller="0" class="c-section cc-highlights">
   <div class="c-transition">
     <div class="c-section cc-transition">
         
           <Rooler/>   
           <motion.div
           className="c-sphere-lottie-wrapper"
           ref={ref}
           initial={{ opacity: 0, scale: 0.2 }}
           animate={controls}>
           <div className="c-sphere-lottie" />
         </motion.div>

     </div>
   </div>
 </section> 
 </div>
  );
}

export default LottieAnimation;