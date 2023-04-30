import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://the-dragon-news-server-nimairoy.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log('Error: ', error));

    }, [])

    return (
        <div>
            <h4>Left Nav</h4>
            {
                categories.map(category => <p
                    key={category.id}>
                    <Link to={`/category/${category.id}`} className='text-decoration-none text-dark p-2'>{category.name}</Link>
                </p>)
            }

        </div>
    );
};

export default LeftNav;