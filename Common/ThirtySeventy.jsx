import RightSlider from ".././src/components/leftImageRightSliderImage/RightSlider";
import innertempo from ".././src/images/inner_tempo.png";
import "./thirtyseventy.css";
const ThirtySeventy = () => {
  return (
    <div className="common_container">
      <div className="innercloud_sec_outer">
        <div className="innercloud_sec_inner_one">
          <RightSlider
            className="xbxbx"
            title1={"Search Engine Marketing (SEM)"}
            title2={"Pay-Per-Click (PPC) Advertising"}
            title3={"Social Media Advertising"}
            text1={
              "We're the navigators who ensure your brand's path is marked in neon lights on search engines. When users search, they find you, and that's a checkered flag moment."
            }
            text2={
              " We create ad campaigns so compelling that people don't just click; they want to take your brand for a test drive."
            }
            text3={
              "Your social media channels aren't just for likes and shares; they're revenue-generating engines with our creative ads."
            }
          />
        </div>
        <div className="innercloud_sec_inner_two">
          <img className="innercloud_sec_inner_img" src={innertempo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThirtySeventy;
