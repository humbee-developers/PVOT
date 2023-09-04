import "./heroHeading.css";
import PropTypes from "prop-types";
const HeroHeading = ({ bigHeading }) => {
  return (
    <div className="hero_heading">
      <h1>{bigHeading}</h1>
    </div>
  );
};
export default HeroHeading;

HeroHeading.propTypes = {
  bigHeading: PropTypes.string,
};
