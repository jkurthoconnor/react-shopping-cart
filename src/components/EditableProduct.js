import React from 'react';
import Product from './Product';
import EditProductForm from './EditProductForm'

class EditableProduct extends React.Component {

  state = {
    editing: false,
  }

  handleEditClick = () => {
    this.setState({editing: !this.state.editing})
  }

 render(){
    return (
      <div className="product">
        <Product
         {...this.props}
         onEditClick={this.handleEditClick}
        />
        {this.state.editing ?  (<EditProductForm
          id={this.props.id}
          onEditClick={this.handleEditClick}
          product={{title: this.props.title, price: this.props.price, quantity: this.props.quantity}}
          />) : ''}
      </div>
    )
  };
}

export default EditableProduct;
