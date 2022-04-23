import React, {useState, useEffect} from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);

    let [data, setData] = useState({
        profileName: '',
        profileAboutMe: ''
        })

    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
    
        setData((prevalue) => {
           
        return {
            ...prevalue,   // Spread Operator               
            [name]: value
        }
        })
    }

    const handleSubmit = (event) => {
         // Prevent the browser from navigating to the form address
         event.preventDefault();
         // Pass the values of the managed components to the external handler
        props.onUpdateUser({
            name: data.profileName,
            about: data.profileAboutMe,
        });
    }
    useEffect(()=> {
        setData({
            profileName: currentUser.name,
            profileAboutMe: currentUser.about
        })
    },[currentUser])
    return (
        <PopupWithForm
        title="Edit profile"
        name="profile"
        lable="Save"
        isOpen={props.isOpen} 
        close={props.onClose} 
        formName="profileForm"
        onSubmit={handleSubmit}
        >
            <input
                id="profile-name-input"
                required
                className="popup__input popup__input-text popup__input-text_type_name"
                type="text"
                placeholder="name"
                value={data.profileName}
                name="profileName"
                minLength="2"
                maxLength="40"
                onChange ={handleChange}
            />
            <span className="popup__input-error profile-name-input-error"></span>
            <input
                id="profile-about-me-input"
                required
                className="popup__input popup__input-text popup__input-text_type_about-me"
                type="text"
                placeholder="About me"
                value={data.profileAboutMe}
                name="profileAboutMe"
                minLength="2"
                maxLength="400"
                onChange ={handleChange}
            />
            <span className="popup__input-error profile-about-me-input-error"></span>
        </PopupWithForm>
 )
}

export default EditProfilePopup;
