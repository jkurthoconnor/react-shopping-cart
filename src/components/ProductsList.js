import React from 'react';
import EditableProduct from './EditableProduct'

const ProductsList = (props) => {

  const renderEditableProducts = props.products.map(product => {
    return (
      <EditableProduct
        key={product.id}
        onAddItemToCart={props.onAddItemToCart}
        {...product}
      />
    );
  })

  return (
    <div className='product-listing'>
      <h2>Products</h2>
      { renderEditableProducts }
    </div>
  );
}

export default ProductsList;
