import "./textImage.css";
import PropTypes from "prop-types";

const TextImage = ({ text, image }) => {
  return (
    <div className="textImage">
      <div className="common_container">
        <div className="textImage_wrapper">
          <div className="textImage_text">{text}</div>
          <div className="textImage_image">
            <img src={image} alt="text_image__image" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextImage;

TextImage.propTypes = {
  text: PropTypes.string,
  image: PropTypes.any,
};
