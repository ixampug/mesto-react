import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import { useState } from "react";
import ImagePopup from "./ImagePopup";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />

      <PopupWithForm
        name="popup-edit"
        title="Редактировать профиль"
        buttonName="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          required
          id="name-input"
          className="popup__input popup__input_type_name"
          minLength="2"
          maxLength="40"
          name="name"
          placeholder="Ваше имя"
        />
        <span className="popup__error" id="profile-name-error"></span>
        <input
          type="text"
          required
          id="job-input"
          className="popup__input popup__input_type_job"
          minLength="2"
          maxLength="200"
          name="about"
          placeholder="О себе"
        />
        <span className="popup__error" id="job-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="popup-add"
        title="Новое место"
        buttonName="Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          required
          id="name-card-input"
          className="popup__input popup__input_type_title"
          minLength="2"
          maxLength="30"
          name="name"
          placeholder="Название"
        />
        <span className="popup__error" id="name-card-input-error"></span>
        <input
          type="url"
          required
          id="image-url"
          className="popup__input popup__input_type_link"
          name="link"
          placeholder="Ссылка на картинку"
        />
        <span className="popup__error" id="link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="confirm" title="Вы уверены?" buttonName="Да" />

      <PopupWithForm
        name="popupUpdateAvatarForm"
        title="Обновить аватар"
        buttonName="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          required
          id="link-avatar-input"
          className="popup__input popup__input_type_link"
          name="avatar"
        />
        <span className="popup__error" id="link-avatar-input-error"></span>
      </PopupWithForm>

      <Footer />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />







  <div className="popup popup_fullview" id="popup-open-image">
    <div className="popup__fullscreen">
      <img alt="" src="#" className="popup__picture" />
      <h3 className="popup__subtitle" />
      <button className="popup__close popup__close_fullview" type="button" />
    </div>
  </div>
  <div className="popup" id="popup-confirm">
    <div className="popup__container">
      <h2 className="popup__title">Вы уверены?</h2>
      <button className="popup__submit popup__submit_confirm" type="submit">
        Да
      </button>
      <button className="popup__close" type="button" />
    </div>
  </div>
 
  <template id="card-template" />
  <p />
   
    </div>
  );
}
