import logoSectionImage from "../../images/logo_section.png";
import HeadingAndContent from "../headingAndContent_for_knowUs/HeadingAndContent";
import "./clientOuter.css";

const ClientOuter = () => {
  return (
    <div className="clients-outer">
      <HeadingAndContent
        title={"OUR CLIENTS"}
        text={"We’re fortunate to have worked with some amazing clients."}
      />
      <div className="" style={{ backgroundColor: "black" }}>
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
      </div>
    </div>
  );
};

export default ClientOuter;
