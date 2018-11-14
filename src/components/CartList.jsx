import React from 'react';

const CartList = props => {
    return (
        <section className='cart-list'>
            <ul>
                {props.cartList.map(cartItem => (
                    <li
                        className='cart-item'
                        key={cartItem.id}
                    >
                        <p className='cart-title'>{cartItem.title}</p>
                    </li>
                ))}
            </ul>
            <p className='cart-total'>{props.cartList.length} items</p>
        </section>
    );
};

export default CartList;