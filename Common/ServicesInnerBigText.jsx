// import PropTypes from "prop-types";
// import "./servicesInnerBigText.css";
// const BigServicesInnerText = ({ text }) => {
//   return (
//     <div className="internal_4th_header">
//       <div className="common_container">
//         <div className="internal_4th_header_outer">
//           <div className="internal_4th_header_text">{text}</div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BigServicesInnerText;

// BigServicesInnerText.propTypes = {
//   text: PropTypes.string,
// };

import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import "./servicesInnerBigText.css";
import PropTypes from "prop-types";

const BigServicesInnerText = ({ text }) => {
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);
  const phrase = text;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 1}`,
        pin: true,
      },
      opacity: 1,
      color: "#fff",
      ease: "none",
      stagger: 20,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };
  return (
    <div className="servicesBigText">
      <div className="common_container">
        <div className="wrapper" ref={container}>
          <div className="inner" ref={body}>
            {splitWords(phrase)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BigServicesInnerText;

BigServicesInnerText.propTypes = {
  text: PropTypes.string,
};
