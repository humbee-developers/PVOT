import React from "react";
import imx from "../../../images/inner-image-heading1.png";
import logo from "../../../images/PVOT-Design-Final-Logo-White.png";
import img6 from "../../../images/inner-image1-6.png";
import img7 from "../../../images/inner-image1-7.png";
import img8 from "../../../images/inner-image1-8.png";
import img9 from "../../../images/inner-image1-9.png";
import img10 from "../../../images/inner-image1-10.png";
import "./IntegratedMarketing.css";
const IntegratedMarketing = () => {


  
  return (
    <div className="asdf" style={{ backgroundColor: "black" }}>
      <img className="internal_page1_image1" src={imx} alt="" />
      <div className="internal_page1">
        <div className="internal_page1_inner">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="internal_page1_inner1">
          <div className="internal_heading">OVERVIEW</div>
          <div className="internal_text ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            voluptas nisi libero tenetur error quis maiores maxime
            exercitationem voluptatem nesciunt, voluptatibus, et, laboriosam
            perferendis quam dicta accusamus aliquam hic possimus asperiores
            dolorem deserunt optio. Velit.
          </div>
        </div>
        <div className="internal_page1_inner2">
          <div className="internal_heading">SERVICES</div>
          <div className="internal_text">
            {" "}
            Brand Identity, Brand Messaging, Website Design, Illustration,
            Packaging Design
          </div>
        </div>
      </div>

      <div className="internal_3rd">
        <div className="inner_3rd">
          <img className="internal_3rd_img" src={img6} alt="" />
        </div>
        <div className="internal_3rd_inner">
          <img className="internal_3rd_img" src={img7} alt="" />
        </div>
      </div>
      <div className="internal_4th_img_outer">
        <img className="internal_4th_img" src={img8} alt="" />
        <div className="internal_4th_img_text_outer">
          <div className="internal_4th_img_text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            harum saepe eum dolore ipsum iste, molestiae soluta cumque sunt
            quisquam, quia voluptatem perferendis blanditiis! Maxime veritatis
            nulla mollitia eius consequatur molestias saepe inventore quisquam
            eveniet magnam accusantium amet, atque explicabo dolore, quo vero at
            sint?
          </div>
        </div>
      </div>



      <div className="internal_5th_img_outer">
      <div className="internal_5th_1">
      <img className="internal_5th_img " src={img9} alt="" />
      <div className="internal_5th_img_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur ut ratione ipsum. Delectus reiciendis ipsa rem recusandae tenetur repudiandae.</div>
      </div>
      <div className="internal_5th_1">
      <img className="internal_5th_img" src={img10} alt="" />
      <div className="internal_5th_img_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur ut ratione ipsum. Delectus reiciendis ipsa rem recusandae tenetur repudiandae.</div>
      </div>
      </div>






    </div>
  );
};

export default IntegratedMarketing;
