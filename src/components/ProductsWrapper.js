import React from 'react';
import ProductsList from './ProductsList'
import ToggleableAddProduct from './ToggleableAddProduct'

const ProductsWrapper = (props) => {
  return (
    <main>
      <ProductsList
        products={props.products}
        onAddItemToCart={props.onAddItemToCart}
        onDeleteFromCart={props.onDeleteFromCart}
      />
      <ToggleableAddProduct 
        products={props.products} 
        onAddProduct={props.onAddProduct}
      />
    </main>
  )
};

export default ProductsWrapper

