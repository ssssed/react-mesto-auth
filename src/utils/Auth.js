const baseUrl = 'https://auth.nomoreparties.co/';

export const register = (email, password) => {
  return fetch(`${baseUrl}signup`, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export const authorize = (email, password) => {
  return fetch(`${baseUrl}signin`, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        localStorage.setItem('jwt', data.token);
        return data;
      }
    })
    .catch((err) => console.log(err));
};

export const getContent = (token) => {
  return fetch(`${baseUrl}users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};
