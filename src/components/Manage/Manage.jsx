import React from "react";
import "./Manage.css";

function Manage() {
  return (
    <div className="manage_list">
      <button className="btn_new">NEW</button>
      <div className="sorting">
        <label className="sorting_label" for="sort">
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
