class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    return res.ok
      ? res.json()
      : Promise.reject("Error: " + res.status + res.statusText);
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  renderProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  updateProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then((res) => this._getResponseData(res));
  }

  postCard(title, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: title,
        link: link,
      }),
    }).then((res) => this._getResponseData(res));
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  changeLikeCardStatus(id, status) {
    return status
      ? fetch(`${this._baseUrl}/cards/${id}/likes`, {
          headers: this._headers,
          method: "PUT",
        }).then((res) => this._getResponseData(res))
      : fetch(`${this._baseUrl}/cards/${id}/likes`, {
          headers: this._headers,
          method: "DELETE",
        }).then((res) => this._getResponseData(res));
  }

  putLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      headers: this._headers,
      method: "PUT",
    }).then((res) => this._getResponseData(res));
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      headers: this._headers,
      method: "DELETE",
    }).then((res) => this._getResponseData(res));
  }

  changeAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({ avatar: `${link}` }),
    }).then((res) => this._getResponseData(res));
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort36",
  headers: {
    authorization: "5b005959-c919-4ebc-988e-c1e91f53093c",
    "Content-Type": "application/json",
  },
});

export default api;
