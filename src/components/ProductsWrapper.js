import React from 'react';
import ProductsList from './ProductsList'
import ToggleableAddProduct from './ToggleableAddProduct'

const ProductsWrapper = (props) => {
  return (
    <main>
      <ProductsList
        onAddItemToCart={props.onAddItemToCart}
        onDeleteFromCart={props.onDeleteFromCart}
      />
      <ToggleableAddProduct 
      />
    </main>
  )
};

export default ProductsWrapper

