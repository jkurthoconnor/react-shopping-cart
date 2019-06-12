import React, { Component } from 'react';
import Product from './Product';

class EditableProduct extends Component {
  render() {
    return (
      <div className="product">
        <Product
          {...this.props}
        />
      </div>
    )
  }

}

export default EditableProduct;