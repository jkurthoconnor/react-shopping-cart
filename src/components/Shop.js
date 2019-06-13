import React, { Component } from 'react';
import Header from './Header'
import ProductsWrapper from './ProductsWrapper'
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

  handleAddProductToCart = (productId) => {
    this.updateProductQuantity(productId) && this.updateCart(productId);
  }

  updateProductQuantity = (productId) => {
    const product = this.state.products.filter(prod => prod.id === productId)[0];

    if (product.quantity !== 0) {
      const updatedProductsList = this.state.products.map((product) => {
        if (product.id === productId) {
          return Object.assign({}, product, {quantity: product.quantity - 1});
        } else {
          return product;
        }
      });

      this.setState({
        products: updatedProductsList
      });

      return true;
    } else {
      return false;
    }
  }

  handleAddProduct = (newProduct) => {
    client.post('/api/products', newProduct)
      .then(product => {
        this.setState( {
          products: [ ...this.state.products, product ]
        })
    })
  }

  handleDeleteFromCart = (productId) => {
    let transactionAllowed = this.state.cart.filter( product => {
      return product.id === productId;
    }).length > 0;

    if (!transactionAllowed) { return }

    let cartWithReducedQuantity = this.state.cart.map( product => {
      if (product.id === productId) {
        return {...product, quantity: product.quantity - 1 };
      } else {
        return product;
      }
    });

    let listWithIncreasedQuantity = this.state.products.map( product => {
      if (product.id === productId) { 
       return { ...product, quantity: product.quantity + 1 } 
      } else {
        return product;
      }
    });

    this.setState({
      cart: cartWithReducedQuantity.filter( item => item.quantity > 0 ),
      products: listWithIncreasedQuantity,
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
          onDeleteFromCart={this.handleDeleteFromCart}
        />
      </div>
    );
  }
}

export default Shop;
