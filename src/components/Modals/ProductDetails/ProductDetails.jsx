import React, { useState } from "react";
import tempBox from "../../../images/package.png";
import "./ProductDetails.css";

function ProductDetails(props) {
  const itemData = props.productDetailsItemData;
  const [editedObject, setEditedObject] = useState(itemData);
  const [editMode, setEditMode] = useState(false);
  const ava = editedObject.image == null ? tempBox : editedObject.image;

  const closeProductDetails = () => {
    props.closeProductDetails();
  };
  const saveEditedCard = () => {
    setEditMode(false);
    props.updateProduct(editedObject);
  };
  const handleChange = (ev) => {
    let changeKey = ev.target.name;
    let newValue = ev.target.value;
    setEditedObject((prev) => {
      return { ...prev, [changeKey]: newValue };
    });
  };
  const editCard = () => {
    setEditMode(true);
  };
  const addComment = () => {
    props.openAddComments();
  };
  const readComment = () => {
    props.openReadComments(itemData.comments);
  };
  const handleDelete = () => {
    props.deleteProductModalOpen(itemData.id);
  };

  // Show more functionality
  const NUM_OF_SYMBOLS = 10;
  const SYMBOLS_TO_DISPLAY = 30;
  let description = editedObject.description;
  let descriptionSliced = description.slice(0, SYMBOLS_TO_DISPLAY);
  let continueSighn = description.length > NUM_OF_SYMBOLS ? "..." : "";
  const show_more = () => {
    props.show_more(props.productDetailsItemData.id);
  };

  return (
    <div className="add_modal_product_details">
      <h2 className="modal_caption">Product details:</h2>
      <div className="modal_form modal_form_product_details">
        {/* Name input */}
        <div className="modal_input_block">
          <label htmlFor="name" className="modal_label_itemData">
            Name:
          </label>
          {!editMode && <h4 className="itemData">{editedObject.name}</h4>}
          {editMode && (
            <input
              name="name"
              type="text"
              className="modal_input"
              value={editedObject.name}
              onChange={handleChange}
            />
          )}
        </div>
        {/* Quantity input */}
        <div className="modal_input_block">
          <label htmlFor="quantity" className="modal_label_itemData">
            Quantity:
          </label>
          {!editMode && <h4 className="itemData">{editedObject.quantity}</h4>}
          {editMode && (
            <input
              name="quantity"
              type="number"
              className="modal_input"
              value={editedObject.quantity}
              onChange={handleChange}
            />
          )}
        </div>

        {/* Description input */}
        <div className="modal_input_block">
          <label htmlFor="description" className="modal_label_itemData">
            Description:
          </label>
          {!editMode && (
            <div className="modal_label_itemData modal_label_itemData_description">
              <p className="itemData itemData_description" name="description">
                {description.length < NUM_OF_SYMBOLS
                  ? description
                  : descriptionSliced + continueSighn}
              </p>
              {description.length > NUM_OF_SYMBOLS && (
                <a
                  className="modal_label_itemData_description_link"
                  href="#"
                  onClick={show_more}
                >
                  show more
                </a>
              )}
            </div>
          )}
          {editMode && (
            <input
              name="description"
              type="text"
              className="modal_input"
              value={editedObject.description}
              onChange={handleChange}
            />
          )}
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
          {!editMode && (
            <div className="modal_label_itemData modal_label_itemData_img">
              <img src={ava} alt="ava" className="modal_ava modal_ava" />
            </div>
          )}
          {editMode && (
            <div className="edit_ava">
              <input
                name="image"
                type="file"
                className="modal_input modal_input_ava"
                // value={editedObject.image}
              />
              <img src={ava} alt="ava" className="modal_ava edit_ava_img" />
            </div>
          )}
        </div>
        {/* Comments section */}
        <div className="modal_input_block">
          <label htmlFor="comments" className="modal_label_itemData">
            Comments:
          </label>
          <div className="modal_label_itemData modal_label_itemData_comments">
            <h4 className="itemDataLengthComments">
              {itemData.comments.length}
            </h4>
            <div>
              <p className="itemDataComments" onClick={addComment}>
                add comment
              </p>
              <p className="itemDataComments" onClick={readComment}>
                read comment(s)
              </p>
            </div>
          </div>
          {/* <input
            name="image"
            type="file"
            className="modal_input modal_input_ava"
            value={}
          /> */}
        </div>
      </div>
      <div className="modal_buttons_product_details">
        {!editMode && (
          <button type="submit" className="btn_edit" onClick={editCard}>
            Edit
          </button>
        )}
        {editMode && (
          <button type="submit" className="btn_edit" onClick={saveEditedCard}>
            Save
          </button>
        )}
        <button type="button" className="btn_close" onClick={handleDelete}>
          Delete
        </button>
        <button
          type="button"
          className="btn_closeDetails"
          onClick={closeProductDetails}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
