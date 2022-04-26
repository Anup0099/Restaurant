import React from 'react';
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
const FindUs = () => (
  <div>
      <div className="app__bg app__wrapper section__padding" id="contact">
        <div className="app__wrapper_info">
  <SubHeading title="Contact"/>
        </div>
        <div className="app__wrapper _img">
          <img src={images.findus} alt="findus" />
        </div>

      </div>
  </div>
);

export default FindUs;
