import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authorize } from '../../utils/Auth';

const Login = ({ setLogin, handleError }) => {
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    authorize(email, password)
      .then((res) => {
        if (res.token) {
          setLogin(true);
          navigate('/');
        } else handleError();
      })
      .catch(() => handleError());
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  return (
    <div className='register-content login-content'>
      <h2 className='register__title login__title'>Вход</h2>
      <form
        name='login'
        className='register login'
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className='register__inner login__inner'>
          <input
            type='email'
            placeholder='Email'
            className='register__input login__input'
            onChange={(e) => handleEmailChange(e)}
          />
          <input
            type='password'
            placeholder='Пароль'
            className='register__input login__input'
            onChange={(e) => handlePasswordChange(e)}
          />
          <button className='register__submit login__submit'>Войти</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
