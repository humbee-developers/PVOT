import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import img1 from "../../images/servicesImage1.png";
import img2 from "../../images/servicesImage2.png";
import img3 from "../../images/servicesImage3.png";
import img4 from "../../images/servicesImage1.png";
import img5 from "../../images/servicesImage2.png";
import img6 from "../../images/servicesImage3.png";
import img7 from "../../images/servicesImage1.png";
import img8 from "../../images/servicesImage2.png";
const cards = [
  {
    url: img1,
    title: "Video Production and Photography",
    id: 1,
  },
  {
    url: img2,
    title: "Integrated Marketing Solutions",
    id: 2,
  },
  {
    url: img3,
    title: "Branding & Advertising",
    id: 3,
  },
  {
    url: img4,
    title: "Digital & Performance Marketing",
    id: 4,
  },
  {
    url: img5,
    title: "Digital Content Creation and SEO",
    id: 5,
  },
  {
    url: img6,
    title: "Technology and Design",
    id: 6,
  },
  {
    url: img7,
    title: "E-commerce Strategy and Execution",
    id: 7,
  },
  {
    url: img8,
    title: "Media Planning and Buying",
    id: 8,
  },
];
const Example = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div
        style={{
          display: "flex",
          height: "200px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "200px",
            color: "white",
          }}
        >
          Services
        </span>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};
const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);
  return (
    <section
      ref={targetRef}
      style={{ position: "relative", height: "300vh", background: "black" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          display: "flex",
          height: "100vh",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{ x, display: "flex", gap: "3rem", transition: "all 0.2s" }}
        >
          {cards.map((card) => {
            return (
              <div
                key={card.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                
              >
                <Card3D card={card} />
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                    textAlign: "center",
                    color: "white",
                    marginTop: "1rem",
                  }}
                >
                  {card.title}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
const Card3D = ({ card, rotateY, translateY }) => {
  const cards = document.querySelector(".card");
  const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
  const THRESHOLD = 15;

  function handleHover(e) {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    cards.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  }

  function resetStyles(e) {
    cards.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  }

//   if (!motionMatchMedia.matches) {
//     cards.addEventListener("mouseover", handleHover);
//     cards.addEventListener("mouseleave", resetStyles);
//   }

  return (
    <motion.div
      style={{
        position: "relative",
        height: "360px",
        width: "260px",
        borderRadius: "30px",
        overflow: "hidden",
        background: "#eee",
        perspective: "1000px",
        transformStyle: "preserve-3d",
        rotateY,
        translateY,
      }}
      className="card"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotateY: -30 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          transformOrigin: "center",
          background: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></motion.div>
    </motion.div>
  );
};
export default Example;
