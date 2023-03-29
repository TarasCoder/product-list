import React from 'react'
import "./ReadMore.css"

function ReadMore(props) {

const cancelAction = () => {
    props.closeReadMore();
}

  return (
    <div className="add_modal add_modal_modify modal_readMore">
      <h2 className="modal_caption modal_caption_modify modal_readMore_caption">Description:</h2>
      <h2 className="modal_caption modal_caption_modify">{props.readMore}</h2>
      <div className="modal_buttons modal_buttons_modify">
        <button className="btn_close" onClick={cancelAction}>
          Close
        </button>
      </div>
    </div>
  )
}

export default ReadMore