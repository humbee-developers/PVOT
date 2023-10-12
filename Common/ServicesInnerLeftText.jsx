import "./servicesInnerLeftText.css";
import PropTypes from "prop-types";

const ServicesInnerLeftText = ({ text }) => {
  return (
    <div className="servicesInnerLeftText">
      <div className="common_container">
        <div className="servicesInnerLeftText_wrapper">{text}</div>
      </div>
    </div>
  );
};
export default ServicesInnerLeftText;

ServicesInnerLeftText.propTypes = {
  text: PropTypes.string,
};
