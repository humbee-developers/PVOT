import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import "./text.css";
import PropTypes from "prop-types";
// const phrase = "With an amazing team in place, in our second year we focused on pushing boundaries and empowering brands to grow";

export default function Home({ text }) {
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
        end: `+=${window.innerHeight / 2.5}`,
        pin:true
      },
      opacity: 1,
      color: "white",
      ease: "none",
  
      stagger: 11,
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
    <div style={{ backgroundColor: "black" }}>
      <main ref={container} className="main">
        <div ref={body} className="body">
          {splitWords(phrase)}
        </div>
      </main>
    </div>
  );
}

Home.propTypes = {
  text: PropTypes.string,
};
