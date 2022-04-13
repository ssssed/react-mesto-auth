import React from 'react';

const Login = () => {
  return (
    <div className='register-content login-content'>
      <h2 className='register__title login__title'>Вход</h2>
      <form name='login' className='register login'>
        <div className='register__inner login__inner'>
          <input
            type='email'
            placeholder='Email'
            className='register__input login__input'
          />
          <input
            type='password'
            placeholder='Пароль'
            className='register__input login__input'
          />
          <button className='register__submit login__submit'>Войти</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
