import Rectangle1 from "../../images/Rectangle1.png";
import Rectangle2 from "../../images/Rectangle2.png";
import Rectangle3 from "../../images/Rectangle3.png";
import Rectangle4 from "../../images/Rectangle4.png";
import Rectangle5 from "../../images/Rectangle5.png";
import Rectangle6 from "../../images/Rectangle6.png";
import Rectangle7 from "../../images/Rectangle7.png";
import Rectangle8 from "../../images/Rectangle8.png";
import logoSectionImage from "../../images/logo_section.png";
import { useInView } from "react-intersection-observer";
import "./ourTeam.css";

const OurTeam = () => {
  const [ref, inView] = useInView(500);

  return (
    <div className="" style={{ backgroundColor: "black", padding: "0 0 30px" }}>
      <section id="clients" className="c-section team_client cc-clients">
        <div className="c-clients-bg-sticky">
          <div className="c-clients-bg">
            <div className="c-text-wrapper cc-people">
              <div className="c-title-4 cc-bold">We thank our</div>
              <div className="c-clients-words">
                {inView !== true && (
                  <div
                    data-w-id="0d92ac70-188b-eaec-0989-3053937ea7ca"
                    className={`c-title-4 cc-bold ${
                      inView !== true && "peopleText"
                    }`}
                  >
                    {" "}
                    people
                  </div>
                )}
                {inView && (
                  <div
                    data-w-id="3c2df8c3-511e-8cc5-2dae-7e225afab2c4"
                    className={`c-title-4 cc-bold ${inView && "clientText"}`}
                  >
                    partners and clients
                  </div>
                )}
              </div>
            </div>

            <div className="c-title-1 cc-opacity-5">GROWTH</div>
          </div>
        </div>
        <div className="c-container cc-relative">
          <div className="c-clients-content">
            <div
              data-w-id="42bfb461-4030-d7d0-1111-4b498a8ae963"
              className="c-team"
            >
              <div className="c-team-card">
                <div className="c-section-divider cc-black-bg cc-space-between cc-no-border">
                  <div className="c-section-divider_circle cc-white"></div>
                  <div className="c-text-5 cc-tablet_hide">Web Designer</div>
                </div>
                <img
                  src={Rectangle1}
                  loading=" "
                  alt=""
                  className="c-team-card_image"
                />
                <div className="c-team_name">
                  <div className="c-text-3 cc-bold">Emily Anderson</div>
                </div>
              </div>
              <div className="c-team-card">
                <div className="c-section-divider cc-black-bg cc-space-between cc-no-border">
                  <div className="c-section-divider_circle cc-white"></div>
                  <div className="c-text-5 cc-tablet_hide">Web designer</div>
                </div>
                <img
                  src={Rectangle2}
                  loading="lazy"
                  alt=""
                  className="c-team-card_image"
                />
                <div className="c-team_name">
                  <div className="c-text-3 cc-bold">Jackson Martinez</div>
                </div>
              </div>
              <div className="c-team-card">
                <div className="c-section-divider cc-black-bg cc-space-between cc-no-border">
                  <div className="c-section-divider_circle cc-white"></div>
                  <div className="c-text-5 cc-tablet_hide">Web designer</div>
                </div>
                <img
                  src={Rectangle3}
                  loading="lazy"
                  alt=""
                  className="c-team-card_image"
                />
                <div className="c-team_name">
                  <div className="c-text-3 cc-bold">Amelia Davis</div>
                </div>
              </div>
              <div className="c-team-card">
                <div className="c-section-divider cc-black-bg cc-space-between cc-no-border">
                  <div className="c-section-divider_circle cc-white"></div>
                  <div className="c-text-5 cc-tablet_hide">Web designer</div>
                </div>
                <img
                  src={Rectangle4}
                  loading="lazy"
                  alt=""
                  className="c-team-card_image"
                />
                <div className="c-team_name">
                  <div className="c-text-3 cc-bold">Liam Johnson</div>
                </div>
              </div>
              <div className="c-team-card">
                <div className="c-section-divider cc-black-bg cc-space-between cc-no-border">
                  <div className="c-section-divider_circle cc-white"></div>
                  <div className="c-text-5 cc-tablet_hide">Web designer</div>
                </div>
                <img
                  src={Rectangle5}
                  loading="lazy"
                  alt=""
                  className="c-team-card_image"
                />
                <div className="c-team_name">
                  <div className="c-text-3 cc-bold">Ethan Garcia</div>
                </div>
              </div>
              <div className="c-team-card">
                <div className="c-section-divider cc-black-bg cc-space-between cc-no-border">
                  <div className="c-section-divider_circle cc-white"></div>
                  <div className="c-text-5 cc-tablet_hide">Web Designer</div>
                </div>
                <img
                  src={Rectangle6}
                  loading="lazy"
                  alt=""
                  className="c-team-card_image"
                />
                <div className="c-team_name">
                  <div className="c-text-3 cc-bold">Harper Johnson</div>
                </div>
              </div>
              <div className="c-team-card">
                <div className="c-section-divider cc-black-bg cc-space-between cc-no-border">
                  <div className="c-section-divider_circle cc-white"></div>
                  <div className="c-text-5 cc-tablet_hide">Web designer</div>
                </div>
                <img
                  src={Rectangle7}
                  loading="lazy"
                  alt=""
                  className="c-team-card_image"
                />
                <div className="c-team_name">
                  <div className="c-text-3 cc-bold">Noah Williams</div>
                </div>
              </div>
              <div className="c-team-card">
                <div className="c-section-divider cc-black-bg cc-space-between cc-no-border">
                  <div className="c-section-divider_circle cc-white"></div>
                  <div className="c-text-5 cc-tablet_hide">Web designer</div>
                </div>
                <img
                  src={Rectangle8}
                  loading="lazy"
                  alt=""
                  className="c-team-card_image"
                />
                <div className="c-team_name">
                  <div className="c-text-3 cc-bold">Aiden Rodriguez</div>
                </div>
              </div>
            </div>
            <div className="logo_image" ref={ref}>
              <img src={logoSectionImage} alt="team" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
