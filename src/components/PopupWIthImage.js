function PopupWIthImage (props) {
    return (
        <div className="popup popup_type_img">
        <div className="popup__img-container">
            <button aria-label="close popup" className="popup__close popup__close_place_img button button_opacity_m"></button>
            <img src="#" alt="popup img" className="popup__img" />
            <p className="popup__img-title"></p>
        </div>
    </div>
    )
}

export default PopupWIthImage;