import React from "react";
import tempBox from "../../images/package.png";
import quantity from "../../images/quantity.png";
import remove from "../../images/trash.png";
import "./Product.css";

function Product(props) {
  const NUM_OF_SYMBOLS = 20;
  let description = props.item.description;
  let descriptionSliced = description.slice(0, 30);
  let continueSighn = description.length > NUM_OF_SYMBOLS ? "..." : "";

  const openProductDetailsAction = () => {
    props.openProductDetails();
    props.productDetailsItem(props.item);
  };
  const show_more = () => {
    props.show_more(props.id);
  };
  const handleDelete = () => {
    props.deleteProductModalOpen(props.id);
  };

  return (
    <div className="product" onClick={openProductDetailsAction}>
      <img
        className="product_img"
        src={props.item.image || tempBox}
        alt="product_name"
      />
      <div className="product_quantity_block">
        <img className="product_quantity" src={quantity} alt="quantity" />
        <p>{props.item.quantity}</p>
      </div>
      <div className="product_description">
        <h2 className="product_name">{props.item.name}</h2>
        <p className="product_descr_short">
          {description.length < NUM_OF_SYMBOLS
            ? description
            : descriptionSliced + continueSighn}
        </p>
        {/* Displaying "show more link on the each product item" */}
        {/* {description.length > NUM_OF_SYMBOLS && (
          <a className="product_descr_long" href="#" onClick={show_more}>
            show more
          </a>
        )} */}
      </div>
      <img
        className="product_delete"
        src={remove}
        alt="delete"
        onClick={handleDelete}
      />
    </div>
  );
}

export default Product;
