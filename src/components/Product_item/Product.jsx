import React from "react";
import tempBox from "../../images/package.png"
import quantity from "../../images/quantity.png";
import remove from "../../images/trash.png";
import "./Product.css";

function Product(props) {

  return (
    <div className="product">
      <img className="product_img" src={tempBox} alt="product_name" />
      <div className="product_quantity_block">
        <img className="product_quantity" src={quantity} alt="quantity" />
        <p>{props.item.quantity}</p>
      </div>
      <div className="product_description">
        <h2 className="product_name">{props.item.name}</h2>
        <p className="product_descr_short">{props.item.description}</p>
        <a className="product_descr_long" href="#">
          show more
        </a>
      </div>
      <img className="product_delete" src={remove} alt="delete" />
    </div>
  );
}

export default Product;
