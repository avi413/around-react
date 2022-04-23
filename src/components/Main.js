import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import Card from "./Card";
import profileEdit from "../images/profile-edit.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((apiCards) => {
        setCards(apiCards);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <p className="profile__error"></p>
        <div className="profile__info">
          <div className="profile__img">
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="avatar"
            />
            <img
              className="profile__edit-avatar"
              src={profileEdit}
              alt="edit profile"
              onClick={props.onEditAvatarClick}
            />
          </div>
          <div className="profile__text">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__about-me">{currentUser.about}</p>
            <button
              aria-label="edit profile"
              type="button"
              className="profile__edit-btn button button_clear button_open button_opacity_m button_border_sm"
              onClick={props.onEditProfileClick}
            ></button>
          </div>
        </div>
        <button
          aria-label="add profile"
          type="button"
          className="profile__add-btn button button_clear button_open button_opacity_m button_border_m"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>

      <section className="gallery">
        <ul className="gallery__list">
          {cards.map(function(card) {
              const isLiked = card.likes.some(user => user._id === currentUser._id);
    
              function handleCardLike(card) {
                // Check one more time if this card was already liked
                // Send a request to the API and getting the updated card data
                api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
                    setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
                  });
                } 

                function handleCardDelete(card) {
                  api.deleteCard(card._id)
                  .then(() =>{
                    setCards(cards.filter(item =>item._id != card._id))
                  })
                }

            return (
              <Card click={props.onCardClick} card={card} key={card._id} onCardLike={handleCardLike} isLiked={isLiked} onCardDelete={handleCardDelete}/>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;