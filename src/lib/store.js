import {createStore} from 'redux';
import cartReducer from '../reducers/cartReducer'
import productReducer from '../reducers/productReducer'

const reducer = ((state={}, action) => {
  return {
    cart: cartReducer(state.cart, action),
    products: productReducer(state.products, action)
  }
})

const store = createStore(reducer)
export default store