import React from 'react';
import client from '../lib/client';
import store from '../lib/store';

const Product = (props) => {

  const handleAddToCart = (e) => {
    e.preventDefault();

    let id = props.id;
    store.dispatch({id, type: 'ADD_ITEM_TO_CART'});
    // props.onAddItemToCart(props.id);
  };

  const handleDeleteFromList = (e) => {
    e.preventDefault()
    let id = props.id
    client.delete(`/api/products/${id}`)
    .then(() => {
      store.dispatch({id, type: 'DELETE_PRODUCT'})
    });
  }

  const handleEditClick = (e) => {
    e.preventDefault()
    props.onEditClick()
  }
    /*
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

*/

  return (
    <div className="product-details">
      <h3>{props.title}</h3>
      <p className="price">${props.price}</p>
      <p className="quantity">{props.quantity} Left in stock</p>
      <div className="actions product-actions">
        <a className="button add-to-cart"
           onClick={handleAddToCart}>
          Add to Cart
        </a>
        <a className="button edit"
           onClick={handleEditClick}>
          Edit
        </a>
      </div>
      <a className="delete-button"
         onClick={handleDeleteFromList} >
        <span>X</span>
      </a>
    </div>
  );
};

export default Product;
