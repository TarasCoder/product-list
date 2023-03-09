import React from "react";
import packageImg from "../../images/package.png";
import quantity from "../../images/quantity.png";
import remove from "../../images/trash.png";
import "./Product.css";

function Product() {


  return (
    <div className="product">
      <img className="product_img" src={packageImg} alt="product_name" />
      <div className="product_quantity_block">
        <img className="product_quantity" src={quantity} alt="quantity" />
        <p>15</p>
      </div>
      <div className="product_description">
        <h2 className="product_name">Product name</h2>
        <p className="product_descr_short">Short description of this product</p>
        <a className="product_descr_long" href="#">
          show more
        </a>
      </div>
      <img className="product_delete" src={remove} alt="delete" />
    </div>
  );
}

export default Product;
