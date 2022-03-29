import cx from 'classnames';



function PopupWithForm (props) {
    const open = props.isOpen ? ' popup_opened' : '';
    return (
        <>
        {props.isOpen && (
            <div className={`popup popup_type_${props.name} ${open}`}>
                <button aria-label="close popup" className="popup__close popup__close_place_profile button button_opacity_m" onClick={props.close}></button>
                <div className="popup__container">
                    <h2 className="popup__title">{props.title}</h2>
                    <form action="#" className={`popup__form popup__form_type_${props.name}`} name="profileform" noValidate>
                    <fieldset className="popup__form-set">
                        {props.children}
                        <button type="submit" className={`popup__submit-btn button button_opacity_h popup__submit-btn_place_${props.name}`}>{props.lable}</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        )}
        </>
        
    )
}

export default PopupWithForm;