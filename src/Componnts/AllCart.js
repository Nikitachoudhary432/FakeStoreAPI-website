import React, { useEffect } from "react";
import { getCart, cartLimit, updateCart } from "./Action";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";

const AllCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.carts);
  const limit = [1, 3, 5, 7];

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const formattedDate = format(dateObject, "yyyy-MM-dd");
    return formattedDate;
  };

  const increment = (id, productId, quantity) => {
    const currentDate = new Date().toISOString().slice(0, 10);
    const newQuantity = quantity + 1;
    dispatch(updateCart(currentDate, id, productId, newQuantity));
  };

  const decrement = (id, productId, quantity) => {
    const currentDate = new Date().toISOString().slice(0, 10);
    const newQuantity = quantity - 1;
    dispatch(updateCart(currentDate, id, productId, newQuantity));
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-indigo-100">
      <div className="flex flex-col bg-white rounded-lg">
        <h1>Your Cart list</h1>
        <div className="flex m-4">
          <select
            onChange={(event) => dispatch(cartLimit(event.target.value))}
            className="flex font-bold border-none text-center uppercase w-auto "
          >
            <option value="">Cart Limit</option>
            {limit.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <table className=" w-full">
          <thead>
            <tr>
              <th className="px-36">Item</th>
              <th className="px-36">Quantity</th>
              <th className="px-36">Date</th>
            </tr>
          </thead>
          <hr className="border-solid border-gray-400 my-2" />
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="mb-3">
                <td>Items</td>
                <td className="pb-4 flex flex-col items-center">
                  {item.products.map((product) => (
                    <div
                      key={product.productId}
                      className="flex justify-center border-1 border-solid rounded-lg border-zinc-200 w-[100px]"
                    >
                      <button className="border-none bg-inherit"
                       onClick={() =>
                        decrement(
                          item.id,
                          product.productId,
                          product.quantity
                        )
                      }>-</button>
                      <button className="border-none bg-inherit px-3">
                        {product.quantity}
                      </button>
                      <button
                        className="border-none bg-inherit"
                        onClick={() =>
                          increment(
                            item.id,
                            product.productId,
                            product.quantity
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  ))}
                </td>
                <td>{formatDate(item.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCart;
