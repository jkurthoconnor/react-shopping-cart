import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart.js'
import ProductsWrapper from './ProductsWrapper.js'
import client from '../lib/client';

class Shop extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
      client.get('/api/products')
            .then((products) => {
      this.setState({
        products
      })
    })
  }

  handleAddProduct = (newProduct) => {
    console.log(newProduct);

    client.post('/api/products', newProduct)
      .then(product => {
        this.setState( {
          products: [ ...this.state.products, product ]
        })
    })
  }

  render() {
    return (
     <div>
      <ShoppingCart />
      <ProductsWrapper
       products={this.state.products}
       onAddProduct={this.handleAddProduct}
      />
     </div>
    );
  }
}

export default Shop;

/*
ShoppingCart
ProductsWrapper
ProductsList
EditableProduct
ToggleableAddProduct
ProductForm
*/
