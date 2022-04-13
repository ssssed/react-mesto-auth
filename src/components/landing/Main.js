import React, { useContext } from 'react';
import Avatar from '../../images/Avatar.png';
import Card from './Card';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Main = ({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  cards,
  card,
  onCardDelete,
  onCardLike,
}) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__content'>
          <div className='profile__img-container' onClick={onEditAvatar}>
            <img
              src={currentUser.avatar}
              alt='Фото профиля'
              className='profile__img'
            />
          </div>
          <div className='profile__info'>
            <div className='profile__social'>
              <h1 className='profile__name'>{currentUser.name}</h1>
              <button
                type='button'
                className='profile__edit'
                onClick={onEditProfile}
              ></button>
            </div>
            <p className='profile__job'>{currentUser.about}</p>
          </div>
        </div>
        <button
          type='button'
          className='profile__add'
          onClick={onAddPlace}
        ></button>
      </section>
      <section className='elements'>
        {cards?.map((item) => (
          <Card
            key={item._id}
            cardInfo={item}
            onCardLike={onCardLike}
            onCardClick={card}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
};

export default Main;
