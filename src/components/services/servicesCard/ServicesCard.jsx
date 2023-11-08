import "./servicesCard.css";
import image1 from "../../../images/servicesImage1.png";
import image2 from "../../../images/servicesImage2.png";
import image3 from "../../../images/servicesImage3.png";
import image4 from "../../../images/servicesImage4.png";
import image5 from "../../../images/servicesImage5.png";
import image6 from "../../../images/servicesImage6.png";
import image7 from "../../../images/servicesImage7.png";
import image8 from "../../../images/servicesImage8.png";
import mobileImage1 from "../../../images/servicesMobile5.png";
import mobileImage2 from "../../../images/servicesMobile2.png";
import mobileImage3 from "../../../images/servicesMobile3.png";
import mobileImage4 from "../../../images/servicesMobile4.png";
import mobileImage5 from "../../../images/servicesMobile1.png";
import mobileImage6 from "../../../images/servicesMobile6.png";
import mobileImage7 from "../../../images/servicesMobile8.png";
import mobileImage8 from "../../../images/servicesMobile7.png";
import ServicesCardItem from "./ServicesCardItem";

const ServicesCardsData = [
  {
    image: image1,
    mobileImage: mobileImage1,
    heading: "Integrated Marketing Solutions",
    text: "Consider us your brand's personal assistant. We juggle the marketing madness, so you don't have to. Your brand shines, and you get more time for chai breaks!  Our mission? To make sure your brand's tale is the blockbuster that everyone loves.",
    link: "/PVOT/integrated-marketing",
  },
  {
    image: image2,
    mobileImage: mobileImage2,
    heading: "Digital Content Creation & SEO",
    text: "Crafting engaging content that climbs search rankings. With us, your website becomes a magnet for both readers and search engines, putting your brand in the spotlight. The result? Your website's the party everyone wants an invite to.",
    link: "/PVOT/digital-Content",
  },
  {
    image: image3,
    mobileImage: mobileImage3,
    heading: "Digital & Performance Marketing",
    text: "We don't just make ads; we make them do the cha-cha with your ROI. Our performance marketing is like a personal trainer for your campaigns, ensuring they're always fit, fabulous, and financially successful.",
    link: "/PVOT/digital-performance",
  },
  {
    image: image4,
    mobileImage: mobileImage4,
    heading: "Video Production and Photography",
    text: "We don't just make ads; we make them do the cha-cha with your ROI. Our performance marketing is like a personal trainer for your campaigns, ensuring they're always fit, fabulous, and financially successful.",
    link: "/PVOT/Video-production",
  },
  {
    image: image5,
    mobileImage: mobileImage5,
    heading: "Technology and Design",
    text: "We're the tech geeks who ensure your website runs smoothly and the artists who make it look stunning. We blend the best of brains and aesthetics to create a digital experience that's both beautiful and efficient.",
    link: "/PVOT/Technology",
  },
  {
    image: image6,
    mobileImage: mobileImage6,
    heading: "Branding & Advertising",
    text: "Your brand is our canvas, and we paint with the colors of impact. Let us turn your business into a work of art that leaves an impression that lasts longer than a catchy jingle.",
    link: "/PVOT/branding-advertising",
  },
  {
    image: image7,
    mobileImage: mobileImage7,
    heading: "Media Planning and Buying",
    text: "Planning, buying, and making your ads shine – it's all in a day's work. With us, your brand is front and center, like a lead actor in a blockbuster. We help you reach the right people, in the right place, at the right time.",
    link: "/PVOT/media-planning",
  },
  {
    image: image8,
    mobileImage: mobileImage8,
    heading: "E-commerce Strategy and Execution",
    text: "Turning browsers into buyers? That's our superpower. We'll help you navigate the e-commerce jungle, ensuring your online store isn't just a place to shop, but an unforgettable experience. ",
    link: "/PVOT/e-commerce",
  },
];

const ServicesCard = () => {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  // });
  // const x = useTransform(scrollYProgress, [0, 1], ["60%", "-95%"]);
  // return (
  //   <div className="servicesCard" ref={ref}>
  //     <div className="servicesCard_inner">
  //       <motion.div style={{ x }} className="servicesCard_wrapper">
  //         <img src={sliderImage} alt="slide1" />
  //         <img src={sliderImage} alt="slide1" />
  //         <img src={sliderImage} alt="slide1" />
  //         <img src={sliderImage} alt="slide1" />
  //         <img src={sliderImage} alt="slide1" />
  //       </motion.div>
  //       <div className="servicesCard_wrapper_mobile">
  //         <img src={sliderImage} alt="slide1" />
  //         <img src={sliderImage} alt="slide1" />
  //         <img src={sliderImage} alt="slide1" />
  //         <img src={sliderImage} alt="slide1" />
  //         <img src={sliderImage} alt="slide1" />
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="servicesCard">
      <div className="common_container">
        {/* <div className="services_heading">
          <h2>Services</h2>
        </div> */}
        <div className="servicesCard_wrapper">
          {ServicesCardsData.map((item, index) => (
            <ServicesCardItem
              key={index}
              image={item.image}
              heading={item.heading}
              text={item.text}
              link={item.link}
              mobileImage={item.mobileImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServicesCard;
