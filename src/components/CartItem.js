import React from 'react';

const CartItem = (props) => {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.quantity}</td>
      <td>${(props.price * props.quantity).toFixed(2)}</td>
    </tr>
  );
}

export default CartItem;
