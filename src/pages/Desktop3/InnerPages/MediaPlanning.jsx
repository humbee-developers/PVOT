import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import inner_tv_lamp from "../../../images/inner_tv_lamp.png";
import podcast from "../../../images/inner_podcast.png";
import newspaper from "../../../images/inner_newspaper.png";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import "./MediaPlanning.css";
import RelatedServices from "../../../components/relatedServices/RelatedServices";
import ThreeCards from "../../../../Common/threeCards";
import ServicesInnerBigImage from "../../../../Common/ServicesInnerBigImage";
import BigServicesInnerText from "../../../../Common/ServicesInnerBigText";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";
import servicesBigImage1 from "../../../images/mediaPlaningServicesImages1.png"
import servicesBigImage2 from "../../../images/mediaPlaningServicesImages2.png"

const MediaPlanning = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <InnerPageHeader header={inner_tv_lamp} logo={logo} />
      <ThreeCards cane_image={podcast} mango_cup={newspaper} />
      <ServicesInnerBigImage image={servicesBigImage1} />
      <BigServicesInnerText
        text={"Lorem Ipsum is simply dummy text of the printing "}
      />
      <ServicesInnerBigImage image={servicesBigImage2} />
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

export default MediaPlanning;
