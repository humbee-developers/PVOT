import innerlaptop from "../../../images/digitalContentBanner.png";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import profit from "../../../images/contentimage.png";
import seo from "../../../images/inner_seo.png";
import innerAi from "../../../images/inner_ai.png";
import RelatedServices from "../../../components/relatedServices/RelatedServices";
import InnerCommonButton from "../../../../Common/innerCommonButton";
import InnerPageHeader from "../../../../Common/innerPageHeader";
import SeventyThirty from "../../../../Common/SeventyThirty";
import ThreeCards from "../../../../Common/threeCards";
import BigServicesInnerText from "../../../../Common/ServicesInnerBigText";
import ServicesInnerBigImage from "../../../../Common/ServicesInnerBigImage";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";
import innerglobal from "../../../images/inner_global.png";
import innerglobal2 from "../../../images/inner_global2.png";
const DigitalContent = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <InnerPageHeader
        header={innerlaptop}
        logo={logo}
        inner_ani_text1={"Digital Content"}
        inner_ani_text2={"Creation and SEO"}
        overViewHeading={"OVERVIEW"}
        servicesHeading={"SERVICES"}
        overViewText={
          "Welcome to the high-energy dance floor where creativity grooves to the beat of search engine algorithms. Digital Content Creation and SEO are the dynamic duo that makes your brand the life of the online party."
        }
        servicesText={
          "Content Strategy, Content Creation, Search Engine Optimization, Keyword Magic, Social Media Sorcery, Data Wizadry "
        }
      />
      <ThreeCards
        cane_image={innerglobal}
        mango_cup={innerglobal2}
        title1={"Content Strategy"}
        title2={"Content Creation"}
        title3={"Search Engine Optimization (SEO)"}
        title4={"Keyword Magic"}
        title5={"Social Media Sorcery"}
        title6={"Data Wizardry"}
        text1={
          "We're the masterminds who concoct the perfect content cocktail, mixing a dash of SEO, a pinch of creativity, and a whole lot of strategy."
        }
        text2={
          "We turn ideas into words, and words into digital art. From blog posts to viral-worthy videos, if it's digital, we can craft it."
        }
        text3={
          "We're the Sherlock Holmes of the internet, solving the mystery of how to get your brand on the first page of Google."
        }
        text4={
          "Ever heard of the word 'SEO-vocado'? We make your content as keyword-savvy as a millennial ordering avocado toast."
        }
        text5={
          "We make social media not just social but a bustling marketplace where your brand's voice is heard."
        }
        text6={
          "We analyze data like fortune-tellers, predict trends, and tweak strategies to keep you ahead in the digital game."
        }
      />
      <SeventyThirty seventy_img={profit} thirty_img={seo} />
      <BigServicesInnerText
        text={"Where Creativity and Algorithms Have a Love Affair!"}
      />
      <ServicesInnerBigImage image={innerAi} />
      <ServicesInnerLeftText
        text={
          "We're not just content creators; we're digital storytellers, wordsmiths, and meme magicians. We don't just play with words; we play with Google's heartstrings to make sure your brand stands in the spotlight. "
        }
      />
      <InnerCommonButton />
      <RelatedServices />
    </div>
  );
};

export default DigitalContent;
