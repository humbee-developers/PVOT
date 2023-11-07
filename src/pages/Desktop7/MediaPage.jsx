import BlogCard from "../../components/blog/BlogCard";
import HeroHeading from "../Desktop6/HeroHeading/HeroHeading";

const MediaPage = () => {
  return (
    <div className="media" style={{ backgroundColor: "#000" }}>
      <HeroHeading bigHeading="Blogs" hoverText={"Your sucess, served fresh daily--"} />
      <BlogCard />
    </div>
  );
};
export default MediaPage;
