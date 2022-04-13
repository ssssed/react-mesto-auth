const baseUrl = 'https://auth.nomoreparties.co/';

export const register = (email, password) => {
  return fetch(`${baseUrl}/ signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

register('aboba@mail.ru', 'password1!');
