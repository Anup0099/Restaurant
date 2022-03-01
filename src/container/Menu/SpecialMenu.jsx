import React from 'react';

import './SpecialMenu.css';
import {images,data} from '../../constants'
import {SubHeading,MenuItem} from '../../components'
const SpecialMenu = () => (
  <div className="app__special-menu flex__center section__padding " id="menu">
  <div className="app__special-menu-title">
    <SubHeading/>
    <h1 className="headtext__cormorant">Today's menu</h1>
  </div>
    <div className="app__special-menu"></div>

  </div>
);

export default SpecialMenu;
