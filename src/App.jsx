import React from 'react';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';
const App = () => {
  return (
    <div >
<Header/>
   <HeroSection/>
   <Portfolio/>
   <ContactUs/>
   <Footer/>
  
  </div>
  )
}

export default App