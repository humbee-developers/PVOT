import React from "react";
import imx from "../../../images/inner-image-heading1.png";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import InnerCommonButton from "../../../../Common/innerCommonButton"
import RelatedServices from '../../../components/relatedServices/RelatedServices'
import InnerPageHeader from "../../../../Common/innerPageHeader";
import InnerPage2 from "../../../../Common/innerPage2";
import img6 from "../../../images/inner-image1-6.png";
import img7 from "../../../images/inner-image1-7.png";
import img8 from "../../../images/inner-image1-8.png";
import img9 from "../../../images/inner-image1-9.png";
import img10 from "../../../images/inner-image1-10.png";
import "./IntegratedMarketing.css"
const BrandingAdvertising = () => {
  return (
    <div className="asdf" style={{ backgroundColor: "black" }}>
      <InnerPageHeader header={imx} logo={logo} />
      <InnerPage2
        img8={img8}
        innertext={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente harum saepe eum dolore ipsum iste, molestiae soluta cumque sunt quisquam, quia voluptatem perferendis blanditiis! Maxime veritatis nulla mollitia eius consequatur molestias saepe inventore quisquam eveniet magnam accusantium amet, atque explicabo dolore, quo vero at sint?"
        }
        internalHeader={"Lorem Ipsum is simply dummy text of the printing  "}
      />

      <div className="internal_5th_img_outer">
        <div className="internal_5th_1">
          <img className="internal_5th_img " src={img9} alt="" />
          <div className="internal_5th_img_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the{" "}
          </div>
        </div>
        <div className="internal_5th_1">
          <img className="internal_5th_img" src={img10} alt="" />
          <div className="internal_5th_img_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the{" "}
          </div>
        </div>
      </div>

      <InnerCommonButton/>
      <RelatedServices />
    </div>
  );
};

export default BrandingAdvertising;
