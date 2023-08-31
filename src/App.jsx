import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUsPage from "./pages/Desktop6/ContactUsPage";
import Layout from "./components/layout/Layout";
import ServicePage from "./pages/Desktop3/ServicesPage";
import PortfolioPage from "./pages/Desktop4/PortfolioPage";
import CareerPage from "./pages/Desktop5/CareersPage";
import MediaPage from "./pages/Desktop7/MediaPage";
const App = () => {
  return (
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
  );
};

export default App;
