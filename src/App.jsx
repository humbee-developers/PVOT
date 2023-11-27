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
          <Route path="/PVOT" element={<Home />} />
          <Route path="/PVOT/contact-us" element={<ContactUsPage />} />
          <Route path="/PVOT/services" element={<ServicePage />} />
          <Route path="/PVOT/portfolio" element={<PortfolioPage />} />
          <Route path="/PVOT/career" element={<CareerPage />} />
          <Route path="/PVOT/blog" element={<MediaPage />} />
          <Route path="/PVOT/knowUs" element={<KnowUsPage />} />
          <Route path="/PVOT/digital-content" element={<DigitalContent />} />
          <Route
            path="/PVOT/integrated-marketing"
            element={<IntegratedMarketing />}
          />
          <Route path="/PVOT/digital-performance" element={<DigitalPerformance />} />
          <Route path="/PVOT/video-production" element={<VideoProduction />} />
          <Route path="/PVOT/technology" element={<Technology />} />
          <Route path="/PVOT/e-commerce" element={<Ecommerce />} />
          <Route path="/PVOT/media-planning" element={<MediaPlanning />} />
          <Route
            path="/PVOT/branding-advertising"
            element={<BrandingAdvertising />}
          />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
