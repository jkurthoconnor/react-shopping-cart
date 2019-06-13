import React from 'react';
import EditableProduct from './EditableProduct';
import store from '../lib/store'
import client from '../lib/client';

class ProductsList extends React.Component {

  componentDidMount(){
      this.unsubscribe = store.subscribe(() => this.forceUpdate())
      client.get('/api/products')
            .then((products) => {
              store.dispatch({products, type: 'FETCH_PRODUCTS'})
    })
  }

  render()  {
    let editableProducts = store.getState().products.map( (product) => {
      return (
        <EditableProduct
          key={product.id}
          onAddItemToCart={this.props.onAddItemToCart}
          onDeleteFromCart={this.props.onDeleteFromCart}
          {...product}
        />
      );
    });

    return (
      <div className='product-listing'>
        <h2>Products</h2>
        { editableProducts }
      </div>
    );
  }
};

export default ProductsList;
