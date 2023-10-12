import React from "react";
import RelatedServices from '../../../components/relatedServices/RelatedServices'
import BigServicesInnerText from "../../../../Common/ServicesInnerBigText";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import SeventyThirty from "../../../../Common/SeventyThirty";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import FlexImages from  "../../../../Common/flexImages";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import three_dlaptop  from "../../../images/inner_3d_laptop.png";
import inner_chart from "../../../images/inner_chart.png";
import inner_graph from "../../../images/inner_graph.png";
import four_circle from "../../../images/inner_four_circle.png";
import space_circle from "../../../images/inner_space_circle.png";
import "./IntegratedMarketing.css";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";
const IntegratedMarketing = () => {
  return (
    <div className="asdf" style={{ backgroundColor: "black" }}>
    <InnerPageHeader header={three_dlaptop} logo={logo} />
    <FlexImages image1={inner_chart} image2={inner_graph} />
    <BigServicesInnerText
        text={"Lorem Ipsum is simply dummy text of the printing"}
      />
    <SeventyThirty seventy_img={four_circle} thirty_img={space_circle}/>
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

export default IntegratedMarketing;

