import React from 'react';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';
import LogoSection from './components/logoSection/LogoSection';
import Achievements from './components/achievements/Achievements';
import Services from './components/services/Services';
import Amazing2023 from './components/amazing2023/Amazing2023';
import OurTeam from './components/ourTeam/OurTeam';
const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/blog" element={<MediaPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App