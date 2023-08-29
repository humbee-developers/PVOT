import React from "react";
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import img3d1 from "../../images/img3d1.png";
import img3d2 from "../../images/img3d2.png";
import img3d3 from "../../images/img3d3.png";
import "./achievement.css"



const Achievements = () => {
  return (
    <div>
      <Container>
        <div className="detail-heading">
          <h2 className="heading">We Strive to Innovate </h2>
        </div>

        <div className="detail-content-divider">

          <div className="about-detail-content-head">

            <div className="about-detail-content">
              <div className="swiper-wrapper">
                <div className="swiper-slider1">
                  <p className="swiper-text"> <span style={{color:"black",fontWeight:"500"}}>Solid Strategy</span> aligned with business needs and robust data analysis are fundamental ingredients to extract actionable insights</p>
                </div>

                <div className="swiper-slider2">
                  <p className="swiper-text">Using agile data analysis supported by data science, our process has proven to deliver constant business growth</p>
                </div>

                <div className="swiper-slider3">
                  <p className="swiper-text">Ideas have to be manifested, tested and proven to work. Continued experiments are one of our key drivers</p>
                </div> 

                <div className="swiper-slider4">
                  <p className="swiper-text">Solid Strategy aligned with business needs and robust data analysis are fundamental ingredients to extract actionable insights</p>
                </div>
              </div>
            </div>

            <h3 className="title">Some Number About Us</h3>


            <ul className="card-container-section">
            <ListGroup.Item as="li" className="card-list">
            <div className="card-outer">
              <div className="outer-image-info">
                <img className="image" src={img3d1} alt="" />
              </div>
              <div className="card-detail-outer">
                <h3 className="card-heading">+300</h3>
                <p className="card-comment">We have successfully completed a total of 300+ projects</p>
              </div>
            </div>
          </ListGroup.Item>

              <ListGroup.Item as="li" className="card-list">
                <div className="card-outer">
                  <div className="outer-image-info">
                    <img className="image" src={img3d2}alt="" />
                  </div>
                  <div className="card-detail-outer">
                    <h3 className="card-heading">100k</h3>
                    <p className="card-comment">We’ve gathered dozens of reviews from the clients and + 100k reviews from their users</p>
                  </div>
                </div>
              </ListGroup.Item>

              <ListGroup.Item as="li"className="card-list">
                <div className="card-outer">
                  <div className="outer-image-info">
                    <img className="image" src={img3d3} alt="" />
                  </div>
                  <div className="card-detail-outer">
                    <h3 className="card-heading">+10</h3>
                    <p className="card-comment">Years of experience</p>
                  </div>
                </div>
              </ListGroup.Item>

              <ListGroup.Item as="li"className="card-list">
                <div className="card-outer">
                  <div className="outer-image-info">
                    <img className="image" src={img3d1} alt="" />
                  </div>
                  <div className="card-detail-outer">
                    <h3 className="card-heading">+280</h3>
                    <p className="card-comment">Team members all over the world</p>
                  </div>
                </div>
              </ListGroup.Item>
            </ul>
          </div>



          <div className="about-detail-circle-head">
            <div className="circle-graph">
              <div className="about-graph">
                <div className="about-graph-outer"></div>

                <div className="circle-data1">
                  <p data-point="false" data-label="A/B Testing" className="circle-line-info1x" style={{top:'99.3013%',right:'55%'}}  ></p>
                  <p data-point="false" data-label ="Growth" className="circle-line-info1x" style={{top:'85.3553%',right:'85.3553%'}}  ></p>
                  <p data-point="false" data-label="Experiments" className="circle-line-info1x" style={{top:'4.3013%',right:'84%'}}  ></p>
                  <p data-point="false" data-label ="Optimization" className="circle-line-info1x" style={{top:'42%',right:'99%',zIndex:"9"}}  ></p>
                </div>

                <div className="circle-data2">
                <p data-point="false" data-label="Development" className="circle-line-info1x" style={{top:"88.3022%",right:'17.8606%'}}  ></p>
                <p data-point="false" data-label="Visual Design" className="circle-line-info1x" style={{top:"99.8097%",right:'56.66%'}}  ></p>
                <p data-point="false" data-label="Insights" className="circle-line-info" style={{top:"85.35%",right:'85.35%'}}  ></p>
                <p data-point="false" data-label="User Experience" className="circle-line-info1x" style={{top:"78.35%",right:'90.8%'}}  ></p>
                <p data-point="false" data-label="Innovations" className="circle-line-info1x" style={{top:"37.89%",right:'98.98%'}}  ></p>
              </div>

              <div className="circle-data3">
              <p data-point="false" data-label="Product" className="circle-line-info1x" style={{top:"14.64%",right:'14.64%'}}  ></p>
              <p data-point="false" data-label="Data Science" className="circle-line-info1x" style={{top:"82.12%",right:'11.69%'}}  ></p>
              <p data-point="false" data-label="UX Research" className="circle-line-info1x" style={{top:"95.3154%",right:'71.1309%'}}  ></p>
              <p data-point="false" data-label="UX Strategy" className="circle-line-info1x" style={{top:"20%",right:'91%'}}  ></p>
          
            </div>
              </div>
            </div>
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default Achievements;
