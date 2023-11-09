import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./leftRightAnimatedText.css";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

function LeftRightAnimatedText({ text1, text2 }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    ScrollTrigger.create({
      trigger: section,
      start: "center center",
      end: "+=100%",
      pin: true,
    });

    const textLines = section.querySelectorAll(".background-text__item");

    textLines.forEach(function (line, index) {
      const [x, xEnd] =
        index % 2
          ? [window.innerWidth, (line.scrollWidth - section.offsetWidth) * -1]
          : [line.scrollWidth * -1, 0];

      gsap.fromTo(
        line,
        { x },
        {
          force3D: false,
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
            start: "center center",
            end: "+=100%",

            // markers: true
          },
        }
      );
    });
  }, []);

  return (
    <div className="left_right_animated_text">
      <div className="left_right_animated_text_wrapper" ref={sectionRef}>
        <ul className="background-text">
          <li className="background-text__item">{text1}</li>
          <li className="background-text__item">{text2}</li>
        </ul>
      </div>
    </div>
  );
}

export default LeftRightAnimatedText;

LeftRightAnimatedText.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
};
