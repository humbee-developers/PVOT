import CareerCard from "../../components/careerCard/CareerCard";
import HeroHeading from "../Desktop6/HeroHeading/HeroHeading";
import RectangleCard from "../../../Common/RectangleCard";
const CareerPage = () => {
  return (
    <div className="career_page" style={{ backgroundColor: "#000" }}>
      <HeroHeading bigHeading={"Careers"} hoverText={"Our Servicessss-"} />
      <CareerCard />
      <RectangleCard />
    </div>
  );
};
export default CareerPage;
