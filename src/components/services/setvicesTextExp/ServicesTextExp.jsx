import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./servicesTextExp.css";

gsap.registerPlugin(ScrollTrigger);

function ServicesTextExp() {
  useEffect(() => {
    document.body.style.overflow = "auto";

    const backTextWrapper = document.querySelectorAll(".services_text");

    backTextWrapper.forEach((section) => {
      const textLines = section.querySelectorAll(".background-text__item");

      textLines.forEach(function (line, index) {
        const [x, xEnd] =
          index % 2
            ? [
                window.innerWidth,
                (line.scrollWidth - section.offsetWidth) * -10,
              ]
            : [line.scrollWidth * -1, 0];

        gsap.fromTo(
          line,
          { x },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              scrub: 1,
              start: "top 100%",
              end: "top top",
            },
            transition: "1s ease-out",
          }
        );
      });
    });
  }, []);

  return (
    <div className="services_text">
      <ul className="background-text">
        <li className="background-text__item">Social Media Marketing</li>
        <li className="background-text__item">Advertising & Marketing</li>
        <li className="background-text__item">Search engine optimization</li>
        <li className="background-text__item">Website design & development</li>
      </ul>
    </div>
  );
}

export default ServicesTextExp;
