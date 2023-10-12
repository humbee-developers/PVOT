import React from "react";
import imx from "../../../images/yellowbg.png";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import imgxx from "../../../images/icecream.png";
import bottles from "../../../images/bottles.png";
import icewater from "../../../images/icewater.png";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import "./VideoProduction.css"
import RelatedServices from '../../../components/relatedServices/RelatedServices'
import mango_cup from "../../../images/mangocup.png";
import can_bottle from "../../../images/canbottle.png";
import "./VideoProduction.css";
import RelatedServices from "../../../components/relatedServices/RelatedServices";

import ThreeCards from "../../../../Common/threeCards";
import ServicesInnerBigImage from "../../../../Common/ServicesInnerBigImage";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";
const DigitalContent = () => {
  return (
    <div  style={{backgroundColor:"black"}}>
    <InnerPageHeader header={imx} logo={logo} />
    <ThreeCards cane_image={can_bottle} mango_cup={mango_cup}/>
    <div className="internal2_img_outer">
        <img className="internal2__img" src={imgxx} alt="" />
        <div className="internal2_img_text_outer">
          <div className="internal2_img_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente harum saepe eum dolore ipsum iste, molestiae soluta cumque sunt quisquam, quia voluptatem perferendis blanditiis! Maxime veritatis nulla mollitia eius consequatur molestias saepe inventore quisquam eveniet magnam accusantium amet, atque explicabo dolore, quo vero at sint?</div>
        </div>
      </div>

      {/* <div className="internal2_img_outer">
        <img className="internal2__img" src={bottles} alt="" />
        <div className="internal2_img_text_outer">
          <div className="internal2_img_text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            harum saepe eum dolore ipsum iste, molestiae soluta cumque sunt
            quisquam, quia voluptatem perferendis blanditiis! Maxime veritatis
            nulla mollitia eius consequatur molestias saepe inventore quisquam
            eveniet magnam accusantium amet, atque explicabo dolore, quo vero at
            sint?
          </div>
        </div>
      </div> */}

      <ServicesInnerBigImage image={bottles} />
      <ServicesInnerLeftText
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }
      />

      <div className="innerbutton_custon_spacing">
        <InnerCommonButton />
      </div>
      <RelatedServices />
    </div>
  );
};

export default DigitalContent;
