function Card (props) {
    return (
        <div id={props.card.id} onClick={props.click}>
            <li className="gallery__item">
                <button aria-label="trash button" type="button" className="gallery__item-trash-btn button button_clear"></button>
                <img src={props.card.link} className="gallery__item-img"/>
                <div className="gallery__item-footer">
                    <h2 className="gallery__item-name">{props.card.name}</h2>
                    <div className="gllery__like">
                        <button aria-label="like button" type="button" className="gallery__like-btn button button_clear"></button>
                        <p className="gllery__like-count">{props.card.likes.length}</p>
                    </div>

                </div>
            </li>                     
        </div>
    )
}

export default Card;