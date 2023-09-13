import "./coreTeamCard.css";
import PropTypes from "prop-types";

const CoreTeamCard = ({image, btnText}) => {
  return (
    <div className="coreTeamCard">
      <div className="coreTeamCard_image">
        <img src={image} alt="coreTeam1" />
        <div className="coreTeamCard_btn hover_btn">
          <span className="btn_text">{btnText}</span>
          <span className="btn_text">{btnText}</span>
        </div>
      </div>
    </div>
  );
};
export default CoreTeamCard;

CoreTeamCard.propTypes = {
  image: PropTypes.any,
  btnText: PropTypes.string,
};
