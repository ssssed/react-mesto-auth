import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './landing/Header';
import Main from './landing/Main';
import Footer from './landing/Footer';
import PopupWithForm from './landing/PopupWithForm';
import ImagePopup from './landing/ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './landing/EditProfilePopup';
import EditAvatarPopup from './landing/EditAvatarPopup';
import AddPlacePopup from './landing/AddPlacePopup';
import { Route, Routes } from 'react-router-dom';
import Register from './landing/Register';
import Login from './landing/Login';
import ProtectedRoute from '../hoc/ProtectRoute';

const App = () => {
  const [isEditProfilePopupOpen, setOpenedEditProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, setOpenedAddPlacePopup] = useState(false);
  const [isEditAvatarPopupOpen, setOpenedEditAvatarPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLogin, setLogin] = useState(false);

  function handleEditProfileClick() {
    setOpenedEditProfilePopup(true);
  }

  function handleAddPlaceClick() {
    setOpenedAddPlacePopup(true);
  }

  function handleEditAvatarClick() {
    setOpenedEditAvatarPopup(true);
  }

  function closeAllPopups() {
    setOpenedEditProfilePopup(false);
    setOpenedAddPlacePopup(false);
    setOpenedEditAvatarPopup(false);
    setSelectedCard(null);
  }

  const handleUpdateUser = (name, description) => {
    api
      .updateProfile(name, description)
      .then((res) => setCurrentUser(res))
      .catch((er) => console.error(er));
    closeAllPopups();
  };

  const handleUpdateAvatar = (link) => {
    api
      .changeAvatar(link)
      .then((res) => setCurrentUser(res))
      .catch((er) => console.error(er));
    closeAllPopups();
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((item) => item._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((res) => {
        setCards((item) => item.map((el) => (el._id === card._id ? res : el)));
      })
      .catch((er) => console.error(er));
  };

  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((item) => item.filter((el) => el._id !== card._id));
      })
      .catch((er) => console.error(er));
  };

  const handleAddPlaceSubmit = (title, link) => {
    api
      .postCard(title, link)
      .then((res) => setCards([res, ...cards]))
      .catch((er) => console.error(er));
    closeAllPopups();
  };

  useEffect(() => {
    Promise.all([api.getCards(), api.renderProfile()])
      .then(([card, userData]) => {
        setCards(card);
        setCurrentUser(userData);
      })
      .catch((er) => console.error(er));
  }, []);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute
              isLogin={isLogin}
              children={
                <>
                  <Main
                    onEditProfile={handleEditProfileClick}
                    onEditAvatar={handleEditAvatarClick}
                    onAddPlace={handleAddPlaceClick}
                    card={setSelectedCard}
                    cards={cards}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                  />
                  <Footer />
                </>
              }
            ></ProtectedRoute>
          }
        />
        <Route path='/sing-up' element={<Register />} />
        <Route path='/sing-in' element={<Login />} />
      </Routes>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
};

export default App;
