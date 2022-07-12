// const url = `https://newsapi.org/v2/everything?q=Apple&from=2022-07-11&sortBy=popularity&apiKey=${apiKey}`;
import axios from "axios";

const api = axios.create({
    baseURL: "https://newsapi.org/v2/",
});

export default api;
