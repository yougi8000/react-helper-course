import React from 'react';

const Product = props => {
    return (
        <article
            className='product'
            key={props.oneBook.id}
        >
            <img src={props.oneBook.image} alt={props.title} />
            <h3>{props.oneBook.title}</h3>
            <p>{props.oneBook.genre}</p>

            <div className='product-buttons'>
                <button onClick={() => {props.onClickBtnAdd(props.oneBook)}}>+</button>
                <button onClick={() => {props.onClickBtnRemove(props.oneBook)}}>-</button>
            </div>
        </article>
    );
};

export default Product;