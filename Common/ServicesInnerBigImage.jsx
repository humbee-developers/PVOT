import PropTypes from "prop-types";
import "./servicesInnerBigImage.css"

const ServicesInnerBigImage = ({ image }) => {
  return (
    <div className="servicesInnerBigImage">
      <div className="common_container">
        <div className="servicesInnerBigImage_wrapper">
          <img
            className="servicesInnerBigImage_image"
            src={image}
            alt="servicesInnerBigImage"
          />
        </div>
      </div>
    </div>
  );
};
export default ServicesInnerBigImage;

ServicesInnerBigImage.propTypes = {
  image: PropTypes.any,
};
