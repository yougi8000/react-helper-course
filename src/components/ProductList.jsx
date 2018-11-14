import React from 'react';

import Product from './Product';

const ProductList = props => {
    return (
        <section className='product-list'>
            {props.listBooks.map(book => (
                <Product
                    id={book.id}
                    title={book.title}
                    image={book.image}
                    genre={book.genre}
                />
            ))}
        </section>
    );
};

export default ProductList;