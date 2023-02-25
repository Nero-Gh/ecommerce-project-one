import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className={css.container}>
      <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream</span>

        {/* left side */}
        <div className={css.text2}>
          <span>Trendy Collection </span>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
            nemo.
          </span>
        </div>
      </div>
      {/* middle side */}

      <div className={css.wrapper}>
        <div className={css.blueCircle}></div>
        <img src={HeroImg} alt="Hero Image" width="600" />
        <div className={css.cart2}>
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <BsArrowRight />
          </div>
        </div>
      </div>

      {/* right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>40k</span>
          <span>Monthly Traffic</span>
        </div>

        <div className={css.customers}>
          <span>100k</span>
          <div>Happy Customers</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
