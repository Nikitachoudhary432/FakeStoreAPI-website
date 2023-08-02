import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getCategories,
  productCategories,
  productLimit,
  productDelete,
  addCart,
} from "./Action";
import Add from "./Add";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((e) => e.productReducer.products);
  const category = useSelector((e) => e.productReducer.product_category);
  const limit = [5, 10, 15, 20];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (id) => {
    const currentDate = new Date().toISOString().slice(0, 10);
    dispatch(addCart(currentDate, id));
  };

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  return (
    <div className="All Products">
      <h1 className="font-serif">All Products</h1>
      <hr />
      <div className="flex ml-8 justify-between ">
        <div className="flex">
          <select
            onChange={(event) =>
              dispatch(productCategories(event.target.value))
            }
            className="flex font-bold border-none text-center uppercase mr-3"
          >
            <option value="">Select Category</option>
            {category?.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            onChange={(event) => dispatch(productLimit(event.target.value))}
            className="flex font-bold border-none text-center uppercase w-auto "
          >
            <option value="">Product Limit</option>
            {limit.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="mr-8">
          <Link to="/allCart">
            <button className="border-none bg-inherit text-3xl">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
          </Link>
          <Link to="/user">
            <Avatar name="User" size="40" className="rounded-3xl ml-3" />
          </Link>
        </div>
      </div>
      <hr />
      <div>
        <div className="mr-8 flex justify-end">
          <button
            className="border-none bg-blue-800 text-white h-[30px] "
            onClick={handleAdd}
          >
            Add Product
          </button>
        </div>
        <div className="grid grid-cols-3 m-5">
          {products.map((items) => {
            return (
              <div
                className="border-solid border-2 m-5 p-3 rounded-lg border-t-sky-200 border-l-sky-200"
                key={items.id}
              >
                <img className="h-[150px]" src={items.image} alt="" />
                <h3 className="text-left pl-4">{items.title}</h3>
                <p className="text-left pl-4">
                  <strong>Description :</strong>{" "}
                  {items.description.length > 100
                    ? `${items.description.slice(0, 100)} .....more`
                    : items.description}
                </p>
                <p className="text-left pl-4">
                  <strong>Price :</strong> {items.price} $
                </p>
                <div className="flex justify-between">
                  <div className="flex ">
                    <div className="w-[60px] bg-blue-800  ml-2 h-[30px]">
                      <Link
                        to={`/single/${items.id}`}
                        className="no-underline text-white"
                      >
                        View
                      </Link>
                    </div>
                    <div className="w-[60px] bg-blue-800  ml-2 h-[30px]">
                      <button
                        onClick={() => dispatch(productDelete(items.id))}
                        className="bg-inherit border-none text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="w-[85px] bg-amber-500 ml-2 h-[35px]">
                    {/* <button
                      onClick={() => dispatch(addCart())}
                      className="bg-inherit border-none text-white"
                    >
                      Add to Cart
                    </button> */}
                    <button
                      onClick={() => handleAddToCart(items.id)}
                      className="bg-inherit border-none text-white"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Add isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AllProducts;
