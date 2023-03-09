import React, { useState } from "react";
import "./Add_item_modal.css";

function Add_item_modal(props) {
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    quantity: "",
    image: "",
  });
  const handleInput = (ev) => {
    setNewItem((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const newProductSave = (ev) => {
    ev.preventDefault();
    props.add_product(newItem);
    props.new_modal(false);
  };
  const newProductClose = (ev) => {
    ev.preventDefault();
    props.new_modal(false);
  };
  return (
    <div className="add_modal">
      <h2 className="modal_caption">NEW PRODUCT</h2>
      <form className="modal_form">
        {/* Name input */}
        <div className="modal_input_block">
          <label htmlFor="name" className="modal_label">
            Name:
          </label>
          <input
            name="name"
            type="text"
            className="modal_input"
            value={newItem.name}
            onChange={handleInput}
          />
        </div>
        {/* Quantity input */}
        <div className="modal_input_block">
          <label htmlFor="quantity" className="modal_label">
            Quantity:
          </label>
          <input
            name="quantity"
            type="text"
            className="modal_input"
            value={newItem.quantity}
            onChange={handleInput}
          />
        </div>
        {/* Description input */}
        <div className="modal_input_block">
          <label htmlFor="description" className="modal_label">
            Description:
          </label>
          <input
            name="description"
            type="text"
            className="modal_input"
            value={newItem.description}
            onChange={handleInput}
          />
        </div>
        {/* Image input */}
        <div className="modal_input_block">
          <label htmlFor="image" className="modal_label">
            Image:
          </label>
          <input
            name="image"
            type="text"
            className="modal_input"
            value={newItem.image}
            onChange={handleInput}
          />
        </div>

        <div className="modal_buttons">
          <button onClick={newProductSave} className="btn_save">
            Save
          </button>
          <button onClick={newProductClose} className="btn_close">
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add_item_modal;
