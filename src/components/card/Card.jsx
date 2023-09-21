import i0 from "../../images/i0.webp";
import i1 from "../../images/i1.webp";
import i2 from "../../images/i2.webp";
import i3 from "../../images/i3.webp";
import i4 from "../../images/i4.webp";
import "./card.css";
const Card = () => {
  return (
    <div>
      <div>
        <section id="projects" className="c-section cc-projects">
          <div className="c-container">
            <div className="c-projects-layout">
              <div
                data-w-id="8ecb513b-e731-cc62-ada9-78b5e5d0a8c5"
                className="c-projects-wrapper"
              >
                <div className="c-project cc-1">
                  <a
                    href=""
                    target="_blank"
                    className="c-project_link w-inline-block"
                  >
                    <img
                      src={i0}
                      // width="900"
                      alt=""
                      className="c-image-contain"
                    />
                    <div className="c-project_details">
                      <div className="c-text-2 cc-bold">View Case Study</div>
                    </div>
                  </a>
                </div>
                <div className="c-project cc-2">
                  <a
                    href=""
                    target="_blank"
                    className="c-project_link w-inline-block"
                  >
                    <img
                      src={i1}
                      // width="900"
                      alt=""
                      className="c-image-contain"
                    />
                    <div className="c-project_details">
                      <div className="c-text-2 cc-bold">View Case Study</div>
                    </div>
                  </a>
                </div>
                <div className="c-project cc-3">
                  <a
                    href=""
                    target="_blank"
                    className="c-project_link w-inline-block"
                  >
                    <img
                      src={i2}
                      // width="900"
                      alt=""
                      className="c-image-contain"
                    />
                    <div className="c-project_details">
                      <div className="c-text-2 cc-bold">View Case Study</div>
                    </div>
                  </a>
                </div>
                <div className="c-project cc-4">
                  <a
                    href=""
                    target="_blank"
                    className="c-project_link w-inline-block"
                  >
                    <img
                      src={i3}
                      // width="900"
                      alt=""
                      className="c-image-contain"
                    />
                    <div className="c-project_details">
                      <div className="c-text-2 cc-bold">View Case Study</div>
                    </div>
                  </a>
                </div>
                <div className="c-project cc-5">
                  <a
                    href=""
                    target="_blank"
                    className="c-project_link w-inline-block"
                  >
                    <img
                      src={i4}
                      // width="900"
                      alt=""
                      className="c-image-contain"
                    />
                    <div className="c-project_details">
                      <div className="c-text-2 cc-bold">View Case Study</div>
                    </div>
                  </a>
                </div>
                {/* <div no-pointer="1" className="c-project cc-invisible"></div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
