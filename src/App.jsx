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

const App = () => {
  return (
    <>
      <Layout>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/blog" element={<MediaPage />} />
          <Route path="/knowUs" element={<KnowUsPage />} />
          <Route path="/digital-content" element={<DigitalContent />} />
          <Route
            path="/integrated-marketing"
            element={<IntegratedMarketing />}
          />
          <Route path="/digital-performance" element={<DigitalPerformance />} />
          <Route path="/video-production" element={<VideoProduction />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/e-commerce" element={<Ecommerce />} />
          <Route path="/media-planning" element={<MediaPlanning />} />
          <Route
            path="/branding-advertising"
            element={<BrandingAdvertising />}
          />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
