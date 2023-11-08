import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUsPage from "./pages/Desktop6/ContactUsPage";
import Layout from "./components/layout/Layout";
import ServicePage from "./pages/Desktop3/ServicesPage";
import PortfolioPage from "./pages/Desktop4/PortfolioPage";
import CareerPage from "./pages/Desktop5/CareersPage";
import MediaPage from "./pages/Desktop7/MediaPage";
import KnowUsPage from "./pages/Desktop8/KnowUsPage";
import "./app.css";
import DigitalContent from "./pages/Desktop3/InnerPages/DigitalContent";
import IntegratedMarketing from "./pages/Desktop3/InnerPages/IntegratedMarketing";
import DigitalPerformance from "./pages/Desktop3/InnerPages/DigitalPerformance";
import VideoProduction from "./pages/Desktop3/InnerPages/VideoProduction";
import Technology from "./pages/Desktop3/InnerPages/Technology";
import MediaPlanning from "./pages/Desktop3/InnerPages/MediaPlanning";
import Ecommerce from "./pages/Desktop3/InnerPages/Ecommerce";
import BrandingAdvertising from "./pages/Desktop3/InnerPages/BrandingAdvertising";
import ScrollTop from "./components/scrollTop/ScrollTop";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/loader/Loader";
import { useState } from "react";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
    document.body.style.cursor = "default";
    window.scrollTo(0, 0);
  }, 2000);

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      <Layout>
        <ScrollTop />
        <Routes>
          <Route path="/pvot" element={<Home />} />
          <Route path="/pvot/contact-us" element={<ContactUsPage />} />
          <Route path="/pvot/services" element={<ServicePage />} />
          <Route path="/pvot/portfolio" element={<PortfolioPage />} />
          <Route path="/pvot/career" element={<CareerPage />} />
          <Route path="/pvot/blog" element={<MediaPage />} />
          <Route path="/pvot/knowUs" element={<KnowUsPage />} />
          <Route path="/pvot/digital-content" element={<DigitalContent />} />
          <Route
            path="/pvot/integrated-marketing"
            element={<IntegratedMarketing />}
          />
          <Route path="/pvot/digital-performance" element={<DigitalPerformance />} />
          <Route path="/pvot/video-production" element={<VideoProduction />} />
          <Route path="/pvot/technology" element={<Technology />} />
          <Route path="/pvot/e-commerce" element={<Ecommerce />} />
          <Route path="/pvot/media-planning" element={<MediaPlanning />} />
          <Route
            path="/pvot/branding-advertising"
            element={<BrandingAdvertising />}
          />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
