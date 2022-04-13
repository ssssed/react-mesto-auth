import React, { useContext, useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(name, description);
  };
  return (
    <PopupWithForm
      name='modal-edit'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Сохранить'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        name='Имя'
        id='inputName'
        placeholder='Имя'
        className='modal__input modal__input_type_name'
        minLength='2'
        maxLength='40'
        value={name || ''}
        onChange={handleNameChange}
        required
      />
      <span className='modal__input-error' id='inputName-error'></span>
      <input
        id='inputJob'
        type='text'
        placeholder='Работа'
        className='modal__input modal__input_type_job'
        minLength='2'
        maxLength='200'
        value={description || ''}
        onChange={handleDescriptionChange}
        required
      />
      <span className='modal__input-error' id='inputJob-error'></span>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
