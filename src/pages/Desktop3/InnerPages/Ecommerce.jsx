import RelatedServices from "../../../components/relatedServices/RelatedServices";
import leftImage from "../../../images/inner-image7-1.png";
import rightTopImage from "../../../images/inner-image7-2.png";
import rightBottomImage from "../../../images/inner-image7-3.png";
import LeftImageRightSliderImage from "../../../components/leftImageRightSliderImage/LeftImageRightSliderImage";
import BigServicesInnerText from "../../../../Common/ServicesInnerBigText";

const Ecommerce = () => {
  return (
    <>
      <div>Ecommerce</div>
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
      <BigServicesInnerText text={"Lorem Ipsum is simply dummy text of the printing"} />
      <RelatedServices />
    </>
  );
};

export default Ecommerce;
