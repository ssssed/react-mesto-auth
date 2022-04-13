import React from 'react';

const ImagePopup = (props) => {
  if (props.card !== null) {
    return (
      <section className={'modal opencard modal_active'}>
        <div className='opencard__content'>
          <img
            src={props.card.link}
            alt={props.card.name}
            className='opencard__img'
          />
          <h2 className='opencard__title'>{props.card.name}</h2>
          <button
            type='button'
            className='modal__close-btn opencard__close-btn'
            onClick={props.onClose}
          ></button>
        </div>
      </section>
    );
  } else return <></>;
};

export default ImagePopup;
