import React from 'react';

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
            <a href='' className='register__link'>
              Войти
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
