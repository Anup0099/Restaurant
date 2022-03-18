import React from "react";

import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding " id="menu">
    <div className="app__special-menu-title">
      <SubHeading />
      <h1 className="headtext__cormorant">Today's menu</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu_menu-heading">wine & beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem>{wine.title +index} tags={wine.tags} title ={wine.title}</MenuItem>
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu-img" />
      </div>
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">wine & beer</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
              <MenuItem>{cocktail.title +index} tags={cocktail.tags} title ={cocktail.title}</MenuItem>
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
