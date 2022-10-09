import BannerSlide from ".//Home/BannerSlide";
import AboutUs from "./Home/AboutUs";
import Services from "./Home/Services";

function LeftSide() {
  // top banner image
  const AJISLOGO =
    "https://res.cloudinary.com/isreal/image/upload/v1662333054/My%20portfolio%20Project/AJIS_FILE_1_arvnbd.png";

  return (
    // beginning of main section
    <div className="left-side-container">
      <div className="banner">
        <img src={AJISLOGO} alt="AJIS" />
      </div>
      {/* banner slider component*/}
      <BannerSlide />
      {/* end of banner slider component*/}
      {/* about me section component*/}
      <AboutUs />
      {/* end of about me section component*/}
      {/* servives  component*/}
      <Services />
      {/* end of servives  component*/}
    </div>
    // end of main section
  );
}
export default LeftSide;
