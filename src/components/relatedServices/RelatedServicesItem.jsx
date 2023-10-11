import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const RelatedServicesItem = ({ link, image, title }) => {
  return (
    <div className="relatedServicesItem">
      <div className="relatedServicesItem_wrapper">
        <Link to={link}>
          <div className="relatedServicesItem_card">
            <img src={image} alt="" />
            <div className="relatedServicesItem_card_text">{title}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default RelatedServicesItem;

RelatedServicesItem.propTypes = {
  link: PropTypes.any,
  image: PropTypes.any,
  title: PropTypes.string,
};
