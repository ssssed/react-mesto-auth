import React from 'react';

const PopupWithForm = ({
  name,
  title,
  isOpen,
  onClose,
  children,
  buttonText,
  onSubmit,
}) => {
  return (
    <section className={`modal ${name} ${isOpen ? 'modal_active' : ''}`}>
      <div className='modal__container'>
        <h2 className='modal__title'>{title}</h2>
        <button
          type='button'
          onClick={onClose}
          className={`modal__close-btn ${name}__close-btn`}
        ></button>
        <form
          name={`modal__inner ${name}__inner`}
          className={`modal__inner ${name}__inner`}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button type='submit' className={`modal__save ${name}__save`}>
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default PopupWithForm;
