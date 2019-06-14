const cartReducer = ((state=[], action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return [...state, action.item];
    default:
      return state;
  }
})

export default cartReducer


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

*/
