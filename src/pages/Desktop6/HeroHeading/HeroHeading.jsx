import "./heroHeading.css";
import PropTypes from "prop-types";
const HeroHeading = ({ contactUs }) => {
  return (
    <div className="hero_heading">
      <h1>{contactUs}</h1>
    </div>
  );
};
export default HeroHeading;

HeroHeading.propTypes = {
  contactUs: PropTypes.string,
};
