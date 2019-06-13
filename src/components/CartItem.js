import React from 'react';

const CartItem = (props) => {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.quantity}</td>
      <td>{props.price * props.quantity}</td>
    </tr>
  );
}

export default CartItem;