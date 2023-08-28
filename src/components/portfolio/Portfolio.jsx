import React from "react";
import img1 from "../../images/item-image.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";
import img6 from "../../images/img6.png";
import img7 from "../../images/img7.png";
import img8 from "../../images/img8.png";
import img9 from "../../images/img9.png";
import img10 from "../../images/img10.png";
import img11 from "../../images/img11.png";
import img12 from "../../images/img12.png";
import img13 from "../../images/img13.png";
import img14 from "../../images/image.png";

import "./portfolio.css"

const Portfolio = () => {
  return (
    <div className="first-div">
      <div className="development-screen">
        <div className="main-screen">
          <div className="inner-main-screen">

            <ul className="image-container-section">

              <li className="inner-image-container">
                <div className="image-outer-layer">
                  <img className="image" src={img1} alt="" />
                </div>
              </li>

              <li className="inner-image-container">
                <div className="image-outer-layer">
                  <img className="image" src={img2} alt="" />
                </div>
              </li>

              <li className="inner-image-container">
                <div className="image-outer-layer"></div>
              </li>

              <li className="inner-image-container">
                <div className="image-outer-layer">
                  <img className="image" src={img3} alt="" />
                </div>
              </li>

              <li className="inner-image-container">
                <div className="image-outer-layer">
                  <img className="image" src={img4} alt="" />
                </div>
              </li>
            </ul>


            <ul className="image-container-section">
            
            <li className="inner-image-container">
              <div className="image-outer-layer">
                <img className="image" src={img5} alt="" />
              </div>
            </li>

            <li className="inner-image-container">
              <div className="image-outer-layer">
                <img className="image" src={img6} alt="" />
              </div>
            </li>

            <li className="inner-image-container">
              <div className="image-outer-layer"></div>
            </li>

            <li className="inner-image-container">
              <div className="image-outer-layer">
                <img className="image" src={img7} alt="" />
              </div>
            </li>

            <li className="inner-image-container">
              <div className="image-outer-layer">
                <img className="image" src={img8} alt="" />
              </div>
            </li>
          </ul>



          <ul className="image-container-section">
            
          <li className="inner-image-container">
            <div className="image-outer-layer">
              <img className="image" src={img9} alt="" />
            </div>
          </li>

          <li className="inner-image-container">
            <div className="image-outer-layer">
              <img className="image" src={img10} alt="" />
            </div>
          </li>

          <li className="inner-image-container">
            <div className="image-outer-layer"></div>
          </li>

          <li className="inner-image-container">
            <div className="image-outer-layer">
              <img className="image" src={img11} alt="" />
            </div>
          </li>

          <li className="inner-image-container">
            <div className="image-outer-layer">
              <img className="image" src={img12} alt="" />
            </div>
          </li>
        </ul>



          </div>
        </div>

        <div className="Hand-image-section">
          <div className="hand-image-outer">
            <img className="hand-image" src={img13} alt="" />
            <div className="video-add">
            <img className="upper-image" src={img14} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
