const customFetch = (url, header) =>
    fetch(url, header).then((res) =>
        res.ok ? res.json() : Promise.reject(`Something went wrong: ${res.status}`)
    );

class MainApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getUserInfo(token) {
        return customFetch(`${this._baseUrl}/users/me`, {
            headers: {
                ...this._headers,
                authorization: `Bearer ${token}`,
            }
        });
    }

    getSavedArticles(token) {
        return customFetch(`${this._baseUrl}/articles`, {
            headers: {
                ...this._headers,
                authorization: `Bearer ${token}`,
            },
        });
    }

    saveNewArticle(inputValues, token) {
        return customFetch(`${this._baseUrl}/articles`, {
            method: "POST",
            headers: {
                ...this._headers,
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: inputValues.title,
                link: inputValues.link,
            }),
        });
    }

    deleteArticle(articleId, token) {
        return customFetch(`${this._baseUrl}/articles/${articleId}`, {
            method: "DELETE",
            headers: {
                ...this._headers,
                authorization: `Bearer ${token}`,
            },
        });
    }
}

const mainApi = new MainApi({
    baseUrl: "http://localhost:3001",
    headers: {
        "Content-Type": "http://localhost:3001",
    },
});

export default mainApi;