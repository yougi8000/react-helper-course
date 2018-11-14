import React from 'react';

import Product from './Product';

const ProductList = props => {
    return (
        <section className='product-list'>
            {props.listBooks.map(book => (
                <Product
                    oneBook={book}
                    onClickBtnAdd={props.toAddBook}
                    onClickBtnRemove={props.toRemoveBook}
                />
            ))}
        </section>
    );
};

export default ProductList;