import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup ";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserData()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({
      isCardOpen: false,
      link: "",
    });
  };

  const handleCardClick = (data) => {
    const src = data.link;
    const title = data.name;
    setSelectedCard({
      isCardOpen: true,
      link: src,
      title: title,
    });
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <PopupWithForm
          title="Edit profile"
          name="profile"
          lable="Save"
          isOpen={isEditProfilePopupOpen}
          close={closeAllPopups}
          formName="profileForm"
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
          isOpen={isEditAvatarPopupOpen}
          close={closeAllPopups}
          formName="avatarForm"
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
          isOpen={isAddPlacePopupOpen}
          close={closeAllPopups}
          formName="newCardForm"
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
          close={closeAllPopups}
          formName="deleteForm"
        />

        <ImagePopup selectedCard={selectedCard} close={closeAllPopups} />
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          isEditProfilePopupOpen={isEditProfilePopupOpen}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          isEditAvatarPopupOpen={isEditAvatarPopupOpen}
          selectedCard={selectedCard}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
