import React, { useState } from "react";
import { SORTED_BY } from "../../ConstNames";
import "./Manage.css";

function Manage(props) {
  const [dropdown, setDropdown] = useState(props.lsSorted);

console.log("dropdown in Manage was changed!", dropdown);

  const newProduct = () => {
    props.new_modal(true);
  };

  // sort by name in ascending order
  const sortByName = () => {
    let sortedArr = props.products
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
    props.sortedState(sortedArr);
    localStorage.setItem(SORTED_BY, "name");
  };

  // sort by name in ascending order
  const sortByQuantity = () => {
    let sortedArr = props.products
      .slice()
      .sort((a, b) => a.quantity - b.quantity);
    props.sortedState(sortedArr);
    localStorage.setItem(SORTED_BY, "quantity");
  };
  const handleSort = (event) => {
    let selectOption = event.target.value;
    setDropdown(selectOption);
    if (selectOption === "name") {
      sortByName();
    } else if (selectOption === "quantity") {
      sortByQuantity();
    }
  };

  return (
    <div className="manage_list">
      <button className="btn_new" onClick={newProduct}>
        NEW
      </button>
      <div className="sorting">
        <label className="sorting_label" htmlFor="sort">
          Sort by:
        </label>
        <select name="sort" id="sort" onChange={handleSort} value={props.lsSorted}>
          <option value="" disabled>
            -- Select --
          </option>
          <option value="name">
            Name
          </option>
          <option value="quantity">
            Quantity
          </option>
        </select>
      </div>
    </div>
  );
}

export default Manage;
