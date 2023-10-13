import imx from "../../../images/yellowbg.png";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import imgxx from "../../../images/icecream.png";
import bottles from "../../../images/bottles.png";
import icewater from "../../../images/icewater.png";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import "./VideoProduction.css";
import RelatedServices from "../../../components/relatedServices/RelatedServices";
import ThreeCards from "../../../../Common/threeCards";
import ServicesInnerBigImage from "../../../../Common/ServicesInnerBigImage";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";
import canImage from "../../../images/canbottle.png";
import bottleImage from "../../../images/inner-image2-2.png";
const DigitalContent = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <InnerPageHeader header={imx} logo={logo} />
      <ThreeCards cane_image={canImage} mango_cup={bottleImage} />
      <ServicesInnerBigImage image={imgxx} />
      <ServicesInnerLeftText
        text={ "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" }/>
      <div className="internal2_4th_section">
        <div className="internal2_4section">
          <div className="internal2_4section_text">
            Lorem Ipsum is simply dummy
          </div>
        </div>
        <div className="internal2_4section">
          <div className="internal2_4section_image_container">
            <img src={icewater} alt="" />
          </div>
        </div>
      </div>

      <ServicesInnerBigImage image={bottles} />
      <ServicesInnerLeftText
        text={  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" }/>
        <InnerCommonButton />
      <RelatedServices />
    </div>
  );
};

export default DigitalContent;
