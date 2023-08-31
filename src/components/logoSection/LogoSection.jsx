import logoSectionImage from "../../images/logo_section.png";
// import leftImage from "../../images/logo_section_left.png";
import rightImage from "../../images/contact-us.svg";
import "./logoSection.css";

const LogoSection = () => {
  return (
    <div className="logo_section">
      <div className="logo_section_wrapper">
        <div className="logo_section_heading_sec">
          {/* <div className="logo_section_bgHeading">
            Growth
            <div className="logo_section_heading">
              <h2>We thank our partners and clients</h2>
            </div>
          </div> */}
          <div className="c-clients-bg-sticky">
            <div className="c-clients-bg-logo">
              <div className="c-text-wrapper cc-people">
                <div className="c-title-4 cc-bold">We thank our </div>
                <div className="c-clients-words">
                  <div
                    data-w-id="0d92ac70-188b-eaec-0989-3053937ea7ca"
                    className="c-title-4 cc-bold"
                  >
                    people
                  </div>
                  <div
                    data-w-id="3c2df8c3-511e-8cc5-2dae-7e225afab2c4"
                    className="c-title-4 cc-bold"
                  >
                    partners and clients
                  </div>
                </div>
              </div>

              <div className="c-title-1 cc-opacity-5">GROWTH</div>
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
