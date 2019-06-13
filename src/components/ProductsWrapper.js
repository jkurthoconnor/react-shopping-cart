import React from 'react';
import ProductsList from './ProductsList'
import ToggleableAddProduct from './ToggleableAddProduct'

function ProductsWrapper(props){
  return (
    <main>
      <ProductsList
        products={props.products}
        onAddItemToCart={props.onAddItemToCart}
      />
      <ToggleableAddProduct 
        products={props.products} 
        onAddProduct={props.onAddProduct}
      />
    </main>
  )
}

export default ProductsWrapper

