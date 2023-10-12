import RelatedServices from "../../../components/relatedServices/RelatedServices";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import FlexImages from "../../../../Common/flexImages";
import inner_header_e_commerce from "../../../images/inner_e_commerce_header_image.png";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import leftImage from "../../../images/inner-image7-1.png";
import delivery_boy from "../../../images/inner_delivery_boy.png";
import girl_shopping from "../../../images/inner_girl_shopping.png";
import rightTopImage from "../../../images/inner-image7-2.png";
import rightBottomImage from "../../../images/inner-image7-3.png";
import LeftImageRightSliderImage from "../../../components/leftImageRightSliderImage/LeftImageRightSliderImage";
import BigServicesInnerText from "../../../../Common/ServicesInnerBigText";

const Ecommerce = () => {
  return (
    <div style={{backgroundColor:"black"}}>
    <InnerPageHeader header={inner_header_e_commerce} logo={logo} />
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
      <FlexImages image1={delivery_boy} image2={girl_shopping} text1={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "} text2={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "}/>
      <InnerCommonButton />
      <RelatedServices />
    </div>
  );
};

export default Ecommerce;
