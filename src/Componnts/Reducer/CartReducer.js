const cartReducer = (state = { carts: [] }, action) => {
  switch (action.type) {
    case "GET_CART":
      return { ...state, carts: action.payload };
    case "GET_CART_LIMIT":
      return { ...state, carts: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
