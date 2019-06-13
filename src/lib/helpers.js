const helpers = {
  cartTotal(cart) {
    let total = 0;
    cart.forEach(product => {
      total += product.price * product.quantity;
    })

    return total.toFixed(2);
  }
};

export default helpers;
