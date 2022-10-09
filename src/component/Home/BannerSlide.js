import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import SliderData from ".//SliderData";
function BannerSlide() {
  return (
    <>
      <div className="slide-container">
        <Slide>
          {SliderData.map((slideImage, index) => (
            <div className="each-slide slider-banner-container" key={index}>
              <img src={slideImage.url} alt="" className="slider-banner-img" />
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
}

export default BannerSlide;
