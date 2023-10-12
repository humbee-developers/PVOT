import LeftImage from "./LeftImage";
import RightSlider from "./RightSlider";
import RightSliderImage from "./RightSliderImage";
import PropTypes from "prop-types";

const LeftImageRightSliderImage = ({
  leftImage,
  rightTopImage,
  rightBottomImage,
  topTitle1,
  topTitle2,
  topText1,
  topText2,
  bottomTitle1,
  bottomTitle2,
  bottomText1,
  bottomText2,
}) => {
  return (
    <div className="leftImageRightSliderImage">
      <div className="leftImageRightSliderImage_container">
        <div className="leftImageRightSliderImage_wrapper">
          <LeftImage image={leftImage} />
          <div className="leftImageRightSliderImage_right">
            <div className="leftImageRightSliderImage_right_top">
              <RightSlider
                title1={topTitle1}
                title2={topTitle2}
                text1={topText1}
                text2={topText2}
              />
              <RightSliderImage image={rightTopImage} />
            </div>
            <div className="leftImageRightSliderImage_right_bottom">
              <RightSliderImage image={rightBottomImage} />
              <RightSlider
                title1={bottomTitle1}
                title2={bottomTitle2}
                text1={bottomText1}
                text2={bottomText2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftImageRightSliderImage;

LeftImageRightSliderImage.propTypes = {
  leftImage: PropTypes.any,
  rightTopImage: PropTypes.any,
  rightBottomImage: PropTypes.any,
  topTitle1: PropTypes.string,
  topTitle2: PropTypes.string,
  topText1: PropTypes.string,
  topText2: PropTypes.string,
  bottomTitle1: PropTypes.string,
  bottomTitle2: PropTypes.string,
  bottomText1: PropTypes.string,
  bottomText2: PropTypes.string,
};
