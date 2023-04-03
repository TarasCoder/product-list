import React, { useState } from "react";
import "./AddComments.css";

function AddComments(props) {
  const [comment, setComment] = useState("");
  const saveComment = () => {
    props.closeAddComments();
    props.addComment(comment);
  };
  const handleInput = (ev) => {
    setComment(ev.target.value);
  };
  const closeModal = () => {
    props.closeAddComments();
  };

  return (
    <div className="add_modal add_modal_modify modal_readMore">
      <h2 className="caption">
        Add Comment:
      </h2>
      <textarea
        className="txt-area-comment"
        onChange={handleInput}
        value={comment}
      ></textarea>
      <div className="modal_buttons modal_buttons_modify">
        <button className="btn_save" onClick={saveComment}>
          Add
        </button>
        <button className="btn_close" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default AddComments;
