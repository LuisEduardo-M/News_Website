import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import api from "../services/api";

import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles/Articles.css";

const Articles = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setIsLoading(true);
        const loadNews = async () => {
            const response = await api.get("everything?q=Apple&from=2022-07-11&sortBy=popularity", {
                params: {
                    apiKey: apiKey
                }
            })
                .catch(error => {
                    setError(error.message);
                    setIsLoading(false);
                });
            //console.log(response.data.articles.slice(0, 25));
            setNews(response.data.articles.slice(0, 26));
            setIsLoading(false);
        }
        loadNews();
    }, [apiKey]);

    const readLater = () => {
        const newsList = localStorage.getItem("newsList");
        let savedNews = JSON.parse(newsList) || [];
        const hasNews = savedNews.some((savedNews) => savedNews.title === news.title);

        if (!hasNews) {
            savedNews.push(news);
            localStorage.setItem("newsList", JSON.stringify(savedNews));
        } else {
            alert("You already saved this news!");
            return;
        }
    }

    const renderNews = (
        <div className="container">
            <div className="row">
                <h1 className="display-5 mt-3 mb-3">Latest Articles</h1>

                {news.map((item, index) => {
                    return (
                        <article key={index} className="col-md-6 d-flex justify-content-evenly">
                            <div className="news_container">
                                <div className="image">
                                    <img className="img-fluid w-100" src={item.urlToImage} alt={item.title} />
                                </div>

                                <div className="description">
                                    <div className="title">
                                        <h2>{item.title}</h2>
                                    </div>

                                    <p>{item.description}</p>
                                </div>

                                <div className="buttons_container">
                                    <div className="read_more">
                                        <a target="blank" rel="noopener noreferrer" href={item.url}>Read more</a>
                                    </div>

                                    <div className="read_more">
                                        <button onClick={readLater}>Read later</button>
                                    </div>
                                </div>

                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );

    return (
        <div>
            {isLoading ? <Loading /> : renderNews}
            {error && <div>{error}</div>}
        </div>
    );
}

export default Articles;