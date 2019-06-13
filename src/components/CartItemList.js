import React from 'react';
import CartItem from './CartItem';

const CartItemList = (props) => {
  return (
  <table class="cart-items">
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
    
    {

      props.items.map(product => 
        <CartItem
          key={product.id}
          {...product}
        />
      )

    }

    <tr>
      <td colspan="3" class="total">Total: $729.98</td>
    </tr>
  </table>

  )
};

export default CartItemList;