import "./heroHeading.css";
const HeroHeading = (props) => {
  return (
    <div className="hero_heading">
      <h1>{props.title}</h1>
    </div>
  );
};
export default HeroHeading;
