import "./roller.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import PropTypes from "prop-types";
const TextRevealEffect  = () => {
  const [checkWidth, setCheckWidth] = useState(window.innerWidth);
  function checkWidthSize() {
    setCheckWidth(window.innerWidth);
  }
  window.addEventListener("resize", checkWidthSize);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".amaz",
        start: "top center-=400px",
        end: "bottom+=100px center-=200px",
        scrub: true,
        pin: true,
        onUpdate: (scrollTrigger) => {
          const scrollP = scrollTrigger.progress;
          const scrollSpeed = 1 + scrollP * 2;
          tl.time(scrollSpeed * scrollP);
        },
      },
    });

    
  }, [checkWidth]);

  useEffect(() => {
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".amaz",
        start: "top center-=350px",
        end: "bottom+=30px center-=20px",
        opacity: "1",
        scrub: true,
      },
    });

    t3.to(".t1z", {
      duration: 1,
      delay: 0,
      x: 1250,
      ease: "none",
      opacity: 0,
    });
  }, [checkWidth]);

  useEffect(() => {
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".amaz",
        start: "top center-=350px",
        end: "bottom+=30px center-=20px",
        opacity: "1",
        scrub: true,
      },
    });

    t3.to(".t2z", {
      duration: 1,
      delay: 0,
      x: -1250,
      ease: "none",
      opacity: 0,
    });
  }, [checkWidth]);

  return (
    <div className="amazing_aniz">
      <div className="amaz">
        <div className="wrapperz">
          <div className="yearz">
            <div className="year_wrapperz">
              <div className="t1z">Crafting</div>
              <div className="t2z">Experiences</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextRevealEffect;
TextRevealEffect.propTypes = {
  firstText: PropTypes.string,
  lastText: PropTypes.string,
};