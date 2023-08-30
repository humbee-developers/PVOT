import React from 'react';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';
import LogoSection from './components/logoSection/LogoSection';
import Achievements from './components/achievements/Achievements';
import Services from './components/services/Services';
import OurTeam from './components/ourTeam/OurTeam';
const App = () => {
  return (
    <div >
    <Header/>
   <HeroSection/>
   <Services/>
   <Portfolio/>
   <Achievements/>
   <LogoSection/>
   <ContactUs/>
   <Footer/>
  
  </div>
  )
}

export default App