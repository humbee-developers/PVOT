import RelatedServices from "../../../components/relatedServices/RelatedServices";
import leftImage from "../../../images/inner-image1-2.png";
import LeftImage from "../../../components/leftImageRightSliderImage/LeftImage";
import RightSlider from "../../../components/leftImageRightSliderImage/RightSlider";
import rightTopImage from "../../../images/inner-image1-4.png";
import rightBottomImage from "../../../images/inner-image1-5.png";
import RightSliderImage from "../../../components/leftImageRightSliderImage/RightSliderImage";
import "../../../components/leftImageRightSliderImage/leftImageRightSliderImage.css";

const BrandingAdvertising = () => {
  return (
    <>
      <div>BrandingAdvertising</div>

      {/* Left right image slider  start */}

      <div className="leftImageRightSliderImage">
        <div className="leftImageRightSliderImage_container">
          <div className="leftImageRightSliderImage_wrapper">
            <LeftImage image={leftImage} />
            <div className="leftImageRightSliderImage_right">
              <div className="leftImageRightSliderImage_right_top">
                <RightSlider
                  title1={"Brand Identity"}
                  title2={"Brand Identity"}
                  text1={
                    "Creating almost a personification of Jolie, this beautiful wordmark feels feminine and clean. The varied weights and character angles of the custom wordmark combine to create a strong and timeless wordmark."
                  }
                  text2={
                    "Creating almost a personification of Jolie, this beautiful wordmark feels feminine and clean. The varied weights and character angles of the custom wordmark combine to create a strong and timeless wordmark."
                  }
                />
                <RightSliderImage image={rightTopImage} />
              </div>
              <div className="leftImageRightSliderImage_right_bottom">
                <RightSliderImage image={rightBottomImage} />
                <RightSlider
                  title1={"Brand Messaging"}
                  title2={"Brand Messaging"}
                  text1={
                    "The particular challenge of the brand voice definition was to communicate in a way that peaked the interest of the viewer and encouraged them to pay attention to the impact their water had on their wellness and beauty routines."
                  }
                  text2={
                    "The particular challenge of the brand voice definition was to communicate in a way that peaked the interest of the viewer and encouraged them to pay attention to the impact their water had on their wellness and beauty routines."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Left right image slider  end */}

      <RelatedServices />
    </>
  );
};

export default BrandingAdvertising;
