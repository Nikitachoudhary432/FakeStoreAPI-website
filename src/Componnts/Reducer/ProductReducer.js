const productReducer = (
  state = { products: [], product_data: {}, product_category: [] },
  action
) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_SINGLE_PRODUCT":
      return { ...state, product_data: action.payload };
    case "GET_ALL_CATEGORY":
      return { ...state, product_category: action.payload };
    case "GET_PROD_CATEGORY":
      return { ...state, products: action.payload };
    case "GET_PROD_LIMIT":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default productReducer;
