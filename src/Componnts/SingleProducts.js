import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleProduct } from "./Action";
import { Link } from "react-router-dom";

const SingleProducts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((e) => e.productReducer.product_data);

  //   const [product, setProduct] = useState({});
  //   const SingleProduct = async () => {
  //     try {
  //       const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  //       const json = await res.json();
  //       setProduct(json)
  //       console.log(product);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  useEffect(() => {
    dispatch(singleProduct(id));
  }, []);

  return (
    <div className="p-9 flex justify-center ">
      <Link to="/home">
        <button className="p-3 rounded-3xl">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
      </Link>
      <div className="body p-4">
        <div className=" border-solid border-2 m-20 p-3 rounded-lg align-items-center p-4">
          <img className="h-[250px]" src={product.image} alt="" />
          <h3 className="text-left pl-4">
            <strong>Title : </strong>
            {product.title}
          </h3>
          <p className="text-left pl-4">
            {" "}
            <strong>Description : </strong>
            {product.description}
          </p>
          <p className="text-left pl-4">
            <strong>Price : </strong>
            {product.price} $
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
