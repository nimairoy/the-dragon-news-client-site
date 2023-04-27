import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsight from '../EditorInsight/EditorInsight';

const News = () => {
    const news = useLoaderData();
    const { _id, author, details, image_url, title, category_id } = news;
    return (
        <>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft></FaArrowLeft> All News in this Categories</Button></Link>
                </Card.Body>
            </Card>
            <EditorInsight></EditorInsight>
        </>

    );
};

export default News;