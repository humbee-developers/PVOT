import RelatedServices from "../../../components/relatedServices/RelatedServices";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import FlexImages from "../../../../Common/flexImages";
import inner_header_e_commerce from "../../../images/eCommerceBanner.png";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import leftImage from "../../../images/inner-image7-1.png";
import delivery_boy from "../../../images/inner_delivery_boy.png";
import girl_shopping from "../../../images/inner_girl_shopping.png";
import rightTopImage from "../../../images/inner-image7-2.png";
import rightBottomImage from "../../../images/inner-image7-3.png";
import LeftImageRightSliderImage from "../../../components/leftImageRightSliderImage/LeftImageRightSliderImage";
import BigServicesInnerText from "../../../../Common/ServicesInnerBigText";
import Twenty_Five_Fifty from "../../../../Common/twenty_Five_Fifty";

const Ecommerce = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <InnerPageHeader
        header={inner_header_e_commerce}
        logo={logo}
        inner_ani_text1={"E-commerce Strategy"}
        inner_ani_text2={"E-commerce Strategy"}
        overViewHeading={"OVERVIEW"}
        servicesHeading={"SERVICES"}
        overViewText={
          "Here is the digital marketplace of E-Commerce Strategy and Execution, where we don't just make sales; we make digital dreams come true! Think of us as the retail therapists who ensure your brand's online store isn't just open for business but booming."
        }
        servicesText={
          "Marketplace Mastery, E-commerce Website Design, Product Optmization, Digital Advertising, Social Commerce Integration, Payment Gateway Perfection, Secure E-Commerce Operations"
        }
      />
      <LeftImageRightSliderImage
        leftImage={leftImage}
        topTitle1={"Marketplace Mastery"}
        topTitle2={"E-Commerce Website Design"}
        topTitle3={"Product Optimization"}
        topText1={
          "We navigate the bustling e-commerce marketplaces, turning your brand into the preferred choice for online shoppers."
        }
        topText2={
          "We craft digital storefronts that don't just display products but create experiences, making your brand unforgettable."
        }
        topText3={
          "We sprinkle digital fairy dust on your products, making them the stars of the digital show and turning potential customers into loyal fans."
        }
        rightTopImage={rightTopImage}
        bottomTitle1={"Digital Advertising"}
        bottomTitle2={"Social Commerce Integration"}
        bottomTitle3={"Payment Gateway Perfection"}
        bottomText1={
          "We create ad campaigns that don't just grab attention; they inspire action, turning clicks into conversions."
        }
        bottomText2={
          "In the era of digital window shopping, we're the architects who build bridges between your brand's social media presence and e-commerce success. Your brand doesn't just engage on social media; it converts likes into sales."
        }
        bottomText3={
          "We're the digital cashiers who make sure the checkout process is smoother than a silk slide. Your customers don't just buy; they shop with the ease and confidence your brand provides."
        }
        rightBottomImage={rightBottomImage}
      />
      <BigServicesInnerText text={"Where Every Click Leads to a Sale!"} />
      <Twenty_Five_Fifty />
      <FlexImages
        image1={delivery_boy}
        image2={girl_shopping}
        text1={
          "E-Commerce isn't rocket science. It's a science of how to make your customers click 'Buy Now' with a grin."
        }
        text2={
          "We're the secret sauce behind your brand's e-commerce success. Don't worry; we won't reveal the recipe – it's too delicious to share!"
        }
      />
      <InnerCommonButton />
      <RelatedServices />
    </div>
  );
};

export default Ecommerce;
