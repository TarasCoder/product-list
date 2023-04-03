import React from 'react'
import "./ReadComments.css"

function ReadComments(props) {

    const closeModal = () => {
        props.closeReadComments();
    }

  return (
    <div className="add_modal add_modal_modify modal_readMore">
      <h2 className="modal_caption modal_caption_modify modal_readMore_caption">Read Comments</h2>
      {props.comments.map((msg, index) => <p key={index} className="comment">{msg}</p>)}
      <div className="modal_buttons modal_buttons_modify">
        <button className="btn_close" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  )
}

export default ReadComments;