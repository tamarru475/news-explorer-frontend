const customFetch = (url) =>
    fetch(url).then((res) =>
        res.ok ? res.json() : Promise.reject(`Something went wrong: ${res.status}`)
    );

class NewsApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    getArticles(keyword) {
        return customFetch(
            `${this._baseUrl}/everything?q=${keyword}&from=2022-11-03&to=2022-11-10&pageSize=100&apiKey=118cbe07f7f64648ac88bc4f0e06c943`
        )

    }
}

const newsApi = new NewsApi({
    baseUrl: "https://newsapi.org/v2"
});

export default newsApi;