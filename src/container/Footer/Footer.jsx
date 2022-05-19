import React from "react";

import "./Footer.css";

import { FooterOverlay } from "../../components";
import { Newsletter } from "../../components";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact us</h1>
        <p className="p__opensans">9 w 53rd,New York,NY 10019,USA</p>
        <p className="p__opensans">9 w 53rd,New York,NY 10019,USA</p>
        <p className="p__opensans">9 w 53rd,New York,NY 10019,USA</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          The best way to loose yourself is to lose yourself in the service of
          others
        </p>
        <img
          src={images.spoon}
          alt=""
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours </h1>
        <p className="p__opensans">Monday-Friday</p>
        <p className="p__opensans">8:00AM-12:00AM</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">+91 8242566325</p>
      </div>
    </div>
      <div className="footer__copyright">
        <p className="p__opensans">2021 Gerchit.All rights reserved.</p>
      </div>
  </div>
);

export default Footer;
