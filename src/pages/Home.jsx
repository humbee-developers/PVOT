import { Fragment } from "react";
import HeroSection from "../components/heroSection/HeroSection";
// import Services from "../components/services/Services";
// import Portfolio from "../components/portfolio/PortfolioCard";
import Achievements from "../components/achievements/Achievements";
import OurTeam from "../components/ourTeam/OurTeam";
// import LogoSection from "../components/logoSection/LogoSection";
import Testimonial from "../components/testimonial/Testimonial";
// import Animation from "../components/animation/Animation";
// import Rooler from "../components/roler/Rooler";
import Card from "../components/card/Card";
// import Amazing2023 from "../components/amazing2023/Amazing2023";
import ContactUs from "../components/contactUs/ContactUs";
import Text from "../components/text/Text";
// import TextRevealEffect from "../components/roler/Rooler";
import ServicesText from "../components/services/servicesText/ServicesText";
import BgTransition from "../components/bgTransition/BgTransition";
import LottieAnimation from "../components/animation/Animation";
import ServicesScrollSlider from "../components/servicesSrollSlider/ServicesScrollSlider";
0
const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <Text
        text={
          "With an amazing team in place, in our second year we focused on pushing boundaries and empowering brands to grow"
        }
      />
      {/* <TextRevealEffect /> */}
      <LottieAnimation />
      <ServicesText />
      {/* <Services /> */}
      <ServicesScrollSlider />
      <Text
        text={
          "We use Webflow as a development tool to push boundaries and redefine what's possible with a design driven approach."
        }
      />
      <BgTransition />
      <Card />
      {/* <Stack /> */}
      {/* <Portfolio /> */}
      <Achievements />
      <OurTeam />
      {/* <LogoSection /> */}
      <Testimonial />
      {/* <Amazing2023 /> */}
      <ContactUs />
    </Fragment>
  );
};
export default Home;
