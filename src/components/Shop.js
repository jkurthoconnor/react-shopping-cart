import React, { Component } from 'react';
import Header from './Header'
import ProductsWrapper from './ProductsWrapper'

class Shop extends Component {
  state = {
    cart: [],
  }

  updateCart = (productId) => {
    const product = this.state.products.filter(prod => prod.id === productId)[0];
    const someInCart = this.state.cart.some(prod => prod.id === productId);

    let updatedCart;

    if (someInCart) {
      updatedCart = this.state.cart.map((product) => {
        if (product.id === productId) {
          return Object.assign({}, product, {quantity: product.quantity + 1})
        } else {
          return product;
        }
      });
    } else {
      updatedCart = this.state.cart.concat(Object.assign({}, product, {quantity: 1})); 
    }

    this.setState({
      cart: updatedCart,
    });
  }



  render() {
    return (
      <div>
        <Header 
          itemsInCart={this.state.cart}
        />
        <ProductsWrapper
          // onAddItemToCart={this.handleAddProductToCart}
          // onDeleteFromCart={this.handleDeleteFromCart}
        />
      </div>
    );
  }
}

export default Shop;
