const cartReducer = ((state=[], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
    case 'REMOVE_FROM_CART':

    default:
      return state;
  }
})

export default cartReducer