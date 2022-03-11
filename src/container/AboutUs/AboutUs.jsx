import React from "react";

import "./AboutUs.css";
import { images } from "../../constants";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g-letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Ipsam excepturi
          quidem dolorum aperiam dolore. Veritatis nobis quos iste harum! Natus.
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about knife" />
      </div>
      {/*history*/}
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Incidunt beatae
          vero officiis impedit sapiente qui quasi ipsa nesciunt accusamus
          blanditiis!
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
