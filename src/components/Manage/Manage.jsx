import React from "react";
import "./Manage.css";

function Manage(props) {
  const newProduct = () => {
    props.new_modal(true);
  }
  return (
    <div className="manage_list">
      <button className="btn_new" onClick={newProduct}>NEW</button>
      <div className="sorting">
        <label className="sorting_label" htmlFor="sort">
          Sort by:
        </label>
        <select name="sort" id="sort">
          <option value="name">Name</option>
          <option value="quantity">Quantity</option>
        </select>
      </div>
    </div>
  );
}

export default Manage;
