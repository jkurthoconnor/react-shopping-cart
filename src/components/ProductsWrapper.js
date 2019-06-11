import React, { Component } from 'react';
import ProductsList from './ProductsList.js'
import ToggleableAddProduct from './ToggleableAddProduct.js'

function ProductsWrapper(props){
   return (
    <main>
      <ProductsList
        products={props.products}
      />
      <ToggleableAddProduct 
        products={props.products} 
        onAddProduct={props.onAddProduct}
      />
    </main>
    )
}

export default ProductsWrapper
