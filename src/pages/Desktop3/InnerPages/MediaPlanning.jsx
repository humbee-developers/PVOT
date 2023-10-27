import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import inner_tv_lamp from "../../../images/inner_tv_lamp.png";
import podcast from "../../../images/inner_podcast.png";
import newspaper from "../../../images/inner_newspaper.png";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import RelatedServices from "../../../components/relatedServices/RelatedServices";
import ThreeCards from "../../../../Common/threeCards";
import ServicesInnerBigImage from "../../../../Common/ServicesInnerBigImage";
import BigServicesInnerText from "../../../../Common/ServicesInnerBigText";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";
import servicesBigImage1 from "../../../images/mediaPlaningServicesImages1.png";
import servicesBigImage2 from "../../../images/mediaPlaningServicesImages2.png";

const MediaPlanning = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <InnerPageHeader
        header={inner_tv_lamp}
        logo={logo}
        inner_ani_text1={"Media Planning"}
        inner_ani_text2={"and Buying"}
        overViewHeading={"OVERVIEW"}
        servicesHeading={"SERVICES"}
        overViewText={
          "In the realm of Media Planning & Buying, we're the architects of brand presence. Picture us as the navigators of your brand's journey through the digital ad-space, ensuring your message isn't just heard but resonates with your audience."
        }
        servicesText={
          "Audience Targeting, Strategic Ad Placement, Media Negotiation, Multi-Channel Advertising, Return on Investment (ROI) Tracking, Creative Campaign Concepts"
        }
      />
      <ThreeCards
        cane_image={podcast}
        mango_cup={newspaper}
        title1={"Audience Targeting"}
        title2={"Strategic Ad Placement"}
        title3={"Media Negotiation"}
        title4={"Multi-Channel Advertising"}
        title5={"Return on Investment (ROI) Tracking"}
        title6={"Creative Campaign Concepts"}
        text1={
          " We're the sharpshooters who don't just aim; we hit the bullseye with precision, ensuring your brand's message reaches the right ears."
        }
        text2={
          "We're the chess players, making moves that position your brand in the spotlight, capturing the attention and admiration it deserves."
        }
        text3={
          "We're the skilled diplomats, forging alliances that give your brand premium ad space without emptying the coffers."
        }
        text4={
          " We're the ringmasters, orchestrating a dazzling spectacle of your brand across various channels, ensuring that every platform becomes a stage for its grand performance."
        }
        text5={
          "We're the digital accountants who ensure that every investment translates into quantifiable and applause-worthy returns."
        }
        text6={
          " We're the storytellers, crafting narratives that not only engage but immerse, making your brand the epicenter of conversations."
        }
      />
      <ServicesInnerBigImage image={servicesBigImage1} />

      <BigServicesInnerText
        text={"Where We Turn Ad Space into Your Brand's Playground!"}
      />
      <ServicesInnerBigImage image={servicesBigImage2} />

      <ServicesInnerLeftText
        text={
          "Your brand isn't just a participant in the ad world; it's the director of the blockbuster, the lead actor, and the producer of an advertising symphony that leaves a resounding impact. "
        }
      />
      <InnerCommonButton />
      <RelatedServices />
    </div>
  );
};

export default MediaPlanning;
