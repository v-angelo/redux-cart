import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import Swal from "sweetalert2";
import { addToCart } from "../redux/slices/cartSlice";

function View() {
  const { id } = useParams();
  // console.log(id);
  const { allProducts } = useSelector((state) => state.productReducer);
  const [product, setProduct] = useState({});

  const userWishlist = useSelector((state) => state.wishlistReducer);
  const userCart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setProduct(allProducts?.find((item) => item?.id == id));
  }, []);

  const handleWishlist = () => {
    // check whether the product is in wishlist
    const existingProduct = userWishlist?.find(
      (item) => item.id == product?.id,
    );
    if (existingProduct?.title) {
      Swal.fire({
        title: "Sorry!",
        text: "Product is already in your Wishlist!!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const handleCart = () => {
    // check whether the product is in cart
    const existingProduct = userCart?.find((item) => item.id == product?.id);
    dispatch(addToCart(product));

    Swal.fire({
      title: "Success!",
      text: existingProduct
        ? `Product ${existingProduct.title} incremented!`
        : "Product added to cart!",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  return (
    <>
      <Header />

      <section className="container my-5">
        <div
          style={{ minHeight: "80vh" }}
          className="row pt-5 align-items-center"
        >
          <div className="col-lg-6 text-center">
            <img className="img-fluid" src={product?.thumbnail} alt="product" />
            <div className="d-flex justify-content-evenly mt-5">
              <div onClick={handleWishlist} className="btn btn-info">
                ADD TO WISHLIST
              </div>
              <div onClick={handleCart} className="btn btn-info">
                ADD TO CART
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3>{product?.title}</h3>
            <h2 className="text-danger">${product?.price}</h2>
            <h4>Brand: {product?.brand}</h4>
            <h4>Description: {product?.description}</h4>
            <h3>Client Reviews</h3>
            {product?.reviews?.map((item, index) => (
              <div
                key={`${item?.date}-${index}`}
                className="border rounded p-2 shadow my-1"
              >
                <p>
                  <span className="fw-bolder">{item?.reviewerName} : </span>{" "}
                  {item?.comment}
                </p>
                <p>
                  Rating: {item?.rating}
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default View;
