import React from 'react'
import innerlaptop from "../../../images/inner_laptop.png"
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import RelatedServices from '../../../components/relatedServices/RelatedServices'
import InnerPageHeader from "../../../../Common/innerPageHeader";
const DigitalContent = () => {
  return (
   <div  style={{backgroundColor:"black"}}>
   <InnerPageHeader header={innerlaptop} logo={logo} />
   <RelatedServices />
   </div>
    
    
  )
}

export default DigitalContent