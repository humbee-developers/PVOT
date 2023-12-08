import { Fragment } from "react";
import HeroSection from "../components/heroSection/HeroSections";
import Heros from "../components/heros/Heros";
import Services from "../components/services/Services";
import Achievements from "../components/achievements/Achievements";
import OurTeam from "../components/ourTeam/OurTeam";
import Testimonial from "../components/testimonial/Testimonial";
import Card from "../components/card/Card";
import Amazing2023 from "../components/amazing2023/Amazing2023";
import Text from "../components/text/Text";
import TextRevealEffect from "../components/roler/Rooler";
import BgTransition from "../components/bgTransition/BgTransition";
import LottieAnimation from "../components/animation/Animation";
import ServicesTextExp from "../components/services/setvicesTextExp/ServicesTextExp";
import Roller from "../components/roller/Roller";
import LeftRightAnimatedText from "../components/leftRightAnimatedText/LeftRightAnimatedText";
import "./home.css";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      {/* <Heros/> */}

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
      <Services />
      <LeftRightAnimatedText text1={"Crafting"} text2={"Experience"} />
      <Card />
      <Achievements />
      <OurTeam />
      <Testimonial />
    </Fragment>
  );
};
export default Home;
