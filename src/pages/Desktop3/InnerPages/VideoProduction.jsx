import React from 'react'
import imx from "../../../images/yellowbg.png"
import innerCommon from "../../../images/innerbuttonimage.png"
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import imgxx from "../../../images/icecream.png"
import bottles from "../../../images/bottles.png"
import icewater from "../../../images/icewater.png";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import "./VideoProduction.css"
import RelatedServices from '../../../components/relatedServices/RelatedServices'
import ThreeCards from "../../../../Common/threeCards";
const DigitalContent = () => {
  return (
    <div  style={{backgroundColor:"black"}}>
    <InnerPageHeader header={imx} logo={logo} />
    <ThreeCards/>
    <div className="internal2_img_outer">
        <img className="internal2__img" src={imgxx} alt="" />
        <div className="internal2_img_text_outer">
          <div className="internal2_img_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente harum saepe eum dolore ipsum iste, molestiae soluta cumque sunt quisquam, quia voluptatem perferendis blanditiis! Maxime veritatis nulla mollitia eius consequatur molestias saepe inventore quisquam eveniet magnam accusantium amet, atque explicabo dolore, quo vero at sint?</div>
        </div>
      </div>


      <div className='internal2_4th_section'>
      <div className='internal2_4section'>
      <div className='internal2_4section_text'>Lorem Ipsum is simply  dummy.</div>
      </div>
      <div className="internal2_4section">
      <div className='internal2_4section_image_container'>
      <img src={icewater} alt="" />
      </div>
      </div>
      </div>



      <div className="internal2_img_outer">
        <img className="internal2__img" src={bottles} alt="" />
        <div className="internal2_img_text_outer">
          <div className="internal2_img_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente harum saepe eum dolore ipsum iste, molestiae soluta cumque sunt quisquam, quia voluptatem perferendis blanditiis! Maxime veritatis nulla mollitia eius consequatur molestias saepe inventore quisquam eveniet magnam accusantium amet, atque explicabo dolore, quo vero at sint?</div>
        </div>
      </div>
      
      <div className='common_button_custom'>
      <img src={innerCommon} alt="" />
      <a  href='/contact-us'  style={{fontSize:"25px",position:"absolute",bottom:"-209.5rem",left:"10rem"}}>Contact Now -</a>
      </div>
    <RelatedServices />
    </div>
  )
}

export default DigitalContent