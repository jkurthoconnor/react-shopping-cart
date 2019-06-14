import React from 'react';
import ShoppingCart from './ShoppingCart';

const Header = (props) => (
  <header>
    <h1>The Shop!</h1>
    <ShoppingCart
      // items={props.itemsInCart}
    />
  </header>
);

export default Header;
