import React, { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Card = (props) => {
  const handleClick = () => props.onCardClick(props.cardInfo);
  const currentUser = useContext(CurrentUserContext);
  const isOnw = props.cardInfo.owner._id === currentUser._id;
  const isLiked = props.cardInfo.likes.some(
    (item) => item._id === currentUser._id
  );
  return (
    <div className='card' key={props.cardInfo._id}>
      <button
        type='button'
        className={`card__trash ${!isOnw && 'card__trash_hidden'}`}
        onClick={() => props.onCardDelete(props.cardInfo)}
      ></button>
      <img
        src={props.cardInfo.link}
        alt={props.cardInfo.name}
        className='card__img'
        onClick={handleClick}
      />
      <div className='card__item'>
        <h2 className='card__title'>{props.cardInfo.name}</h2>
        <div className='card__likesection'>
          <button
            type='button'
            className={`card__like ${isLiked && 'card__like_active'}`}
            onClick={() => props.onCardLike(props.cardInfo)}
          ></button>
          <p className='card__like-count'>{props.cardInfo.likes.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
