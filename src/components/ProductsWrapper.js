import React, { Component } from 'react';
import ProductsList from './ProductsList.js'
import ToggleableAddProduct from './ToggleableAddProduct.js'

function ProductsWrapper(props){
   return (
    <main>
      <ProductsList
        products={props.products}
      />
      <ToggleableAddProduct />
    </main>
    )
}

export default ProductsWrapper
