import React from 'react';

const Product = (props) => {

  const handleAddToCart = (e) => {
    e.preventDefault();
    props.onAddItemToCart(props.id);
  };

  const handleDeleteFromCart = (e) => {
    e.preventDefault();
    props.onDeleteFromCart(props.id);
  };

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
           onClick={props.onFormToggle}>
          Edit
        </a>
      </div>
      <a className="delete-button"
         onClick={handleDeleteFromCart} >
        <span>X</span>
      </a>
    </div>
  );
};

export default Product;
