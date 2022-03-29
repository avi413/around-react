import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]   = useState( false );
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]         = useState( false );
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]     = useState( false );

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
    }

  return (
    <div className="app">
      <div className="page">
        <Header />
        <Main 
            onEditProfileClick      = { handleEditProfileClick } 
            onAddPlaceClick         = { handleAddPlaceClick }
            onEditAvatarClick       = { handleEditAvatarClick }
            onCardClick             = { handleAddPlaceClick } 
            onCloseClick            = { closeAllPopups }
            isEditProfilePopupOpen  = { isEditProfilePopupOpen }
            isAddPlacePopupOpen     = { isAddPlacePopupOpen }
            isEditAvatarPopupOpen   = { isEditAvatarPopupOpen }
        />
        <Footer />
      </div>
</div>
  );
}

export default App;
