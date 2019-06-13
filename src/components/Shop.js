import React, { Component } from 'react';
import Header from './Header.js'
import ProductsWrapper from './ProductsWrapper.js'
import client from '../lib/client';

class Shop extends Component {
  state = {
    products: [],
    cart: [],
  }

  componentDidMount() {
      client.get('/api/products')
            .then((products) => {
      this.setState({
        products
      })
    })
  }

  handleAddProductToCart = (productId) => {
    const product = this.state.products.filter(prod => prod.id === productId);
    this.updateQuantity(product, -1);

    //this.setState({
    //  cart: this.state.cart.concat(product)
    //})
  }

  updateQuantity(product, quantity) {
    client.put(`/api/products/${product.id}`, { quantity: product.quantity + quantity })
          .then((product) => {
            this.setState({
              products: this.state.products.map(p => {
                if (p.id === product.id) {
                  return {...product};
                } else {
                  return p;
                }
              })
            });
          });
  }

  handleAddProduct = (newProduct) => {
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
      <Header
        itemsInCart={this.state.cart}
      />
      <ProductsWrapper
        products={this.state.products}
        onAddProduct={this.handleAddProduct}
        onAddItemToCart={this.handleAddProductToCart}
      />
     </div>
    );
  }
}

export default Shop;
