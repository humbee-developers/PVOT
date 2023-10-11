import PropTypes from "prop-types";

const RightSliderImage = ({ image }) => {
  return (
    <div className="rightSliderImage">
      <img src={image} alt="right-image" />
    </div>
  );
};
export default RightSliderImage;

RightSliderImage.propTypes = {
  image: PropTypes.any,
};
