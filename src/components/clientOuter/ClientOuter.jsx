import logoSectionImage from "../../images/logo_section.png";
import "./clientOuter.css";

const ClientOuter = () => {
  return (
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
  );
};

export default ClientOuter;
