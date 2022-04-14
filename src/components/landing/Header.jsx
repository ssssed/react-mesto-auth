import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { getContent } from '../../utils/Auth';

const Header = ({ isLogin, setLogin }) => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    isLogin &&
      getContent(localStorage.getItem('jwt')).then((res) =>
        setEmail(res.data?.email)
      );
  }, [location]);
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
  return (
    <header className='header'>
      <img src={logo} alt='Логотип' className='header__img' />
      <div className='header__info'>
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
    </header>
  );
};

export default Header;
