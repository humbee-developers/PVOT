import PropTypes from "prop-types";

const LeftImage = ({ image }) => {
  return (
    <div className="leftImage">
      <img src={image} alt="left-image" />
    </div>
  );
};
export default LeftImage;

LeftImage.propTypes = {
  image: PropTypes.any,
};
