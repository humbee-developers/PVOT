import BlogCard from "../../components/blog/BlogCard";
import HeroHeading from "../Desktop6/HeroHeading/HeroHeading";

const MediaPage = () => {
  return (
    <div className="media" style={{ backgroundColor: "#000" }}>
      <HeroHeading bigHeading={"Media"}  hoverText={"Our Servicessss-"} />
      <BlogCard />
    </div>
  );
};
export default MediaPage;
