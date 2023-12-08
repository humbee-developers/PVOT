import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import '../heroSection/herosections.css';

const HeroSections = () => {
  const text = 'DIGITAL DESIGN BOUTIQUE WITH FOCUS ON AESTHETICS'.split(' ');

  return (
    <div>
      <div className='hero_text_outer'>
        <div className='hero_text'>
          {text.map((el, i) => (
            <motion.span
              className={`hero_text_animation ${el === 'BOUTIQUE' ? 'custom_color' : ''}`}
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 40 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 30,
                duration: 4,

                delay: i / 4,
              }}
            >
              {el}{' '}
            </motion.span>
          ))}
        </div>

        <Spline scene="https://prod.spline.design/0T19zvhvIK9xpl9F/scene.splinecode" />
       
      </div>
    </div>
  );
};

export default HeroSections;
