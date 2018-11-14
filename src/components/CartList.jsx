import React from 'react';

const CartList = props => {
    return (
        <section className='cart-list'>
            <ul>
                <li
                    className='cart-item'
                    key={1}
                >
                    <p className='cart-title'>Title</p>
                    <p className='cart-quantity'>1</p>
                </li>
                <li
                    className='cart-item'
                    key={2}
                >
                    <p className='cart-title'>Title</p>
                    <p className='cart-quantity'>1</p>
                </li>
                <li
                    className='cart-item'
                    key={3}
                >
                    <p className='cart-title'>Title</p>
                    <p className='cart-quantity'>1</p>
                </li>
                <li
                    className='cart-item'
                    key={4}
                >
                    <p className='cart-title'>Title</p>
                    <p className='cart-quantity'>1</p>
                </li>
                <li
                    className='cart-item'
                    key={5}
                >
                    <p className='cart-title'>Title</p>
                    <p className='cart-quantity'>1</p>
                </li>
                <li
                    className='cart-item'
                    key={6}
                >
                    <p className='cart-title'>Title</p>
                    <p className='cart-quantity'>1</p>
                </li>
            </ul>
            <p className='cart-total'>6 items</p>
        </section>
    );
};

export default CartList;