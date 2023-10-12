import RelatedServices from "../../../components/relatedServices/RelatedServices";

import "./IntegratedMarketing.css";
import BigServicesInnerText from "../../../../Common/ServicesInnerBigText";
import ServicesInnerLeftText from "../../../../Common/ServicesInnerLeftText";
const IntegratedMarketing = () => {
  return (
    <div className="asdf" style={{ backgroundColor: "black" }}>
      <BigServicesInnerText
        text={"Lorem Ipsum is simply dummy text of the printing"}
      />
      <ServicesInnerLeftText
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }
      />
      <RelatedServices />
    </div>
  );
};

export default IntegratedMarketing;
