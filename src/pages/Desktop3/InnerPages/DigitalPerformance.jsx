import RelatedServices from "../../../components/relatedServices/RelatedServices";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import InnerMultipleCards from "../../../../Common/innerMultipleCards";
import ThirtySeventy from "../../../../Common/ThirtySeventy";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import innercloud from "../../../images/digitalPerformance.png";
import BigServicesInnerText from "../../../../Common/ServicesInnerBigText";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";
const DigitalPerformance = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <InnerPageHeader
        header={innercloud}
        logo={logo}
        inner_ani_text1={"Digital and"}
        inner_ani_text2={"Performance Marketing"}
        overViewHeading={"OVERVIEW"}
        servicesHeading={"SERVICES"}
        overViewText={
          "In the realm of Digital & Performance Marketing, we're the folks who sprinkle a little magic into your brand's online presence. Think of us as the navigators who help your brand set sail on the digital seas, with creativity as our compass and data as our North Star."
        }
        servicesText={
          "Search Engine Marketing (SEM), Pay-Per-Click (PPC) Advertising, Social Media Advertising, Conversion Rate Optimization (CRO), Performance Analytics. "
        }
      />
      <ThirtySeventy />
      <BigServicesInnerText text={"Where Pixels and Profits Collide!"} />
      <InnerMultipleCards />
      <ServicesInnerLeftText
        text={
          "In the world of Digital & Performance Marketing, where we make sure your brand doesn't just exist online; it thrives, has a good laugh, and even throws a digital party or two!"
        }
      />
      <InnerCommonButton />
      <RelatedServices />
    </div>
  );
};

export default DigitalPerformance;
