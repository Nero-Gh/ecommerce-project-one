import React from "react";
import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={logo} alt="Vatican Mart logo" />
        <span>Vatican Mart</span>
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li className={css.menu_item}>Brands</li>
            <li className={css.menu_item}>Sales</li>
            <li className={css.menu_item}>Collection</li>
            <li className={css.menu_item}>New</li>
            <li className={css.menu_item}>Lang</li>
          </ul>
        </div>
        <input type="text" className={css.search} placeholder="Search..." />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
