import "./blogCard.css";
import BlogCardItem from "./blogCardItem/BlogCardItem";
import blogImage1 from "../../images/blog_1.png";

const BlogCard = () => {
  return (
    <div className="blogCard">
      <div className="blogCard_container">
        <div className="blogCard_wrapper">
          <div className="blog_heading">
            <h2>Blogs</h2>
          </div>
          <BlogCardItem image={blogImage1} />
          <BlogCardItem image={blogImage1} />
          <BlogCardItem image={blogImage1} />
          <BlogCardItem image={blogImage1} />
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
