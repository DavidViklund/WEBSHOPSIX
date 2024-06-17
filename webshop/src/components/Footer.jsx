//Hmm... EN FOOTER
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col gap-6 px-4 md:justify-center md:flex-row-reverse mt-20 py-16 bg-greyscale-surface-subtle">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl">Let's talk</h3>
        {/* Ska egentligen vara a taggar men detta är bara dummy */}
        <div className="flex flex-col gap-3">
          <p>haulmart@gmail.com</p>
          <p>+46 731234567</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h4 className="text-primary-text-icon text-2xl">HaulMart</h4>
          <p className="text-primary-text-icon text-sm">
            © 2024 HaulMart. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row space-x-4 text-base">
            <p>Terms &#183; Privacy &#183; Cookies</p>
          </div>
          <div className="flex flex-row space-x-4 text-primary-text-icon text-lg">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
