import Card from "./Card";
import profileEdit from "../images/profile-edit.svg";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup ";
import React, { useState, useEffect } from "react";
import { api } from "../utils/api";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.init().then(([user, apiCards]) => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
      setCards(apiCards);
    });
  }, []);

  return (
    <main className="content">
      <PopupWithForm
        title="Edit profile"
        name="profile"
        lable="Save"
        isOpen={props.isEditProfilePopupOpen}
        close={props.onCloseClick}
      >
        <input
          id="profile-name-input"
          required
          className="popup__input popup__input-text popup__input-text_type_name"
          type="text"
          placeholder="Name"
          name="profileName"
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error profile-name-input-error"></span>
        <input
          id="profile-about-me-input"
          required
          className="popup__input popup__input-text popup__input-text_type_about-me"
          type="text"
          placeholder="About me"
          name="profileAboutMe"
          minLength="2"
          maxLength="400"
        />
        <span className="popup__input-error profile-about-me-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Change profile picture"
        name="avatar"
        lable="Save"
        isOpen={props.isEditAvatarPopupOpen}
        close={props.onCloseClick}
      >
        <input
          id="avatar-link-input"
          className="popup__input popup__input-text popup__input-text_type_avatar-link"
          required
          type="url"
          placeholder="Avatar link"
          name="avatarImageLink"
        />
        <span className="popup__input-error avatar-link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="New place"
        name="new-card"
        lable="Save"
        isOpen={props.isAddPlacePopupOpen}
        close={props.onCloseClick}
      >
        <input
          id="card-title-input"
          className="popup__input popup__input-text popup__input-text_type_title"
          required
          type="text"
          placeholder="Title"
          name="placeName"
          minLength="2"
          maxLength="30"
        />
        <span className="popup__input-error card-title-input-error"></span>
        <input
          id="card-link-input"
          className="popup__input popup__input-text popup__input-text_type_Image-link"
          required
          type="url"
          placeholder="Image link"
          name="placeImageLink"
        />
        <span className="popup__input-error card-link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Are you sure?"
        name="delete"
        lable="Yes"
        isOpen={false}
        close={props.onCloseClick}
      />

      <ImagePopup
        selectedCard={props.selectedCard}
        close={props.onCloseClick}
      />

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
          {cards.map(function(item, i) {
            return <Card card={item} key={i} click={props.onCardClick} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
