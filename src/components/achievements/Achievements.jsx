import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Container from "react-bootstrap/Container";
// import ListGroup from "react-bootstrap/ListGroup";
import img3d1 from "../../images/task_done2.png";
import img3d2 from "../../images/review.png";
import Test from "../../../Common/Test";
import img3d3 from "../../images/teamwork5.png";
import img3d4 from "../../images/teamwork4.png";
import "./achievement.css";
import PropTypes from "prop-types";

const Card = ({ title, description, imageSrc }) => {
  const controls = useAnimation();
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, x: 0 });
          } else {
            controls.start({ opacity: 0, x: -50 });
          }
        });
      },
      { threshold: 0.8 }
    );

    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, [controls]);

  return (
    <motion.div
      className="card"
      style={{ border: "none", margin: "5px 6px" }}
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      ref={cardRef}
    >
      <div className="card-outer1">
        <div className="outer-image-info1">
          <img className="image1" src={imageSrc} alt={title} />
        </div>
        <div className="card-detail-outer1">
          <h3 className="card-heading1">{title}</h3>
          <p className="card-comment1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <div className="achievement">
      <Container>
        <div className="detail-heading">
          <div className="containerz">
            <div className="achievement-body">
              <Test
                primary={"Creativity doesn't sleep, and neither do we!"}
                secondary={"Creativity doesn't sleep, and neither do we!"}
              />
            </div>
          </div>
        </div>

        <div className="detail-content-divider">
          <div className="about-detail-content-head">
            <div className="about-detail-content">
              <div className="swiper-wrapper">
                <div className="swiper-slider1">
                  <p className="swiper-text">
                    <span style={{ color: "black", fontWeight: "500" }}>
                      We believe
                    </span>{" "}
                    in the power of creative storytelling, data-driven
                    decisions, and a sprinkle of humor in everything we do.
                    Let's drop the curtain and give you a peek behind the
                    scenes!
                  </p>
                </div>
              </div>
            </div>

            <h3 className="title">Some Number About Us</h3>

            <div>
              <div className="card-list1">
                <motion.div
                  className="card-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card
                    className="card-outer"
                    style={{ border: "none" }}
                    title="+300"
                    description="Happy Clients"
                    imageSrc={img3d1}
                  />
                </motion.div>
                <motion.div
                  className="card-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card
                    title="12+"
                    description="Years Of experience"
                    imageSrc={img3d2}
                  />
                </motion.div>
              </div>
              <div className="card-list1">
                <motion.div
                  className="card-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Card
                    title="98%"
                    description="Project Success Rate"
                    imageSrc={img3d3}
                  />
                </motion.div>
                <motion.div
                  className="card-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card
                    className="card-outer"
                    style={{ border: "none" }}
                    title="24/7"
                    description="Creative Energy"
                    imageSrc={img3d4}
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="about-detail-circle-head">
            <div className="circle-graph">
              <div className="about-graph">
                <div className="about-graph-outer"></div>

                <div className="circle-data1">
                  <p
                    data-point="false"
                    data-label="A/B Testing"
                    className="circle-line-info1x circle-data1_1"
                  ></p>
                  <p
                    data-point="false"
                    data-label="Growth"
                    className="circle-line-info1x sticky"
                  ></p>
                  <p
                    data-point="false"
                    data-label="Experiments"
                    className="circle-line-info1x  circle-data1_2"
                  ></p>
                  <p
                    data-point="false"
                    data-label="Optimization"
                    className="circle-line-info1x circle-data1_3"
                  ></p>
                </div>

                <div className="circle-data2">
                  <p
                    data-point="false"
                    data-label="Development"
                    className="circle-line-info1x circle-data2_1"
                  ></p>
                  <p
                    data-point="false"
                    data-label="Visual Design"
                    className="circle-line-info1x circle-data2_2"
                  ></p>
                  <p
                    data-point="false"
                    data-label="Insights"
                    className="circle-line-info1x sticky"
                  ></p>
                  <p
                    data-point="false"
                    data-label="User Experience"
                    className="circle-line-info1x circle-data2_3"
                  ></p>
                  <p
                    data-point="false"
                    data-label="Innovations"
                    className="circle-line-info1x circle-data2_4"
                  ></p>
                </div>

                <div className="circle-data3">
                  <p
                    data-point="false"
                    data-label="Product"
                    className="circle-line-info1x sticky"
                  ></p>
                  <p
                    data-point="false"
                    data-label="Data Science"
                    className="circle-line-info1x circle-data3_1"
                  ></p>
                  <p
                    data-point="false"
                    data-label="UX Research"
                    className="circle-line-info1x circle-data3_2"
                  ></p>
                  <p
                    data-point="false"
                    data-label="UX Strategy"
                    className="circle-line-info1x  circle-data3_3"
                  ></p>
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

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.any,
};
