import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <h3>Let's talk</h3>
      <p className="font-medium">haulmart@gmail.com</p>
      <p className="font-medium">+46 731234567</p>
      <div>
        <h2 className="text-primary-surface-darker transition-colors duration-300">
          HaulMart
        </h2>
        <p className="text-primary-surface-darker transition-colors duration-300">
          © 2024 HaulMart. All rights reserved.
        </p>
      </div>
      <div className="flex flex-row space-x-4">
        <p>Terms</p>
        <p>Privacy</p>
        <p>Cookies</p>
      </div>
      <div className="flex flex-row space-x-4 text-primary-surface-darker transition-colors duration-300">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
    </footer>
  );
};

export default Footer;
