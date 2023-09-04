import CareerCardItem from "./cardItem/CareerCardItem";
import "./careerCard.css";

const CareerCard = () => {
  return (
    <div className="careerCard">
      <div className="careerCard_container">
        <div className="careerCard_wrapper">
          <CareerCardItem />
          <CareerCardItem />
          <CareerCardItem />
          <CareerCardItem />
          <CareerCardItem />
        </div>
      </div>
    </div>
  );
};
export default CareerCard;
