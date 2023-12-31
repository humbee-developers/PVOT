import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./servicesTextExp.css";

gsap.registerPlugin(ScrollTrigger);

function ServicesTextExp() {
  useEffect(() => {
    document.body.style.overflow = "auto";

    const backTextWrapper = document.querySelectorAll(".services_text_wrapper");

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
              pin: true,
            },
            transition: "1s ease-out",
          }
        );
      });
    });
  }, []);

  return (
    <div className="services_text">
      <div className="services_text_wrapper">
        <ul className="background-text">
          <li className="background-text__item">Pushing</li>
          <li className="background-text__item">Boundries</li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesTextExp;
