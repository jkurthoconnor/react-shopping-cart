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
    <table className="cart-items">
      <tbody>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        { itemizedList }
        <tr>
          <td colSpan="3" className="total">
            ${helpers.cartTotal(props.items)}
          </td>
        </tr>
      </tbody>
    </table>
  )
};

export default CartItemList;
