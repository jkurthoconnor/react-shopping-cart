import React from 'react';
import EditableProduct from './EditableProduct.js'

const ProductsList = (props) => (
  <div className="product-listing">
    <h2>Products</h2>

    {
      props.products.map(p => {
        return (
          <EditableProduct
            key={p.id}
            onAddItemToCart={props.onAddItemToCart}
            {...p}
          />
        )}
      )
    }

  </div>

);

export default ProductsList;
