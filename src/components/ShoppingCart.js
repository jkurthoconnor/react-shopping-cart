import React from 'react';
import CartItemList from './CartItemList';

const ShoppingCart = (props) => (
  <div className="cart">
    <h2>Your Cart</h2>
    {
      props.items.length > 0 ?
        <CartItemList
          items={props.items}
        />
        :
        <div>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <a className="button checkout disabled">Checkout</a>
        </div>
    }
  </div>
)

export default ShoppingCart;