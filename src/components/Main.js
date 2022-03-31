import Card from "./Card";
import profileEdit from "../images/profile-edit.svg";
import React, { useState, useEffect } from "react";
import { api } from "../utils/api";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .init()
      .then(([user, apiCards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
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
            <img className="profile__avatar" src={userAvatar} alt="avatar" />
            <img
              className="profile__edit-avatar"
              src={profileEdit}
              alt="edit profile"
              onClick={props.onEditAvatarClick}
            />
          </div>
          <div className="profile__text">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__about-me">{userDescription}</p>
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
          {cards.map(function(item) {
            return ( 
                <Card 
                    card={item} 
                    key={item._id} 
                    click={props.onCardClick} 
                />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
