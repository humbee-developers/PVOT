import React from "react";
import RelatedServices from '../../../components/relatedServices/RelatedServices'
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
const IntegratedMarketing = () => {
  return (
    <div className="asdf" style={{ backgroundColor: "black" }}>
    <InnerPageHeader header={three_dlaptop} logo={logo} />
    <FlexImages image1={inner_chart} image2={inner_graph} />
    <SeventyThirty seventy_img={four_circle} thirty_img={space_circle}/>
    <InnerCommonButton />
      <RelatedServices />
    </div>
  );
};

export default IntegratedMarketing;
