import imx from "../../../images/brandBanner.png";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import RelatedServices from "../../../components/relatedServices/RelatedServices";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import FlexImages from "../../../../Common/flexImages";
import img8 from "../../../images/inner-image1-8.png";
import img9 from "../../../images/inner-image1-9.png";
import img10 from "../../../images/inner-image1-10.png";
import leftImage from "../../../images/inner-image1-2.png";
import rightTopImage from "../../../images/inner-image1-4.png";
import rightBottomImage from "../../../images/inner-image1-5.png";
import "../../../components/leftImageRightSliderImage/leftImageRightSliderImage.css";
import LeftImageRightSliderImage from "../../../components/leftImageRightSliderImage/LeftImageRightSliderImage";
import BigServicesInnerText from "../../../../Common/ServicesInnerBigText";
import ServicesInnerBigImage from "../../../../Common/ServicesInnerBigImage";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";
const BrandingAdvertising = () => {
  return (
    <div className="asdf" style={{ backgroundColor: "black" }}>
      <InnerPageHeader
        header={imx}
        logo={logo}
        inner_ani_text1={"Branding &"}
        inner_ani_text2={"Advertising"}
        overViewHeading={"OVERVIEW"}
        servicesHeading={"SERVICES"}
        overViewText={
          "Where creativity flows like coffee at a brainstorming session, and the only thing higher than our design standards is our team's caffeine consumption. It's a place where slogans are catchier than your favorite song, and logos are as iconic as your grandma's secret cookie recipe."
        }
        servicesText={
          "Brand Strategy, Logo and Visual Identity, Advertising Campaigns, Content Creation, Market Research, Public Relations (PR), Creative Concepts"
        }
      />
      <LeftImageRightSliderImage
        leftImage={leftImage}
        topTitle1={"BRAND STRATEGY"}
        topTitle2={"LOGO AND VISUAL IDENTITY:"}
        topTitle3={"ADVERTISING CAMPAIGNS"}
        topText1={
          "Think of it as giving your business a makeover – a snazzy logo, a killer tagline, and a personality that's more charming than a smooth-talking magician. We craft an identity that's so irresistible, your competitors will go green."
        }
        topText2={
          "We are the fashion designers of branding where we dress your brand up with sharp logo and a visual identity that'll make you say,'Why don't I look that good?"
        }
        topText3={
          "We're the storytellers, but with a twist. We take your brand's story and turn it into an epic blockbuster. Explosions, plot twists, and dramatic music – well, maybe not literally, but we do make it pretty exciting."
        }
        rightTopImage={rightTopImage}
        bottomTitle1={"CREATIVE CONCEPTS"}
        bottomTitle2={"CONTENT CREATION"}
        bottomTitle3={"MARKET RESEARCH"}
        bottomText1={
          "Brains are the idea factories and we think big and bold. We simply come up with concepts that turn heads and make your brand unforgettable."
        }
        bottomText2={
          "We create content that is so captivating that your favorite storyteller will have a competition."
        }
        bottomText3={
          "Our undercover spies (okay, they're just researchers) gather all the secrets of your market and competitors. We'll know your rivals better than you know your best friend."
        }
        rightBottomImage={rightBottomImage}
      />
      <BigServicesInnerText
        text={"Because your brand deserves more than just the ordinary"}
      />
      <ServicesInnerBigImage image={img8} />
      <ServicesInnerLeftText
        text={
          "helping businesses establish a strong brand presence, connect with their audience, and drive success in the market."
        }
      />
      <FlexImages
        image1={img9}
        image2={img10}
        text1={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
        }
        text2={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
        }
      />
      <InnerCommonButton />
      <RelatedServices />
    </div>
  );
};

export default BrandingAdvertising;
