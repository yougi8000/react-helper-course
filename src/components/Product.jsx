import React from 'react';

const Product = props => {
    return (
        <article
            className='product'
            key={props.id}
        >
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.genre}</p>

            <div className='product-buttons'>
                <button>+</button>
                <button>-</button>
            </div>
        </article>
    );
};

export default Product;