import { json } from "react-router-dom";

export const getProducts = () => async (dispatch) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    dispatch({ type: "GET_PRODUCTS", payload: json });
  } catch (error) {
    console.log(error);
  }
};

export const singleProduct = (id) => async (dispatch) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = await res.json();
    dispatch({
      type: "GET_SINGLE_PRODUCT",
      payload: json,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const json = await response.json();
    dispatch({
      type: "GET_ALL_CATEGORY",
      payload: json,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Categories = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const json = await response.json();
    dispatch({
      type: "GET_ALL_CATEGORY",
      payload: json,
    });
  } catch (error) {
    console.log(error);
  }
};

export const productCategories = (category) => async (dispatch) => {
  try {
    const url =
      category.length === 0
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;
    const response = await fetch(url);
    const json = await response.json();
    dispatch({
      type: "GET_PROD_CATEGORY",
      payload: json,
    });
  } catch (error) {
    console.log(error);
  }
};

export const productLimit = (number) => async (dispatch) => {
  try {
    const url =
      number.length === 0
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products?limit=${number}`;
    const response = await fetch(url);
    const json = await response.json();
    dispatch({
      type: "GET_PROD_LIMIT",
      payload: json,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = (formData) => async (dispatch) => {
  try {
    const data = new FormData();
    data.append("title", formData.title);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("image", formData.image);

    const res = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: data,
    });

    const json = await res.json();
    dispatch({
      type: "POST_NEW_PRODUCT",
      payload: json,
    });
  } catch (error) {
    console.log(error);
  }
};

export const productDelete = (id) => async (dispatch) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    dispatch({ type: "DELETE_USER" });
  } catch (error) {
    console.log(error);
  }
};
//////////////////////////////////////////////////////

export const getCart = () => async (dispatch) => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts");
    const json = await response.json();
    dispatch({
      type: "GET_CART",
      payload: json,
    });
  } catch (error) {
    console.log(error);
  }
};

export const cartLimit = (number) => async (dispatch) => {
  try {
    const url =
      number.length === 0
        ? "https://fakestoreapi.com/carts"
        : `https://fakestoreapi.com/carts?limit=${number}`;
    const response = await fetch(url);
    const json = await response.json();
    dispatch({
      type: "GET_CART_LIMIT",
      payload: json,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addCart = (currentDate, id) => async (dispatch) => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId: 5,
        date: currentDate,
        products: [{ productId: id, quantity: 1 }],
      }),
    });
    const json = await response.json();
    dispatch({
      type: "ADD_CART",
      payload: json,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCart =
  (currentDate, id, productId, newQuantity) => async (dispatch) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/carts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          userId: id,
          date: currentDate,
          products: [{ productId: productId, quantity: newQuantity }],
        }),
      });
      const json = await response.json();
      dispatch({
        type: "ADD_CART",
        payload: json,
      });
      dispatch(getCart());
    } catch (error) {
      console.log(error);
    }
  };

//////////////////////////////////////////////////////////////////////

export const getUser = () => async (dispatch) => {
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    const json = await response.json();
    dispatch({ type: "GET_USERS", payload: json });
  } catch (error) {
    console.log(error);
  }
};

export const addUser = (formData) => async (dispatch) => {
  try {
    const res = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: formData.email,
        username: formData.username,
        password: formData.password,
        name: {
          firstname: formData.firstname,
          lastname: formData.lastname,
        },
        address: {
          city: formData.city,
          street: formData.street,
          number: formData.number,
          zipcode: formData.zipcode,
        },
        phone: formData.phone,
      }),
    });

    const json = await res.json();
    dispatch({
      type: "ADD_USER",
      payload: json,
    });
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////////////////

