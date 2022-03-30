import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
    const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ]   = useState( false );
    const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ]         = useState( false );
    const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ]     = useState( false );
    const [ selectedCard, setSelectedCard ]                       = useState( {
      isCardOpen: false,
      link: '',
    } );

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    } 

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }
    
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }
   
    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen( false );
        setIsEditProfilePopupOpen( false );
        setIsAddPlacePopupOpen( false );
        setSelectedCard({
          isCardOpen: false,
          link: '',
        } );
    }

    const handleCardClick = (evt) => {
      const src   = evt.currentTarget.querySelector(".gallery__item-img").src;
      const title = evt.currentTarget.querySelector(".gallery__item-name").textContent;
      setSelectedCard( {
        isCardOpen: true,
        link: src,
        title: title,
      } );
    }

  return (
    <div className="app">

        <Header />
        <Main 
            onEditProfileClick      = { handleEditProfileClick } 
            onAddPlaceClick         = { handleAddPlaceClick }
            onEditAvatarClick       = { handleEditAvatarClick }
            onCardClick             = { handleCardClick } 
            onCloseClick            = { closeAllPopups }
            isEditProfilePopupOpen  = { isEditProfilePopupOpen }
            isAddPlacePopupOpen     = { isAddPlacePopupOpen }
            isEditAvatarPopupOpen   = { isEditAvatarPopupOpen }
            selectedCard            = { selectedCard }
        />
        <Footer />
</div>
  );
}

export default App;
