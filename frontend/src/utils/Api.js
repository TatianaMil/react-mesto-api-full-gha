// class Api {
//   constructor(options) {
//     this._baseUrl = options.baseUrl;
//   }

//   //checking the server response
//   _handleResponse(res) {
//     if (res.ok) {
//       return Promise.resolve(res.json());
//     }

//     //reject promise
//     return Promise.reject(`Ошибка: ${res.status}`);
//   }

//   //edit profile
//   async editProfileUserApi(data) {
//     const response = await fetch(`${this._baseUrl}/users/me`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//       body: JSON.stringify({
//         name: data.name,
//         about: data.about,
//       }),
//     });
//     return this._handleResponse(response);
//   }

//   //downloading user info trom the server
//   async getRealUserInfo() {
//     const response = await fetch(`${this._baseUrl}/users/me`, {
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     return this._handleResponse(response);
//   }

//   //downloading cards from the server
//   async getInitialCards() {
//     const response = await fetch(`${this._baseUrl}/cards`, {
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     return this._handleResponse(response);
//   }

//   //add a new card from the server
//   async createNewCardApi(data) {
//     const response = await fetch(`${this._baseUrl}/cards`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//       body: JSON.stringify(data),
//     });
//     return this._handleResponse(response);
//   }

//   //delete card
//   async removeCard(cardId) {
//     const response = await fetch(`${this._baseUrl}/cards/${cardId}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     return this._handleResponse(response);
//   }

//   //add like for the cards
//   async addLike(cardId) {
//     const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     return this._handleResponse(response);
//   }

//   //remove like for the cards
//   async removeLike(cardId) {
//     const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     return this._handleResponse(response);
//   }

//   //avatar update avatar
//   async updateProfileUserAvatar(data) {
//     const response = await fetch(`${this._baseUrl}/users/me/avatar`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//       body: JSON.stringify({
//         avatar: data.avatar,
//       }),
//     });
//     return this._handleResponse(response);
//   }
// }

// //connect api
// const api = new Api({
//   baseUrl: "https://api.milinova.nomoredomains.rocks",
// });

// export default api;


class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl
    this._headers = options.headers
  }

  //checking the server response
  _handleResponse(res) {
    if (res.ok) {
      return Promise.resolve(res.json())
    }

    //reject promise
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  //edit profile
  async editProfileUserApi(data) {
    const response = await fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    })
    return this._handleResponse(response)
  }

  //downloading user info trom the server
  async getRealUserInfo() {
    const response = await fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
    return this._handleResponse(response)
  }

  //downloading cards from the server
  async getInitialCards() {
    const response = await fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
    return this._handleResponse(response)
  }

  //add a new card from the server
  async createNewCardApi(data) {
    const response = await fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    })
    return this._handleResponse(response)
  }

  //delete card
  async removeCard(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
    return this._handleResponse(response)
  }

  //add like for the cards
  async addLike(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
    return this._handleResponse(response)
  }

  //remove like for the cards
  async removeLike(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
    return this._handleResponse(response)
  }

  //avatar update
  async updateProfileUserAvatar(data) {
    const response = await fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    })
    return this._handleResponse(response)
  }
}

//connect api
const api = new Api({
  // baseUrl: "https://api.milinova.nomoredomains.rocks",
  baseUrl: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})

export default api