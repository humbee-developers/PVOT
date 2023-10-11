import RelatedServices from '../../../components/relatedServices/RelatedServices'
import LeftImage from "../../../components/leftImageRightSliderImage/LeftImage";
import RightSlider from "../../../components/leftImageRightSliderImage/RightSlider";
import RightSliderImage from '../../../components/leftImageRightSliderImage/RightSliderImage';
import InnerPageHeader from '../../../../Common/innerPageHeader';
import InnerCommonButton from "../../../../Common/innerCommonButton";
import InnerPage2 from "../../../../Common/innerPage2";
import leftImage from "../../../images/inner-image3-1.png"
import rightTopImage from "../../../images/inner-image3-2.png"
import rightBottomImage from "../../../images/inner-image3-3.png"
import technologyBanner from "../../../images/technology-banner.png"
import logo from "../../../images/PVOT-Design-Final-Logo-White.png"
import hero from "../../../images/hero.png"

const Technology = () => {
  return (
    <div style={{backgroundColor:"black"}}>
    <div>Technology</div>
      {/* Left right image slider  start */}
      <InnerPageHeader header={technologyBanner} logo={logo}/>

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

      <InnerPage2
        img8={hero}
        innertext={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente harum saepe eum dolore ipsum iste, molestiae soluta cumque sunt quisquam, quia voluptatem perferendis blanditiis! Maxime veritatis nulla mollitia eius consequatur molestias saepe inventore quisquam eveniet magnam accusantium amet, atque explicabo dolore, quo vero at sint?"
        }
        internalHeader={"Lorem Ipsum is simply dummy text of the printing  "}
      />

      <InnerCommonButton />

      {/* Left right image slider  end */}
    <RelatedServices />
    </div>
  )
}

export default Technology