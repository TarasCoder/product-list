import React from "react";
import "./RemoveItemModal.css";

function RemoveItemModal(props) {
  const confirmRemoveItem = () => {
    console.log("Remove item!");
  };
  const cancelAction = () => {
    props.confirmation_modal();
  };

  return (
    <div className="add_modal add_modal_modify">
      <h2 className="modal_caption modal_caption_modify">DELETE ITEM?</h2>
      <div className="modal_buttons modal_buttons_modify">
        <button
          className="btn_save btn_save_modify"
          onClick={confirmRemoveItem}
        >
          Confirm
        </button>
        <button className="btn_close" onClick={cancelAction}>
          Close
        </button>
      </div>
    </div>
  );
}

export default RemoveItemModal;
