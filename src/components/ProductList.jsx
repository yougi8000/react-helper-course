import React from 'react';

import Product from './Product';

const ProductList = props => {
    return (
        <section className='product-list'>
            <Product
                id={1}
                title='The Psychopath test'
                genre=' Non-Fiction'
                image='http://bookcoverarchive.com/wp-content/uploads/2017/01/psychopath-test.jpg'
            />
            <Product
                id={2}
                title='The Psychopath test'
                genre=' Non-Fiction'
                image='http://bookcoverarchive.com/wp-content/uploads/2017/01/psychopath-test.jpg'
            />
            <Product
                id={3}
                title='The Psychopath test'
                genre=' Non-Fiction'
                image='http://bookcoverarchive.com/wp-content/uploads/2017/01/psychopath-test.jpg'
            />
            <Product
                id={4}
                title='The Psychopath test'
                genre=' Non-Fiction'
                image='http://bookcoverarchive.com/wp-content/uploads/2017/01/psychopath-test.jpg'
            />
            <Product
                id={5}
                title='The Psychopath test'
                genre=' Non-Fiction'
                image='http://bookcoverarchive.com/wp-content/uploads/2017/01/psychopath-test.jpg'
            />
            <Product
                id={6}
                title='The Psychopath test'
                genre=' Non-Fiction'
                image='http://bookcoverarchive.com/wp-content/uploads/2017/01/psychopath-test.jpg'
            />
        </section>
    );
};

export default ProductList;