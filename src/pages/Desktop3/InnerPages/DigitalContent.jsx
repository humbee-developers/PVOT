import innerlaptop from "../../../images/inner_laptop.png";
import innerglobal from "../../../images/inner_global.png";
import innerglobal2 from "../../../images/inner_global2.png";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import profit from "../../../images/inner_profit.png";
import seo from "../../../images/inner_seo.png";
import innerAi from "../../../images/inner_ai.png";
import RelatedServices from "../../../components/relatedServices/RelatedServices";
import RightSlider from "../../../components/leftImageRightSliderImage/RightSlider";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import SeventyThirty from "../../../../Common/SeventyThirty";
import "./digitalcontent.css";
import BigServicesInnerText from "../../../../Common/ServicesInnerBigText";
import ServicesInnerBigImage from "../../../../Common/ServicesInnerBigImage";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";
const DigitalContent = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <InnerPageHeader header={innerlaptop} logo={logo} />
  <div className="common_container">
  <div className="similar_cards_outer">
  <div className="similar_cards1">
    <img className="similar_card_img" src={innerglobal} alt="" />
  </div>
  <div className="similar_cards2">
    <RightSlider
      className="xbxbx"
      title1={"Brand Identity"}
      title2={"Brand Identity"}
      text1={
        "Creating almost a personification of Jolie, this beautiful wordmark feels feminine and clean. The varied weights and character angles of the custom wordmark combine to create a strong and timeless wordmark."
      }
      text2={
        "Creating almost a personification of Jolie, this beautiful wordmark feels feminine and clean. The varied weights and character angles of the custom wordmark combine to create a strong and timeless wordmark."
      }
    />
  </div>
  <div className="similar_cards3">
    <img className="similar_card_img" src={innerglobal2} alt="" />
  </div>
</div>
  </div>
      <SeventyThirty seventy_img={profit} thirty_img={seo} />
      <BigServicesInnerText
        text={"Lorem Ipsum is simply dummy text of the printing "}
      />
      <ServicesInnerBigImage image={innerAi} />
      <ServicesInnerLeftText
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }
      />
      <div>
        <InnerCommonButton />
      </div>
      <RelatedServices />
    </div>
  );
};

export default DigitalContent;
