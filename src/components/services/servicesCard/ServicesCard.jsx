import "./servicesCard.css";
import image1 from "../../../images/servicesImage1.png";
import image2 from "../../../images/servicesImage2.png";
import image3 from "../../../images/servicesImage3.png";
import image4 from "../../../images/servicesImage4.png";
import image5 from "../../../images/servicesImage5.png";
import image6 from "../../../images/servicesImage6.png";
import image7 from "../../../images/servicesImage7.png";
import image8 from "../../../images/servicesImage8.png";
import ServicesCardItem from "./ServicesCardItem";

const ServicesCardsData = [
  {
    image: image2,
    heading: "Integrated Marketing Solutions",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores facere et laudantium atque neque, porro consectetur error, officia, numquam alias perferendis sapiente? Excepturi placeat error!",
    link: "/integrated-marketing",
  },
  {
    image: image6,
    heading: "Digital Content Creation & SEO",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores facere et laudantium atque neque, porro consectetur error, officia, numquam alias perferendis sapiente? Excepturi placeat error!",
    link: "/digital-Content",
  },
  {
    image: image7,
    heading: "Digital & Performance Marketing",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores facere et laudantium atque neque, porro consectetur error, officia, numquam alias perferendis sapiente? Excepturi placeat error !",
    link: "/digital-performance",
  },
  {
    image: image1,
    heading: "Video Production and Photography",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores facere et laudantium atque neque, porro consectetur error, officia, numquam alias perferendis sapiente? Excepturi placeat error !",
    link: "/Video-production",
  },
  {
    image: image8,
    heading: "Technology and Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores facere et laudantium atque neque, porro consectetur error, officia, numquam alias perferendis sapiente? Excepturi placeat error !",
    link: "/Technology",
  },
  {
    image: image3,
    heading: "Branding & Advertising",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores facere et laudantium atque neque, porro consectetur error, officia, numquam alias perferendis sapiente? Excepturi placeat error!",
    link: "/branding-advertising",
  },
  {
    image: image5,
    heading: "Media Planning and Buying",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores facere et laudantium atque neque, porro consectetur error, officia, numquam alias perferendis sapiente? Excepturi placeat error !",
    link: "/media-planning",
  },
  {
    image: image4,
    heading: "E-commerce Strategy and Execution",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores facere et laudantium atque neque, porro consectetur error, officia, numquam alias perferendis sapiente? Excepturi placeat error !",
    link: "/e-commerce",
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServicesCard;
