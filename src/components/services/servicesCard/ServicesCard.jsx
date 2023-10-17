import "./servicesCard.css";
import image from "../../../images/servicesImage1.png";
import ServicesCardItem from "./ServicesCardItem";

const ServicesCardsData = [
  {
    image: image,
    heading: "Integrated Marketing Solutions",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores facere et laudantium atque neque, porro consectetur error, officia, numquam alias perferendis sapiente? Excepturi placeat error!",
    link: "/integrated-marketing",
  },
  {
    image: image,
    heading: "Digital Content Creation & SEO",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores facere et laudantium atque neque, porro consectetur error, officia, numquam alias perferendis sapiente? Excepturi placeat error!",
    link: "/digital-Content",
  },
  {
    image: image,
    heading: "Digital & Performance Marketing",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores facere et laudantium atque neque, porro consectetur error, officia, numquam alias perferendis sapiente? Excepturi placeat error !",
    link: "/digital-performance",
  },
  {
    image: image,
    heading: "Video Production and Photography",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores facere et laudantium atque neque, porro consectetur error, officia, numquam alias perferendis sapiente? Excepturi placeat error !",
    link: "/Video-production",
  },
  {
    image: image,
    heading: "Technology and Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores facere et laudantium atque neque, porro consectetur error, officia, numquam alias perferendis sapiente? Excepturi placeat error !",
    link: "/Technology",
  },
  {
    image: image,
    heading: "Branding & Advertising",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores facere et laudantium atque neque, porro consectetur error, officia, numquam alias perferendis sapiente? Excepturi placeat error!",
    link: "/branding-advertising",
  },
  {
    image: image,
    heading: "Media Planning and Buying",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores facere et laudantium atque neque, porro consectetur error, officia, numquam alias perferendis sapiente? Excepturi placeat error !",
    link: "/media-planning",
  },
  {
    image: image,
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
