import innerlaptop from "../../../images/inner_laptop.png";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import profit from "../../../images/inner_profit.png";
import seo from "../../../images/inner_seo.png";
import innerAi from "../../../images/inner_ai.png";
import RelatedServices from "../../../components/relatedServices/RelatedServices";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import SeventyThirty from "../../../../Common/SeventyThirty";
import ThreeCards from "../../../../Common/threeCards";
import BigServicesInnerText from "../../../../Common/ServicesInnerBigText";
import ServicesInnerBigImage from "../../../../Common/ServicesInnerBigImage";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";
import innerglobal from "../../../images/inner_global.png";
import innerglobal2 from "../../../images/inner_global2.png";
const DigitalContent = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <InnerPageHeader header={innerlaptop} logo={logo} />
      <ThreeCards cane_image={innerglobal} mango_cup={innerglobal2} />
      <SeventyThirty seventy_img={profit} thirty_img={seo} />
      <BigServicesInnerText
        text={"Lorem Ipsum is simply dummy text of the printing "}/>
      <ServicesInnerBigImage image={innerAi} />
      <ServicesInnerLeftText
        text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}/>
        <InnerCommonButton />
      <RelatedServices />
    </div>
  );
};

export default DigitalContent;
