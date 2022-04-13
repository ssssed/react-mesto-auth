import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Header = () => {
  const location = useLocation();
  console.log(location);
  return (
    <header className='header'>
      <img src={logo} alt='Логотип' className='header__img' />
      <div className='header__info'>
        <p className='header__email'></p>
        <Link
          to={`${location.pathname === '/sing-in' ? '/sing-up' : '/sing-in'}`}
          className='header__link'
        >
          {location.pathname === '/sing-in' ? 'Регистрация' : 'Войти'}
        </Link>
      </div>
    </header>
  );
};

export default Header;
