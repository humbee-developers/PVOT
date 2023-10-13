import RelatedServices from "../../../components/relatedServices/RelatedServices";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import leftImage from "../../../images/inner-image3-1.png";
import rightTopImage from "../../../images/inner-image3-2.png";
import rightBottomImage from "../../../images/inner-image3-3.png";
import technologyBanner from "../../../images/technology-banner.png";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import LeftImageRightSliderImage from "../../../components/leftImageRightSliderImage/LeftImageRightSliderImage";
import BigServicesInnerText from "../../../../Common/ServicesInnerBigText";
import ServicesInnerBigImage from "../../../../Common/ServicesInnerBigImage";
import servicesInnerBigImage from "../../../images/servicesInnerBigIMage.png";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";

const Technology = () => {
  return (
    <>
      <div>Technology</div>
      <InnerPageHeader header={technologyBanner} logo={logo} />
      <LeftImageRightSliderImage
        leftImage={leftImage}
        topTitle1={"Brand Identity"}
        topTitle2={"Brand Messaging"}
        topText1={ "Creating almost a personification of Jolie, this beautiful wordmark feels feminine and clean. The varied weights and character angles of the custom wordmark combine to create a strong and timeless wordmark."}

        topText2={ "Creating almost a personification of Jolie, this beautiful wordmark feels feminine and clean. The varied weights and character angles of the custom wordmark combine to create a strong and timeless wordmark." }

        rightTopImage={rightTopImage}
        bottomTitle1={"Brand Identity"}
        bottomTitle2={"Brand Messaging"}
        bottomText1={"The particular challenge of the brand voice definition was to communicate in a way that peaked the interest of the viewer and encouraged them to pay attention to the impact their water had on their wellness and beauty routines." }
        bottomText2={ "The particular challenge of the brand voice definition was to communicate in a way that peaked the interest of the viewer and encouraged them to pay attention to the impact their water had on their wellness and beauty routines." }
        rightBottomImage={rightBottomImage}/>

      <BigServicesInnerText
        text={"Lorem Ipsum is simply dummy text of the printing"} />
      <ServicesInnerBigImage image={servicesInnerBigImage} />
      
      <ServicesInnerLeftText
        text={ "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" } />
      <RelatedServices />
    </>
  );
};

export default Technology;
