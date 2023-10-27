import "./coreTeam.css";
import HeadingAndContent from "../headingAndContent_for_knowUs/HeadingAndContent";
import CoreTeamCard from "./coreTeamCard/CoreTeamCard";
import coreTeamImage1 from "../../images/coreTeam1.png";
import coreTeamImage2 from "../../images/coreTeam2.png";
import coreTeamImage3 from "../../images/coreTeam3.png";
import coreTeamImage4 from "../../images/coreTeam4.png";
import coreTeamImage5 from "../../images/coreTeam5.png";
import coreTeamImage6 from "../../images/coreTeam6.png";

const CoreTeam = () => {
  return (
    <div className="coreTeam">
      <HeadingAndContent
        title={"CORE TEAM"}
        text={"We don't just think outside the box; we live outside of it."}
      />
      <div className="" style={{ backgroundColor: "black" }}>
        <div className="c-clients-bg logo_section_bg"></div>
        <div className="coreCard_inner">
          <div className="c-clients-content">
            <div
              data-w-id="42bfb461-4030-d7d0-1111-4b498a8ae963"
              className="coreTeam_sec"
            >
              <div className="coreTeam_wrapper">
                <CoreTeamCard
                  image={coreTeamImage1}
                  btnText={"Jacob Collins, UI Designer"}
                />
                <CoreTeamCard
                  image={coreTeamImage2}
                  btnText={"William Niven, Founder"}
                />
                <CoreTeamCard
                  image={coreTeamImage3}
                  btnText={"Marc H, Marketing Director"}
                />
                <CoreTeamCard
                  image={coreTeamImage4}
                  btnText={"Jacob Collins, UI Designer"}
                />
                <CoreTeamCard
                  image={coreTeamImage5}
                  btnText={"William Niven, Founder"}
                />
                <CoreTeamCard
                  image={coreTeamImage6}
                  btnText={"Marc H, Marketing Director"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoreTeam;
