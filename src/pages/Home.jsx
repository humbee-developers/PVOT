import { Fragment } from "react";
import HeroSection from "../components/heroSection/HeroSection";
import Services from "../components/services/Services";
// import Portfolio from "../components/portfolio/PortfolioCard";
import Achievements from "../components/achievements/Achievements";
import OurTeam from "../components/ourTeam/OurTeam";
// import LogoSection from "../components/logoSection/LogoSection";
import Testimonial from "../components/testimonial/Testimonial";
// import Animation from "../components/animation/Animation";
// import Rooler from "../components/roler/Rooler";
import Card from "../components/card/Card";
import Amazing2023 from "../components/amazing2023/Amazing2023";
// import ContactUs from "../components/contactUs/ContactUs";
import Text from "../components/text/Text";
// import TextRevealEffect from "../components/roler/Rooler";
// import ServicesText from "../components/services/servicesText/ServicesText";
import BgTransition from "../components/bgTransition/BgTransition";
import LottieAnimation from "../components/animation/Animation";
import ServicesScrollSlider from "../components/servicesSrollSlider/ServicesScrollSlider";
import ServicesTextExp from "../components/services/setvicesTextExp/ServicesTextExp";
// import MyComponent from "../components/services/newServiceText/NewServicesText";
import Roller from "../components/roller/Roller";
import Example from "../components/servicesSrollSlider/NewServicesSlider";
// import New3Dslider from "../components/servicesSrollSlider/New3DSlider";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
    
      <Text
        text={
          "Whether it’s brand or website WE LOVE DETAILS Focused on Details and empowering brands to grow. Focused on Details and empowering brands to grow Focused on Details and empowering brands to grow"
        }
      />
      {/* <TextRevealEffect /> */}
      <LottieAnimation />
      {/* <ServicesText /> */}
      
      {/* <ServicesScrollSlider /> */}
       
      {/* <New3Dslider /> */}
      <Services />
      {/* <MyComponent /> */}

      {/* <Text
        text={
          "Standing out from the crowd is not easy, but with a distinctive brand design you are almost there. A creative tailor-made suit, for your brand!"
        }
      />*/}
      <Roller/>
      
      {/* <BgTransition /> */}
      <Card />
      {/* <Stack /> */}
      {/* <Portfolio /> */}
      <Achievements />
      <OurTeam />
      {/* <LogoSection /> */}
      <Testimonial />
      <Amazing2023 />
      {/* <ContactUs /> */}
    </Fragment>
  );
};
export default Home;
