import logoSectionImage from "../../images/logo_section.png";
// import leftImage from "../../images/logo_section_left.png";
import rightImage from "../../images/contact-us.svg";
import "./logoSection.css";

const LogoSection = () => {
  return (
    <div className="logo_section">
      <div className="logo_section_wrapper">
        <div className="logo_section_heading_sec">
          <div className="logo_section_bgHeading">
            Growth
            <div className="logo_section_heading">
              <h2>We thank our partners and clients</h2>
            </div>
          </div>
        </div>
        <div className="logo_section_image">
          <img src={logoSectionImage} alt="logo_section" />
        </div>
        <div className="logo_section_leftImage">
          <img src={rightImage} alt="leftImage" />
        </div>
        <div className="logo_section_rightImage">
          <img src={rightImage} alt="rightImage" />
        </div>
      </div>
    </div>
  );
};
export default LogoSection;
