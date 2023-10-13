import RelatedServices from "../../../components/relatedServices/RelatedServices";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import InnerMultipleCards from "../../../../Common/innerMultipleCards";
import ThirtySeventy from "../../../../Common/ThirtySeventy";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import innercloud from "../../../images/inner_cloud.png";
import BigServicesInnerText from "../../../../Common/ServicesInnerBigText";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";
const DigitalPerformance = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <InnerPageHeader header={innercloud} logo={logo} />
      <ThirtySeventy/>
      <BigServicesInnerText
        text={"Lorem Ipsum is simply dummy text of the printing "}/>
      <div>
        <InnerMultipleCards />
        <ServicesInnerLeftText
          text={ "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}/>
        <InnerCommonButton />
      </div>
      <RelatedServices />
    </div>
  );
};

export default DigitalPerformance;
