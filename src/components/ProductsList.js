import React, { Component } from 'react';
import EditableProduct from './EditableProduct.js'

function ProductsList(props) {
  let products = props.products.map(p => {
    return (
        <EditableProduct
          key={p.id}
          {...p}
        />
    )
  })

  return (
      <div className="product-listing">
        {products}
      </div>
    )
}

export default ProductsList