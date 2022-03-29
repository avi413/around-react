function Card (props) {
    return (
        <div id="gallery-item-template" key={props.key}>
            <li className="gallery__item">
                <button aria-label="trash button" type="button" className="gallery__item-trash-btn button button_clear"></button>
                <img src={props.link} className="gallery__item-img"/>
                <div className="gallery__item-footer">
                    <h2 className="gallery__item-name">{props.name}</h2>
                    <div className="gllery__like">
                        <button aria-label="like button" type="button" className="gallery__like-btn button button_clear"></button>
                        <p className="gllery__like-count">0</p>
                    </div>

                </div>
            </li>                     
        </div>
    )
}

export default Card;