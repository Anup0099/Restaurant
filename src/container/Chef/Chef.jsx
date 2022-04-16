import React from 'react';

import './Chef.css';
import {SubHeading} from "../../components"
import {images} from '../../constants'
const Chef = () => (
  <div className="app__bg app___wrapper section__padding ">
    <div className="app__wrapper_img app__wrapper__imag_reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title=" chef's word"/>
      <h1 className="headtext__cormorant">what we belive in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote_image" />
            <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus itaque quos numquam ut, pariatur voluptatum iure sed! Maxime, architecto ipsam!</p>
        </div>
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia ducimus temporibus porro quibusdam odio delectus molestiae nemo. Unde sequi itaque quo quae omnis accusantium blanditiis. Aperiam nesciunt sit ducimus!
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Ludo </p>
        <p className="p__opensans">chef and founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
