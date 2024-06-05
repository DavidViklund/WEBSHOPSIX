import React, { useState } from "react";
import { Link } from "react-router-dom";
import BasketButton from "./buttons/BasketButton";

const NavBar = ({ cartQty }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="NavBarContainer flex flex-col p-4 justify-center bg-greyscale-surface-default/50 rounded-xl">
      <div className="closedNav flex items-center justify-between">
        <Link className="text-2xl" to="/">
          <h4 className=" text-primary-text-label">HaulMart</h4>
        </Link>
        <div
          className="iconBox flex items-center lg:hidden"
          onClick={toggleMenu}
          style={{ cursor: "pointer" }}
        >
          <BasketButton
            to="/CartPage"
            qty={cartQty}
            icon={
              <span className="material-symbols-outlined">shopping_cart</span>
            }
          />
          <span className="material-symbols-outlined flex items-center justify-center w-10 h-10">
            {isOpen ? "menu_open" : "menu"}
          </span>
        </div>
        <div className="gap-2 hidden lg:flex lg:items-center">
          <Link className="navLink" to="/ProductPage" onClick={closeMenu}>
            PRODUCTS
          </Link>
          <Link className="navLink" to="/AboutUsPage" onClick={closeMenu}>
            ABOUT US
          </Link>
          <BasketButton
            to="/CartPage"
            qty={cartQty}
            icon={
              <span className="material-symbols-outlined">shopping_cart</span>
            }
          />
        </div>
      </div>
      {isOpen && (
        <div className="openNav flex flex-col gap-2 items-center max-w-[1440px]">
          <Link className="navLink" to="/ProductPage" onClick={closeMenu}>
            PRODUCTS
          </Link>
          <Link className="navLink" to="/AboutUsPage" onClick={closeMenu}>
            ABOUT US
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
