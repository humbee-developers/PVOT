import "./servicesPageCardItem.css";
import PropTypes from "prop-types";

export default function ServicesPageCardItem({
  index,
  title,
  setHoverImage,
  description,
}) {
  return (
    <div
      onMouseEnter={() => {
        setHoverImage({ active: true, index });
      }}
      onMouseLeave={() => {
        setHoverImage({ active: false, index });
      }}
      className={"project"}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

ServicesPageCardItem.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  setHoverImage: PropTypes.func,
  description: PropTypes.string,
};
