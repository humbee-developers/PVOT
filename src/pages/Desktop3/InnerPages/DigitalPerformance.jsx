import React from 'react'
import RelatedServices from '../../../components/relatedServices/RelatedServices'
import InnerPageHeader from "../../../../Common/innerPageHeader";
import RightSlider from "../../../components/leftImageRightSliderImage/RightSlider";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import innercloud from "../../../images/inner_cloud.png";
import innertempo from "../../../images/inner_tempo.png";
import "./DigitalPerformance.css"
const DigitalPerformance = () => {
  return (
    <div style={{backgroundColor:"black"}}>
    <InnerPageHeader header={innercloud} logo={logo} />
    <div className='innercloud_sec_outer'>
    <div className='innercloud_sec_inner_one'>
    <RightSlider className="xbxbx"  title1={"Brand Identity"}
    title2={"Brand Identity"}
    text1={
      "Creating almost a personification of Jolie, this beautiful wordmark feels feminine and clean. The varied weights and character angles of the custom wordmark combine to create a strong and timeless wordmark."
    }
    text2={
      "Creating almost a personification of Jolie, this beautiful wordmark feels feminine and clean. The varied weights and character angles of the custom wordmark combine to create a strong and timeless wordmark."
    }/>
    </div>
    <div className='innercloud_sec_inner_two'>
    <img className='innercloud_sec_inner_img' src={innertempo} alt="" />
    </div>
    </div>
    <RelatedServices />
  
    </div>
  )
}

export default DigitalPerformance