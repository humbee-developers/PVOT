import PropTypes from "prop-types";
import "./servicesInnerBigText.css";
const BigServicesInnerText = ({ text }) => {
  return (
    <div className="internal_4th_header">
      <div className="common_container">
        <div className="internal_4th_header_outer">
          <div className="internal_4th_header_text">{text}</div>
        </div>
      </div>
    </div>
  );
};
export default BigServicesInnerText;

BigServicesInnerText.propTypes = {
  text: PropTypes.string,
};
