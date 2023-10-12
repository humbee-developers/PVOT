import innerlaptop from "../../../images/inner_laptop.png";
import innerglobal from "../../../images/inner_global.png";
import innerglobal2 from "../../../images/inner_global2.png";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import profit from "../../../images/inner_profit.png";
import seo from "../../../images/inner_seo.png";
import innerAi from "../../../images/inner_ai.png";
import RelatedServices from "../../../components/relatedServices/RelatedServices";
import RightSlider from "../../../components/leftImageRightSliderImage/RightSlider";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import SeventyThirty from "../../../../Common/SeventyThirty";
import InnerPage2 from "../../../../Common/innerPage2";
import "./digitalcontent.css"
const DigitalContent = () => {
  return (
   <div  style={{backgroundColor:"black"}}>
   <InnerPageHeader header={innerlaptop} logo={logo} />
   <div className='similar_cards_outer'>
   <div className='similar_cards1'>
   <img src={innerglobal} alt="" />
   </div>
   <div className='similar_cards2'>
   <RightSlider className="xbxbx"  title1={"Brand Identity"}
    title2={"Brand Identity"}
    text1={
      "Creating almost a personification of Jolie, this beautiful wordmark feels feminine and clean. The varied weights and character angles of the custom wordmark combine to create a strong and timeless wordmark."
    }
    text2={
      "Creating almost a personification of Jolie, this beautiful wordmark feels feminine and clean. The varied weights and character angles of the custom wordmark combine to create a strong and timeless wordmark."
    }/>
   </div>
   <div className='similar_cards3'>
   <img src={innerglobal2} alt="" />
   </div>
   </div>
   <SeventyThirty seventy_img={profit} thirty_img={seo}/>

<InnerPage2
        img8={innerAi}
        innertext={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente harum saepe eum dolore ipsum iste, molestiae soluta cumque sunt quisquam, quia voluptatem perferendis blanditiis! Maxime veritatis nulla mollitia eius consequatur molestias saepe inventore quisquam eveniet magnam accusantium amet, atque explicabo dolore, quo vero at sint?"
        }
        internalHeader={"Lorem Ipsum is simply dummy text of the printing  "}
      /> 
     
      <div>
        <InnerCommonButton />
      </div>
      <RelatedServices />
    </div>
  );
};

export default DigitalContent;
