import React from 'react'
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import inner_tv_lamp from "../../../images/inner_tv_lamp.png";
import podcast from "../../../images/inner_podcast.png";
import newspaper from "../../../images/inner_newspaper.png";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import "./MediaPlanning.css"
import RelatedServices from '../../../components/relatedServices/RelatedServices'
import ThreeCards from "../../../../Common/threeCards";

const MediaPlanning = () => {
  return (
    <div style={{backgroundColor:"black"}}>
    <InnerPageHeader header={inner_tv_lamp} logo={logo} />
    <ThreeCards cane_image={podcast} mango_cup={newspaper}/>
    <InnerCommonButton />
    <RelatedServices />
    </div>
  )
}

export default MediaPlanning;
