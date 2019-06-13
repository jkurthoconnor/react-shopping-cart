import React from 'react';
import CartItem from './CartItem';
import helpers from '../lib/helpers';

const CartItemList = (props) => {
  const itemizedList = props.items.map( product => {
    return (
            <CartItem
              key={product.id}
              {...product}
            />
          )
  });

  return (
    <table class="cart-items">
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
      { itemizedList }
      <tr>
        <td colspan="3" class="total">
          ${helpers.cartTotal(props.items)}
        </td>
      </tr>
    </table>
  )
};

export default CartItemList;
