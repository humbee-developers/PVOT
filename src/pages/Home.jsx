import { Fragment } from "react";
import HeroSection from "../components/heroSection/HeroSection";
import Services from "../components/services/Services";
import Portfolio from "../components/portfolio/Portfolio";
import Achievements from "../components/achievements/Achievements";
import OurTeam from "../components/ourTeam/OurTeam";
import LogoSection from "../components/logoSection/LogoSection";
import Testimonial from "../components/testimonial/Testimonial";
import Amazing2023 from "../components/amazing2023/Amazing2023";
import ContactUs from "../components/contactUs/ContactUs";
import ContactForm from "../components/contactUs/ContactForm";

const Home = () => {
  return (
    <Fragment>
      {/* <Header /> */}
      <HeroSection />
      <Services />
      <Portfolio />
      <Achievements />
      <OurTeam />
      <LogoSection />
      <Testimonial />
      <Amazing2023 />
      <ContactUs />
      <ContactForm />
      {/* <Footer /> */}
    </Fragment>
  );
};
export default Home;
