import RelatedServices from "../../../components/relatedServices/RelatedServices";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import leftImage from "../../../images/inner-image3-1.png";
import rightTopImage from "../../../images/inner-image3-2.png";
import rightBottomImage from "../../../images/inner-image3-3.png";
import technologyBanner from "../../../images/technologyBanner.png";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import LeftImageRightSliderImage from "../../../components/leftImageRightSliderImage/LeftImageRightSliderImage";
import BigServicesInnerText from "../../../../Common/ServicesInnerBigText";
import ServicesInnerBigImage from "../../../../Common/ServicesInnerBigImage";
import servicesInnerBigImage from "../../../images/servicesInnerBigIMage.png";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";
import FourCards from "../../../../Common/FourCards";

const Technology = () => {
  return (
    <div style={{ background: "black" }}>
      <InnerPageHeader
        header={technologyBanner}
        logo={logo}
        inner_ani_text1={"Technology &"}
        inner_ani_text2={"Design"}
        overViewHeading={"OVERVIEW"}
        servicesHeading={"SERVICES"}
        overViewText={
          "Technology and Design is where the digital magic happens, where ideas turn into interactive experiences, and where your brand's 'cool' factor goes through the roof. where innovation shakes hands with imagination, where codes dance with colors, and where 'WOW' isn't just a word – it's a way of life."
        }
        servicesText={
          "Website Design and Development, UI/UX Design, Graphic Design, Mobile First Design, Content Management System, Interactive Design"
        }
      />
      <LeftImageRightSliderImage
        leftImage={leftImage}
        topTitle1={"Website Design and Development"}
        topTitle2={"UI/UX Design"}
        topText1={
          "We don't just build websites; we craft digital storefronts that attract, engage, and convert visitors into loyal customers. Your website isn't just a page; it's a growth engine."
        }
        topText2={
          "It's not just about making things pretty; it's about making your users stay. We create digital experiences so enjoyable that your customers will keep coming back for more."
        }
        rightTopImage={rightTopImage}
        bottomTitle1={"Graphic Design"}
        bottomTitle2={"Mobile-First Design"}
        bottomText1={
          "Good design isn't just visually pleasing; it's persuasive. We design graphics that tell a story, trigger emotions, and make your brand unforgettable."
        }
        bottomText2={
          "In a mobile-dominated world, we ensure your brand is accessible to everyone, everywhere. It's not just responsive; it's omnipresent."
        }
        rightBottomImage={rightBottomImage}
      />

      <BigServicesInnerText
        text={"From Concept to Creation: Designing Digital Excellence"}
      />
      <ServicesInnerBigImage image={servicesInnerBigImage} />
      <ServicesInnerLeftText
        text={
          "Your business isn't just online; it's outstanding. With our services, you don't just exist; you excel. Creativity knows no bounds in our tech-savvy world. Let's embark on a journey where innovation is our compass, and pixels come to life with our design expertise."
        }
      />
      <FourCards />
      <RelatedServices />
    </div>
  );
};

export default Technology;
