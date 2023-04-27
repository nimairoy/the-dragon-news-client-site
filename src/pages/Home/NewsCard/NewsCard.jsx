import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, author, details, image_url, title, total_view, rating } = news;
    return (
        <Card className="mt-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ width: '45px', height: '45px' }} src={author?.img} roundedCircle />
                <div className='flex-grow-1 ms-2 mt-2'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format("YYYY-MM-D")}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}.....<Link to={`/news/${_id}`} >Read More</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating.number}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        readonly
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar />}
                    />
                    <span className='ms-2'>{rating?.number}</span>
                </div>
                <div>
                    <FaRegEye></FaRegEye> <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;