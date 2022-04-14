import React from 'react';
import done from '../../images/done.svg';
import error from '../../images/error.svg';

const InfoTooltip = ({ isOpen, isError, onClose }) => {
  return (
    <div className={`modal ${isOpen && 'modal_active'}`}>
      <div className='modal__container'>
        <button
          type='button'
          onClick={onClose}
          className='modal__close-btn'
        ></button>
        <img
          src={isError ? error : done}
          alt='Картинка выполнения'
          className='modal__img'
        />
        <p className='modal__title popup__title'>
          {isError
            ? 'Что-то пошло не так! Попробуйте ещё раз.'
            : 'Вы успешно зарегистрировались!'}
        </p>
      </div>
    </div>
  );
};

export default InfoTooltip;
