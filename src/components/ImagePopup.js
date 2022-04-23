import React from "react";

function ImagePopup(props) {
  const open = props.selectedCard.isCardOpen ? " popup_opened" : "";
  return (
    <div className={`popup popup_type_img ${open}`} onClick={props.click}>
      <div className="popup__img-container">
        <button
          aria-label="close popup"
          className="popup__close popup__close_place_img button button_opacity_m"
          onClick={props.close}
        />
        <img
          src={props.selectedCard.link}
          alt="popup img"
          className="popup__img"
        />
        <p className="popup__img-title">{props.selectedCard.title}</p>
      </div>
    </div>
  );
}
export default ImagePopup;
