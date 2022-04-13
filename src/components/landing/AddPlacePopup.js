import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace(title, link);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setTitle('');
    setLink('');
  }, [isOpen]);

  return (
    <PopupWithForm
      name='modal-add'
      title='Новое место'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Создать'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        name='Название'
        id='inputTitle'
        placeholder='Название'
        className='modal__input modal__input_type_title'
        minLength='2'
        maxLength='30'
        value={title}
        onChange={handleTitleChange}
        required
      />
      <span className='modal__input-error' id='inputTitle-error'></span>
      <input
        id='inputLink'
        type='url'
        placeholder='Ссылка на картинку'
        className='modal__input modal__input_type_link'
        value={link}
        onChange={handleLinkChange}
        required
      />
      <span className='modal__input-error' id='inputLink-error'></span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
