import "./rooler.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import PropTypes from "prop-types";
const TextRevealEffect = () => {
  const [checkWidth, setCheckWidth] = useState(window.innerWidth);
  function checkWidthSize() {
    setCheckWidth(window.innerWidth);
  }
  window.addEventListener("resize", checkWidthSize);

  let varY = 1100;
  if (checkWidth > 1600) {
    varY = 1300;
  } else if (checkWidth < 1600 && checkWidth > 1440) {
    varY = 1120;
  } else if (checkWidth < 1199 && checkWidth > 991) {
    varY = 850;
    console.log("<1199");
  } else if (checkWidth < 991 && checkWidth > 767) {
    varY = 630;
    console.log("<991");
  } else if (checkWidth < 767 > 476) {
    varY = 500;
    console.log("<767");
  } else if (checkWidth < 476) {
    varY = 255;
  } else {
    varY = 1100;
    console.log(">1199");
  }

  let varX = -1300;
  if (checkWidth > 1600) {
    varX = -1050;
  } else if (checkWidth < 1600 && checkWidth > 1440) {
    varX = -1270;
  } else if (checkWidth < 1199 && checkWidth > 991) {
    varX = -1350;
    console.log("<1199");
  } else if (checkWidth < 991 && checkWidth > 767) {
    varX = -1260;
    console.log("<991");
  } else if (checkWidth < 767 > 476) {
    varX = -1100;
    console.log("<767");
  } else if (checkWidth < 476) {
    varX = -1400;
  } else {
    varX = -1300;
    console.log(">1199");
  }
  console.log(checkWidth);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ama",
        start: "top center-=400px",
        end: "bottom+=100px center-=200px",
        scrub: true,
        // pin: true,
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
        trigger: ".ama",
        start: "top center-=350px",
        end: "bottom+=30px center-=20px",
        opacity: "0",
        scrub: true,
      },
    });

    t3.to(".t1", {
      duration: 1,
      delay: 0,
      x: varY,
      ease: "none",
      opacity: 1,
    });
  }, [checkWidth]);

  useEffect(() => {
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ama",
        start: "top center-=350px",
        end: "bottom+=30px center-=20px",
        opacity: "0",
        scrub: true,
      },
    });

    t3.to(".t2", {
      duration: 1,
      delay: 0,
      x: varX,

      ease: "none",
      opacity: 1,
    });
  }, [checkWidth]);

  return (
    <div className="amazing_ani">
      <div className="ama">
        <div className="wrapper">
          <div className="year">
            <div className="year_wrapper">
              <div className="t1">Pushing</div>
              <div className="t2">Boundaries</div>
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
