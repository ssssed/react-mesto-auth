import React, { createRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const linkRef = createRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar(linkRef.current.value);
  };

  useEffect(() => {
    linkRef.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      name='modal-avatar'
      title='Обновить Аватар'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Сохранить'
      onSubmit={handleSubmit}
    >
      <input
        id='inputAvatarLink'
        type='url'
        ref={linkRef}
        placeholder='Ссылка на картинку'
        className='modal__input modal-avatar__input'
        required
      />
      <span className='modal__input-error' id='inputAvatarLink-error'></span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
