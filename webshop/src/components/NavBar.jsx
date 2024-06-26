//NÄMEN... EN NAVBAR
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BasketButton from "./buttons/BasketButton";

const NavBar = ({ cartQty }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [flash, setFlash] = useState(false);

  //Här uppdateras varukorgen med siffra och en liten flash effect för indikation
  useEffect(() => {
    console.log("Cart quantity changed:", cartQty);
    if (cartQty > 0) {
      setFlash(true);
      const timer = setTimeout(() => {
        setFlash(false);
        console.log("Flash reset");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [cartQty]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="NavBarContainer flex flex-col p-4 justify-center bg-greyscale-surface-default/50 rounded-xl">
      <div className="closedNav flex items-center justify-between ">
        <Link className="text-2xl" to="/">
          <h4 className="text-primary-text-label">HaulMart</h4>
        </Link>
        <div className="flex gap-1 lg:hidden">
          <BasketButton
            to="/cart"
            qty={cartQty}
            icon={
              <span className="material-symbols-outlined">shopping_cart</span>
            }
            flash={flash}
          />
          <div
            className="iconBox flex items-center "
            onClick={toggleMenu}
            style={{ cursor: "pointer" }}
          >
            <span className="material-symbols-outlined flex items-center justify-center w-10 h-10">
              {isOpen ? "menu_open" : "menu"}
            </span>
          </div>
        </div>
        <div className="gap-2 hidden lg:flex lg:items-center">
          <Link className="navLink" to="/shop" onClick={closeMenu}>
            PRODUCTS
          </Link>
          <Link className="navLink" to="/about" onClick={closeMenu}>
            ABOUT US
          </Link>
          <BasketButton
            to="/cart"
            qty={cartQty}
            icon={
              <span className="material-symbols-outlined">shopping_cart</span>
            }
            flash={flash}
          />
        </div>
      </div>
      {isOpen && (
        <div className="openNav flex flex-col py-8 gap-4 items-center max-w-[1440px]">
          <Link className="navLink" to="/shop" onClick={closeMenu}>
            PRODUCTS
          </Link>
          <Link className="navLink" to="/about" onClick={closeMenu}>
            ABOUT US
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
