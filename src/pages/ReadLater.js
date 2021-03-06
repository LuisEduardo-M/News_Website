import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import "./../styles/ReadLater.css";

const ReadLater = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const newsList = localStorage.getItem("newsList");
        setNews(JSON.parse(newsList) || []);

    }, []);

    const deleteSavedNews = (index) => {
        let newsFilter = news.filter((item, i) => {
            return i !== index;
        });
        setNews(newsFilter);
        localStorage.setItem("newsList", JSON.stringify(newsFilter));
        toast.success("News deleted from Read Later");
    }

    return (
        <div className='news_list'>
            <div className='container'>
                <h1 className="display-5 fw-bold mt-3 mb-3">Read Later</h1>
                {news.length === 0 && <h1 className='d-flex justify-content-center display-4 align-content-center'>No news saved</h1>}
                <ul>
                    {news.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className='mb-4'>
                                    <h2>{item.title}</h2>
                                    <a target="blank" href={item.url}><button className="btn btn-primary">Read More</button></a>
                                    <button onClick={() => deleteSavedNews(index)} className='btn btn-danger'>Delete</button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ReadLater;