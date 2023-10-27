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
  topTitle3,
  topText1,
  topText2,
  topText3,
  bottomTitle1,
  bottomTitle2,
  bottomTitle3,
  bottomText1,
  bottomText2,
  bottomText3,
}) => {
  return (
    <div className="leftImageRightSliderImage">
      <div className="common_container">
        <div className="leftImageRightSliderImage_wrapper">
          <LeftImage image={leftImage} />
          <div className="leftImageRightSliderImage_right">
            <div className="leftImageRightSliderImage_right_top">
              <RightSlider
                title1={topTitle1}
                title2={topTitle2}
                title3={topTitle3}
                text1={topText1}
                text2={topText2}
                text3={topText3}
              />
              <RightSliderImage image={rightTopImage} />
            </div>
            <div className="leftImageRightSliderImage_right_bottom">
              <RightSliderImage image={rightBottomImage} />
              <RightSlider
                title1={bottomTitle1}
                title2={bottomTitle2}
                title3={bottomTitle3}
                text1={bottomText1}
                text2={bottomText2}
                text3={bottomText3}
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
  topTitle3: PropTypes.string,
  topText1: PropTypes.string,
  topText2: PropTypes.string,
  topText3: PropTypes.string,
  bottomTitle1: PropTypes.string,
  bottomTitle2: PropTypes.string,
  bottomTitle3: PropTypes.string,
  bottomText1: PropTypes.string,
  bottomText2: PropTypes.string,
  bottomText3: PropTypes.string,
};
