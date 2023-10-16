import imx from "../../../images/yellowbg.png";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import imgxx from "../../../images/icecream.png";
import bottles from "../../../images/bottles.png";
import icewater from "../../../images/icewater.png";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import RelatedServices from "../../../components/relatedServices/RelatedServices";
import ThreeCards from "../../../../Common/threeCards";
import ServicesInnerBigImage from "../../../../Common/ServicesInnerBigImage";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";
import canImage from "../../../images/canbottle.png";
import bottleImage from "../../../images/inner-image2-2.png";
import TextImage from "../../../components/textImage/TextImage";
const DigitalContent = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <InnerPageHeader header={imx} logo={logo} inner_ani_text1={"Video Production"} inner_ani_text2={"and Photography"} />
      <ThreeCards cane_image={canImage} mango_cup={bottleImage} />
      <ServicesInnerBigImage image={imgxx} />
      <ServicesInnerLeftText
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }
      />
      <TextImage text={"Lorem Ipsum is simply dummy"} image={icewater} />
      <ServicesInnerBigImage image={bottles} />
      <ServicesInnerLeftText
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }
      />
      <InnerCommonButton />
      <RelatedServices />
    </div>
  );
};

export default DigitalContent;
