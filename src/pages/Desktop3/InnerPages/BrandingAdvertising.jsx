import imx from "../../../images/inner-image-heading1.png";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import RelatedServices from "../../../components/relatedServices/RelatedServices";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import InnerPage2 from "../../../../Common/innerPage2";
import img8 from "../../../images/inner-image1-8.png";
import img9 from "../../../images/inner-image1-9.png";
import img10 from "../../../images/inner-image1-10.png";
import "./IntegratedMarketing.css";
import leftImage from "../../../images/inner-image1-2.png";
import rightTopImage from "../../../images/inner-image1-4.png";
import rightBottomImage from "../../../images/inner-image1-5.png";
import "../../../components/leftImageRightSliderImage/leftImageRightSliderImage.css";
import LeftImageRightSliderImage from "../../../components/leftImageRightSliderImage/LeftImageRightSliderImage";
const BrandingAdvertising = () => {
  return (
    <div className="asdf" style={{ backgroundColor: "black" }}>
      <InnerPageHeader header={imx} logo={logo} />

      <LeftImageRightSliderImage
        leftImage={leftImage}
        topTitle1={"Brand Identity"}
        topTitle2={"Brand Messaging"}
        topText1={
          "Creating almost a personification of Jolie, this beautiful wordmark feels feminine and clean. The varied weights and character angles of the custom wordmark combine to create a strong and timeless wordmark."
        }
        topText2={
          "Creating almost a personification of Jolie, this beautiful wordmark feels feminine and clean. The varied weights and character angles of the custom wordmark combine to create a strong and timeless wordmark."
        }
        rightTopImage={rightTopImage}
        bottomTitle1={"Brand Identity"}
        bottomTitle2={"Brand Messaging"}
        bottomText1={
          "The particular challenge of the brand voice definition was to communicate in a way that peaked the interest of the viewer and encouraged them to pay attention to the impact their water had on their wellness and beauty routines."
        }
        bottomText2={
          "The particular challenge of the brand voice definition was to communicate in a way that peaked the interest of the viewer and encouraged them to pay attention to the impact their water had on their wellness and beauty routines."
        }
        rightBottomImage={rightBottomImage}
      />

      <InnerPage2
        img8={img8}
        innertext={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente harum saepe eum dolore ipsum iste, molestiae soluta cumque sunt quisquam, quia voluptatem perferendis blanditiis! Maxime veritatis nulla mollitia eius consequatur molestias saepe inventore quisquam eveniet magnam accusantium amet, atque explicabo dolore, quo vero at sint?"
        }
        internalHeader={"Lorem Ipsum is simply dummy text of the printing  "}
      />

      <div className="internal_5th_img_outer">
        <div className="internal_5th_1">
          <img className="internal_5th_img " src={img9} alt="" />
          <div className="internal_5th_img_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the{" "}
          </div>
        </div>
        <div className="internal_5th_1">
          <img className="internal_5th_img" src={img10} alt="" />
          <div className="internal_5th_img_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the{" "}
          </div>
        </div>
      </div>

      <InnerCommonButton />
      <RelatedServices />
    </div>
  );
};

export default BrandingAdvertising;
