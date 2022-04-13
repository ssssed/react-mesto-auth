import './App.css';
import React from 'react';
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

const App = () => {
  const [isEditProfilePopupOpen, setOpenedEditProfilePopup] =
    React.useState(false);
  const [isAddPlacePopupOpen, setOpenedAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setOpenedEditAvatarPopup] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

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

  React.useEffect(() => {
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
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
};

export default App;
