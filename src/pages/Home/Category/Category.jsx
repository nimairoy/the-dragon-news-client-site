import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {

    const { id } = useParams();
    const categoryNews = useLoaderData();
    console.log(categoryNews)

    return (
        <div>
            {id && <h4>This Category News {categoryNews.length}</h4>}
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;