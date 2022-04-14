import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import burger from '../../images/burger.svg';
import closeBtn from '../../images/closebutton.svg';
import { getContent } from '../../utils/Auth';

const Header = ({ isLogin, setLogin }) => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [isOpenBurger, setOpenBurger] = useState(false);
  const [isBurger, setBurger] = useState(false);
  const navigate = useNavigate();
  console.log(window.innerWidth);
  useEffect(() => {
    isLogin &&
      getContent(localStorage.getItem('jwt')).then((res) =>
        setEmail(res.data?.email)
      );
  }, [location, isLogin]);
  const logOut = () => {
    localStorage.removeItem('jwt');
    setEmail('');
    setLogin(false);
    navigate('/sign-in');
  };
  const signUp = () => {
    navigate('/sign-up');
  };
  const signIn = () => {
    navigate('/sign-in');
  };
  const handleOpenBurger = () => {
    setOpenBurger(!isOpenBurger);
  };
  const cheakHeaderProfile = () => {
    if (isOpenBurger && isLogin) return 'header__profile_active';
    else return '';
  };
  return (
    <>
      <div className={`header__profile ${cheakHeaderProfile()}`}>
        <p className='header__email' style={{ margin: '0' }}>
          {isLogin && email}
        </p>
        <button
          onClick={
            isLogin
              ? logOut
              : location.pathname === '/sign-in'
              ? signUp
              : signIn
          }
          className={`header__link ${isLogin && 'header__link_active'}`}
          style={{ margin: '0' }}
        >
          {isLogin
            ? 'Выйти'
            : location.pathname === '/sign-in'
            ? 'Регистрация'
            : 'Войти'}
        </button>
      </div>
      <header className='header'>
        <img src={logo} alt='Логотип' className='header__img' />
        <div className={`header__info ${!isLogin && 'header__info_active'}`}>
          <p className='header__email'>{isLogin && email}</p>
          <button
            onClick={
              isLogin
                ? logOut
                : location.pathname === '/sign-in'
                ? signUp
                : signIn
            }
            className={`header__link ${isLogin && 'header__link_active'}`}
          >
            {isLogin
              ? 'Выйти'
              : location.pathname === '/sign-in'
              ? 'Регистрация'
              : 'Войти'}
          </button>
        </div>
        <img
          src={isOpenBurger ? closeBtn : burger}
          alt='Бургер меню'
          className={`header__burger ${!isLogin && 'header__burger_disactive'}`}
          onClick={handleOpenBurger}
        />
      </header>
    </>
  );
};

export default Header;
