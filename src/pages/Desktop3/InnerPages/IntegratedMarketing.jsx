import RelatedServices from "../../../components/relatedServices/RelatedServices";
import BigServicesInnerText from "../../../../Common/ServicesInnerBigText";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import SeventyThirty from "../../../../Common/SeventyThirty";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import FlexImages from "../../../../Common/flexImages";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import three_dlaptop from "../../../images/integratedMarketingBanner.png";
import inner_chart from "../../../images/inner_chart.png";
import inner_graph from "../../../images/inner_graph.png";
import four_circle from "../../../images/inner_four_circle.png";
import space_circle from "../../../images/inner_space_circle.png";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";
const IntegratedMarketing = () => {
  return (
    <div className="asdf" style={{ backgroundColor: "black" }}>
      <InnerPageHeader
        header={three_dlaptop}
        logo={logo}
        inner_ani_text1={"Integrated"}
        inner_ani_text2={"Marketing Solutions"}
        overViewHeading={"OVERVIEW"}
        servicesHeading={"SERVICES"}
        overViewText={
          "Ladies and gentlemen, step right up to the spectacular world of Integrated Marketing Solutions, where your brand isn't just a star; it's the whole constellation! Think of us as the tour guides to the digital jungle, ensuring your brand not only survives but thrives."
        }
        servicesText={
          "Marketing Strategy, Content Marketing, Social Media Management, Influencer Partnerships, Campaign Management"
        }
      />
      <FlexImages image1={inner_chart} image2={inner_graph} />
      <BigServicesInnerText
        text={"Where Marketing Gets a Makeover and Your Brand Steals the Show!"}
      />
      <SeventyThirty seventy_img={four_circle} thirty_img={space_circle} />

      <ServicesInnerLeftText
        text={
          "We transform brands into digital dynamos. We're the bridge between your brand and its online destiny. Whether you're looking to climb the search engine charts, boost engagement on social media, or create an unforgettable online presence, we've got the solutions."
        }
      />
      <InnerCommonButton />
      <RelatedServices />
    </div>
  );
};

export default IntegratedMarketing;
