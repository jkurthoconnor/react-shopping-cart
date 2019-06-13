import React from 'react';
import Product from './Product';

const EditableProduct = (props) => {
  return (
    <div className="product">
      <Product
        {...props}
      />
    </div>
  )
};

export default EditableProduct;
