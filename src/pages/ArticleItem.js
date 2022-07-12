import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleItem = () => {
    const { id } = useParams();

  return (
    <div>
        <h2>Article: {id}</h2>
    </div>
  );
}

export default ArticleItem;