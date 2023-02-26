import React, { useState } from "react";
import plane from "../../assets/plane.png";
import css from "./Products.module.css";
import { ProductsData } from "../../data/products";

const Products = () => {
  const [menuProducts, setmenuProducts] = useState(ProductsData);
  return (
    <div className={css.container}>
      <img src={plane} alt="" />
      <h1>Our Featured Products</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li>All</li>
          <li>Conditioners</li>
          <li>Foundation</li>
          <li>Skin Care</li>
        </ul>

        {menuProducts.map((product, i) => {
          <div className={css.products} key={product.img}>
            {product}
          </div>;
        })}
      </div>
    </div>
  );
};

export default Products;
