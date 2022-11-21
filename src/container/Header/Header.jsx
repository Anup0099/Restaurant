import React from 'react'
import { images } from '../../constants'
import './Header.css'
import { SubHeading } from '../../components'

const Header = () => (
  <div className=" app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Choose the new flavour" />
      <h1 className="app__header-h1">key to fine dining </h1>

      <button className="custom__button">Explore menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
)

export default Header
