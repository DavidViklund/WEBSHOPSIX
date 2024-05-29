import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="NavBarContainer flex flex-col p-4 justify-center bg-greyscale-surface-default/50 rounded-xl ">
      <div className="closedNav flex items-center justify-between">
        <Link className="text-2xl" to="/">
          <h4>HaulMart</h4>
        </Link>
        <Link className="iconBox lg:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <a className="material-symbols-outlined flex items-center justify-center w-10 h-10">
              menu_open
            </a>
          ) : (
            <a className="material-symbols-outlined flex items-center justify-center w-10 h-10">
              menu
            </a>
          )}
        </Link>
        <div className="gap-2 hidden lg:flex">
          <Link className="navLink" to="/ProductPage" onClick={closeMenu}>
            ProductPage
          </Link>
          <Link className="navLink" to="/AboutUsPage" onClick={closeMenu}>
            AboutUsPage
          </Link>
          <Link className="navLink" to="/CartPage" onClick={closeMenu}>
            CartPage
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="openNav flex flex-col gap-2 items-center max-w-[1440px]">
          <Link className="navLink" to="/ProductPage" onClick={closeMenu}>
            ProductPage
          </Link>
          <Link className="navLink" to="/AboutUsPage" onClick={closeMenu}>
            AboutUsPage
          </Link>
          <Link className="navLink" to="/CartPage" onClick={closeMenu}>
            CartPage
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
