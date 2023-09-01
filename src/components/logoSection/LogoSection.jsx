import logoSectionImage from "../../images/logo_section.png";
// import leftImage from "../../images/logo_section_left.png";
import rightImage from "../../images/contact-us.svg";
import "./logoSection.css";

import "../ourTeam/ourTeam.css";

const LogoSection = () => {
  return (
    <div classNameName="" style={{ backgroundColor: "black" }}>
      <section id="clients_logo" className="c-section cc-clients">
        <div className="c-clients-bg-sticky sticky_logo_section">
          <div className="c-clients-bg logo_section_bg">
            <div className="c-text-wrapper cc-people logo_section">
              <div className="c-title-4 cc-bold">We thank our </div>
              <div className="c-clients-words">
                <div
                  data-w-id="0d92ac70-188b-eaec-0989-3053937ea7ca"
                  className="c-title-4 cc-bold"
                >
                  clients
                </div>
                <div
                  data-w-id="3c2df8c3-511e-8cc5-2dae-7e225afab2c4"
                  className="c-title-4 cc-bold partners_and_client"
                >
                  partners and clients
                </div>
              </div>
            </div>

            <div className="c-title-1 cc-opacity-5">GROWTH</div>
            <div className="left_right_logo">
              <div className="logo_section_leftImage">
                <img src={rightImage} alt="leftImage" />
              </div>
              <div className="logo_section_rightImage">
                <img src={rightImage} alt="rightImage" />
              </div>
            </div>
          </div>
        </div>
        <div className="c-container cc-relative">
          <div className="c-clients-content">
            <div
              data-w-id="42bfb461-4030-d7d0-1111-4b498a8ae963"
              className="c-client"
            >
              <div className="c-client-card">
                <img
                  src={logoSectionImage}
                  loading="lazy"
                  alt=""
                  className="c-logo-card_image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LogoSection;
