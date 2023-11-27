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
import TextRevealEffect from "../components/roler/Rooler";
// import ServicesText from "../components/services/servicesText/ServicesText";
import BgTransition from "../components/bgTransition/BgTransition";
import LottieAnimation from "../components/animation/Animation";
// import ServicesScrollSlider from "../components/servicesSrollSlider/ServicesScrollSlider";
import ServicesTextExp from "../components/services/setvicesTextExp/ServicesTextExp";
import Roller from "../components/roller/Roller";
import LeftRightAnimatedText from "../components/leftRightAnimatedText/LeftRightAnimatedText";
// import Example from "../components/servicesSrollSlider/NewServicesSlider";
// import New3Dslider from "../components/servicesSrollSlider/New3DSlider";
// import NewServicesSLider from "../components/servicesSrollSlider/NewServicesSlider";
import "./home.css";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />

      <Text
        text={
          "From typewriters to touchscreens, we've upgraded our toolkit, and boy, do we know how to write your success story! With 20+ years of experience, we'll design, strategize, and execute your project as smoothly as butter on a warm pav bhaji!"
        }
      />
      <div className="pushing_boundries">
        <div className="pushing_boundries_desk">
          <LottieAnimation />
        </div>
        <div className="pushing_boundries_mobile">
          <LeftRightAnimatedText text1={"Pushing"} text2={"Boundries"} />
        </div>
      </div>
      {/* <ServicesText /> */}

      {/* <ServicesScrollSlider /> */}
      {/* <NewServicesSLider /> */}

      {/* <New3Dslider /> */}
      <Services />
      {/* <MyComponent /> */}

      {/* <Text
        text={
          "Standing out from the crowd is not easy, but with a distinctive brand design you are almost there. A creative tailor-made suit, for your brand!"
        }
      />*/}
      {/* <Roller /> */}
      <LeftRightAnimatedText text1={"Crafting"} text2={"Experience"} />
      {/* <ServicesTextExp /> */}

      {/* <BgTransition /> */}
      <Card />
      {/* <Stack /> */}
      {/* <Portfolio /> */}
      <Achievements />
      <OurTeam />
      {/* <LogoSection /> */}
      <Testimonial />
      {/* <Amazing2023 /> */}
      {/* <ContactUs /> */}
    </Fragment>
  );
};
export default Home;
