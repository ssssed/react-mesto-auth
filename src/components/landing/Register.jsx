import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../utils/Auth';

const Register = ({ setOpen, setError, handleError }) => {
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password)
      .then((res) => {
        if (res.data.email) {
          setOpen(true);
          setError(false);
          navigate('/sign-in');
        }
      })
      .catch(() => handleError());
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  return (
    <div className='register-content'>
      <h2 className='register__title'>Регистрация</h2>
      <form
        name='register'
        className='register'
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className='register__inner'>
          <input
            type='email'
            placeholder='Email'
            className='register__input'
            onChange={(e) => handleEmailChange(e)}
          />
          <input
            type='password'
            placeholder='Пароль'
            className='register__input'
            onChange={(e) => handlePasswordChange(e)}
          />
          <button className='register__submit'>Зарегистрироваться</button>
          <p className='register__text'>
            Уже зарегистрированны?{' '}
            <Link to='/sign-in' className='register__link'>
              Войти
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
