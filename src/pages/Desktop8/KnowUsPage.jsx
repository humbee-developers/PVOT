import HeroHeading from "../Desktop6/HeroHeading/HeroHeading";
import RectangleCard from "../../../Common/RectangleCard";
import rectangleBg from "../../images/rectangle-image.png";
import Achievements from "../../components/achievements/Achievements";
import logoSectionImage from "../../images/logo_section.png";
import "./Knowus.css";
const KnowUsPage = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <HeroHeading bigHeading={"KNOW US"} />

      <div className="know-us-divider">
        <div className="know-us-title">WHAT DO WE DO?</div>
        <div className="know-us-text">
          <div className="know-us-text-inner">
            PVOT is a full-service creative agency that collaborates with game
            changers to amplify their stories and impact through thoughtful and
            strategic design. From advancing human rights to creating more
            sustainable cities and everything in between, we work to mobilize
            people around causes that spur positive change.
          </div>
        </div>
      </div>
      <div className="know-us-image-outer" style={{ marginTop: "19px" }}>
        <img
          className="know-us-image"
          src={rectangleBg}
          alt="rectangle-bg"
          style={{ width: "100%" }}
        />
      </div>
      <div style={{ backgroundColor: "white" }}>
        <Achievements />
      </div>
      <div className="clients-outer">
        <div className=" client-outer_wrapper c-clients-bg-sticky sticky_logo_section">
          <div className="clients-title ">OUR CLIENTS</div>
          <div className="clients-text">
            We’re fortunate to have worked with some amazing clients.
          </div>
        </div>
        <div className="" style={{ backgroundColor: "black" }}>
          <section id="clients_logo" className="c-section cc-clients">
            <div className="c-clients-bg logo_section_bg"></div>
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
        <img src="" alt="" />
      </div>
      <RectangleCard />
    </div>
  );
};

export default KnowUsPage;
