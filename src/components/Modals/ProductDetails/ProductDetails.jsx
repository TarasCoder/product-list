import React from "react";
import tempBox from "../../../images/package.png";
import "./ProductDetails.css";

function ProductDetails(props) {
  const itemData = props.productDetailsItemData;
  const ava = itemData.image == null ? tempBox : itemData.image;
  const closeProductDetails = () => {
    props.closeProductDetails();
  };

  const NUM_OF_SYMBOLS = 20;
  let description = itemData.description;
  let descriptionSliced = description.slice(0, 30);
  let continueSighn = description.length > NUM_OF_SYMBOLS ? "..." : "";
  const show_more = () => {
    props.show_more(props.productDetailsItemData.id);
  };
  return (
    <div className="add_modal add_modal_product_details">
      <h2 className="modal_caption">Product details:</h2>
      <div className="modal_form modal_form_product_details">
        {/* Name input */}
        <div className="modal_input_block">
          <label htmlFor="name" className="modal_label_itemData">
            Name:
          </label>
          <h4 className="itemData">{itemData.name}</h4>
          {/* <input
            name="name"
            type="text"
            className="modal_input"
            value={}
          /> */}
        </div>
        {/* Quantity input */}
        <div className="modal_input_block">
          <label htmlFor="quantity" className="modal_label_itemData">
            Quantity:
          </label>
          <h4 className="itemData">{itemData.quantity}</h4>
          {/* <input
            name="quantity"
            type="number"
            className="modal_input"
            value={}
          /> */}
        </div>

        {/* Description input */}
        <div className="modal_input_block">
          <label htmlFor="description" className="modal_label_itemData">
            Description:
          </label>
          <div className="modal_label_itemData modal_label_itemData_description">
            <p className="itemData itemData_description" name="description">
              {description.length < NUM_OF_SYMBOLS
                ? description
                : descriptionSliced + continueSighn}
            </p>
            {description.length > NUM_OF_SYMBOLS && (
              <a className="modal_label_itemData_description_link" href="#" onClick={show_more}>
                show more
              </a>
            )}
          </div>
        </div>

        {/* <div className="modal_input_block">
          <label htmlFor="description" className="modal_label_itemData">
            Description:
          </label>
          <h4 className="itemData">{itemData.description}</h4>
          <input
            name="description"
            type="text"
            className="modal_input"
            value={}
          />
        </div> */}
        {/* Image input */}
        <div className="modal_input_block">
          <label htmlFor="image" className="modal_label_itemData">
            Image:
          </label>
          <div className="modal_label_itemData modal_label_itemData_img">
            <img src={ava} alt="ava" className="modal_ava modal_ava" />
          </div>
          {/* <input
            name="image"
            type="file"
            className="modal_input modal_input_ava"
            value={}
          /> */}
        </div>
      </div>
      <div className="modal_buttons modal_buttons_product_details">
        {/* <button type="submit" className="btn_save">
            Save
          </button> */}
        <button
          type="button"
          className="btn_close"
          onClick={closeProductDetails}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
