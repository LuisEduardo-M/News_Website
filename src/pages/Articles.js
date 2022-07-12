import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles/Articles.css";

const Articles = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const url = "https://newsapi.org/v2/everything?q=Apple&from=2022-07-11&sortBy=popularity&apiKey=50f55c77a2b4476484c231bf485017db"

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNews(data.articles);
            });
    }, []);
    return (
        <div>
            <h1 className="display-4">Articles Page</h1>
            <div className="container">
                {news.map(item => {
                    return (
                        <article key={item.url} className="article">
                            {/* <span>{item.author}</span> */}
                            <h2 className="title">{item.title}</h2>
                            <p className="description">{item.description}</p>
                            <img src={item.urlToImage} alt={item.title} /> <br/>
                            <a href={item.url} className="button">View</a> <hr />
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Articles;