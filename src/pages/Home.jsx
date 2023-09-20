import { Fragment } from "react";
import HeroSection from "../components/heroSection/HeroSection";
import Services from "../components/services/Services";
// import Portfolio from "../components/portfolio/PortfolioCard";
import Achievements from "../components/achievements/Achievements";
import OurTeam from "../components/ourTeam/OurTeam";
import LogoSection from "../components/logoSection/LogoSection";
import Testimonial from "../components/testimonial/Testimonial";
import Animation from "../components/animation/Animation";
import Rooler from "../components/roler/Rooler";
import Card from "../components/card/Card";
// import Amazing2023 from "../components/amazing2023/Amazing2023";
import ContactUs from "../components/contactUs/ContactUs";
import Text from "../components/text/Text";
// import TextRevealEffect from "../components/roler/Rooler";
import ServicesText from "../components/services/servicesText/ServicesText";
import BgTransition from "../components/bgTransition/BgTransition";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <Text/>
      {/* <TextRevealEffect /> */}
      <Animation />
      <ServicesText />
      <Services />
      <Text/>
      <BgTransition />
      <Card />
      {/* <Portfolio /> */}
      <Achievements />
      <OurTeam />
      <LogoSection />
      <Testimonial />
      {/* <Amazing2023 /> */}
      {/*<ContactUs />*/}
    </Fragment>
  );
};
export default Home;
