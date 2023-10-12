import RelatedServices from "../../../components/relatedServices/RelatedServices";
import BigServicesInnerText from "../../../../Common/ServicesInnerBigText";
import ServicesInnerBigImage from "../../../../Common/ServicesInnerBigImage";
import servicesBigImage1 from "../../../images/mediaPlaningServicesImages1.png";
import servicesBigImage2 from "../../../images/mediaPlaningServicesImages2.png";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";

const MediaPlanning = () => {
  return (
    <>
      <div>MediaPlanning</div>
      <ServicesInnerBigImage image={servicesBigImage1} />
      <BigServicesInnerText
        text={"Lorem Ipsum is simply dummy text of the printing"}
      />
      <ServicesInnerBigImage image={servicesBigImage2} />
      <ServicesInnerLeftText
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }
      />
      <RelatedServices />
    </>
  );
};

export default MediaPlanning;
