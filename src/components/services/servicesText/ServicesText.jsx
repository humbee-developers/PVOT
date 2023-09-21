import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './servicesText.css';

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const forthText = useRef(null);
  const fifthText = useRef(null);
  const sixthText = useRef(null);
  const seventhText = useRef(null);
  const eighthText = useRef(null);
  const slider = useRef(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const slider3 = useRef(null);
  let xPercentSlider1 = 0;
  let xPercentSlider2 = 0;
  let xPercentSlider3 = 0;
  let xPercentSlider4 = 0;
  let directionSlider1 = -1;
  let directionSlider2 = -1;
  let directionSlider3 = -1;
  let directionSlider4 = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (directionSlider1 = e.direction * -1),
      },
      x: '-500px',
    });
    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider1.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (directionSlider2 = e.direction * -1),
      },
      x: '-500px',
    });
    requestAnimationFrame(animate1);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider2.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (directionSlider3 = e.direction * -1),
      },
      x: '-500px',
    });
    requestAnimationFrame(animate2);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider3.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (directionSlider4 = e.direction * -1),
      },
      x: '-500px',
    });
    requestAnimationFrame(animate3);
  }, []);



  const animate = () => {
    if (xPercentSlider1 < -100) {
      xPercentSlider1 = 0;
    } else if (xPercentSlider1 > 0) {
      xPercentSlider1 = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercentSlider1 });
    gsap.set(secondText.current, { xPercent: xPercentSlider1 });
    requestAnimationFrame(animate);
    xPercentSlider1 += 0.2 * directionSlider1;
  };

  const animate1 = () => {
    if (xPercentSlider2 < -100) {
      xPercentSlider2 = 0;
    } else if (xPercentSlider2 > 0) {
      xPercentSlider2 = -100;
    }
    gsap.set(thirdText.current, { xPercent: xPercentSlider2 });
    gsap.set(forthText.current, { xPercent: xPercentSlider2 });
    requestAnimationFrame(animate1);
    xPercentSlider2 += 0.1 * directionSlider2;
  };

  const animate2 = () => {
    if (xPercentSlider3 < -100) {
      xPercentSlider3 = 0;
    } else if (xPercentSlider3 > 0) {
      xPercentSlider3 = -100;
    }
    gsap.set(fifthText.current, { xPercent: xPercentSlider3 }); 
    gsap.set(sixthText.current, { xPercent: xPercentSlider3 }); 
    requestAnimationFrame(animate2);
    xPercentSlider3 += 0.2 * directionSlider3;
  };

  const animate3 = () => {
    if (xPercentSlider4 < -100) {
      xPercentSlider4 = 0;
    } else if (xPercentSlider4 > 0) {
      xPercentSlider4 = -100;
    }
    gsap.set(seventhText.current, { xPercent: xPercentSlider4 });
    gsap.set(eighthText.current, { xPercent: xPercentSlider4 }); 
    requestAnimationFrame(animate3);
    xPercentSlider4 += 0.3 * directionSlider4;
  };
  





  return (
    <main className="mainxx">
      <div className="sliderContainerx">
        <div ref={slider} className="sliderx">
          <p ref={firstText}>Social Media Marketing -</p>
          <p ref={secondText}>Social Media Marketing -</p>
        </div>
        <div ref={slider1} className="sliderx">
          <p ref={thirdText}>Advertising & Marketing -</p>
          <p ref={forthText}>Advertising & Marketing -</p>
        </div>
        <div ref={slider2} className="sliderx">
          <p ref={fifthText}>Search engine optimization -</p>
          <p ref={sixthText}>Search engine optimization -</p>
        </div>
        <div ref={slider3} className="sliderx">
          <p ref={seventhText}>Website design & development -</p>
          <p ref={eighthText}>Website design & development -</p>
        </div>
      </div>
    </main>
  );
}
