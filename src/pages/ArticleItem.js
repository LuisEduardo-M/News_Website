import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

const ArticleItem = () => {
    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        const loadNews = async () => {
            await api.get(`/article/${id}`, {
                params: {
                    apiKey: process.env.REACT_APP_API_KEY
                }
            })
                .then(response => {
                    console.log(response);
                })
                .catch(() => {
                    console.log("error");
                })
        }
        loadNews();
    }, [id]);

    return (
        <div>
            <h1>Article {id}</h1>
        </div>
    );
}

export default ArticleItem;