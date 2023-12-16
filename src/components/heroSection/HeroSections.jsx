import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import "../heroSection/herosections.css";
import gsap from "gsap";
import splitType from "split-type";
import { useEffect, useRef } from "react";

const HeroSections = () => {
  let refs = useRef([]);
  const text = "PVOT Team Digital Design Boutique with Focus on Aesthetics";
  useEffect(() => {
    const ourText = new splitType(".hero_heading_animation", {
      types: "chars",
    });
    const chars = ourText.chars;

    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
        rotate: "45deg",
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 2,
        rotate: "0deg",
        ease: "power4.out",
      }
    );
  }, []);
  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i} className="hero_text_animation_wrapper">{letters}</p>);
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
    <div>
      <div className="hero_text_outer">
        <div className="hero_text">
          <div className="hero_heading_animation">{splitWords(text)}</div>
        </div>
        <div className="hero_small_text">
          We pride ourselves on our ability to craft digital products that not
          only meet but exceed the expectations of our clients. With a wealth of
          experience and expertise in the field of digital product development.
        </div>

        {/* <Spline scene="https://prod.spline.design/0T19zvhvIK9xpl9F/scene.splinecode" /> */}
      </div>
    </div>
  );
};

export default HeroSections;
