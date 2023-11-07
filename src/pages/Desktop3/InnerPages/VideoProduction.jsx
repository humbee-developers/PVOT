import imx from "../../../images/videoProductionBanner.png";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import imgxx from "../../../images/icecream.png";
import bottles from "../../../images/bottles.png";
import icewater from "../../../images/icewater.png";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import RelatedServices from "../../../components/relatedServices/RelatedServices";
import ThreeCards from "../../../../Common/threeCards";
import ServicesInnerBigImage from "../../../../Common/ServicesInnerBigImage";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";
import canImage from "../../../images/canbottle.png";
import bottleImage from "../../../images/inner-image2-2.png";
import TextImage from "../../../components/textImage/TextImage";
const DigitalContent = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <InnerPageHeader
        header={imx}
        logo={logo}
        inner_ani_text1={"Video Production"}
        inner_ani_text2={"and Photography"}
        overViewHeading={"OVERVIEW"}
        servicesHeading={"SERVICES"}
        overViewText={
          "grab your popcorn (or camera), and let's dive into a world where the ordinary becomes art, and pixels party like it's 1999. It's time to roll with camera, action, and a dash of humor"
        }
        servicesText={
          "Videography, corporate Videos, product photography, Motion Graphics and Animation."
        }
      />
      <ThreeCards
        cane_image={canImage}
        mango_cup={bottleImage}
        title1={"Videography"}
        title2={"Corporate Videos"}
        title3={"Product Photography"}
        title4={"Motion Graphics and Animation"}
        text1={"Lights, camera, we're the action! We make every frame fabulous, even if the actors are just products and the scripts are more like bullet points."}
        text2={" We take 'serious business' and turn it into 'seriously entertaining.' Corporate videos are our playground, and we're the jungle gym for your brand's charisma."}
        text3={"Forget the top models; your products are the real stars here. We make them look so good, they can win a beauty pageant."}
        text4={"Ever seen a video that's so visually epic, it makes your jaw drop? Yep, we're the ones responsible for those 'whoa' moments. Think of us as visual tricksters, turning your content into a magic show."}
      />
      <ServicesInnerBigImage image={imgxx} />
      <ServicesInnerLeftText
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }
      />
      <TextImage text={"Your Story, Our Lens"} image={icewater} />
      <ServicesInnerBigImage image={bottles} />
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

export default DigitalContent;
