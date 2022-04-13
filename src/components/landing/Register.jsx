import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register-content'>
      <h2 className='register__title'>Регистрация</h2>
      <form name='register' className='register'>
        <div className='register__inner'>
          <input type='email' placeholder='Email' className='register__input' />
          <input
            type='password'
            placeholder='Пароль'
            className='register__input'
          />
          <button className='register__submit'>Зарегистрироваться</button>
          <p className='register__text'>
            Уже зарегистрированны?{' '}
            <Link to='/sing-in' className='register__link'>
              Войти
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
