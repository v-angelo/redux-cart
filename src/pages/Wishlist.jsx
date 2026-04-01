import React from "react";
import Header from "../components/Header";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeartCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlistItem } from "../redux/slices/wishlistSlice";
import Swal from "sweetalert2";
import { addToCart } from "../redux/slices/cartSlice";

function Wishlist() {
  const userWishlist = useSelector((state) => state.wishlistReducer);
  const userCart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleCart = (product) => {
    // check whether the product is in cart
    const existingProduct = userCart?.find((item) => item.id == product?.id);
    dispatch(addToCart(product));
    dispatch(removeWishlistItem(product?.id));
    Swal.fire({
      title: "Success!",
      text: existingProduct
        ? `Product ${existingProduct.title} quantity incremented!`
        : "Product added to cart!",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  return (
    <>
      <Header />
      <section className="container my-5">
        {userWishlist?.length > 0 ? (
          <>
            <div>
              <h1 className="pt-5 text-primary">User Wishlist</h1>
            </div>
            <div className="row pt-5">
              {userWishlist?.map((item) => (
                <div key={item?.id} className="col-md-3 mb-2">
                  {/* card */}
                  <Card className="rounded shadow">
                    <Card.Img
                      style={{ height: "250px" }}
                      variant="top"
                      src={item?.thumbnail}
                    />
                    <Card.Body className="text-center">
                      <Card.Title>{item?.title}</Card.Title>
                      <div className="d-flex justify-content-evenly">
                        <button
                          onClick={() => dispatch(removeWishlistItem(item?.id))}
                          className="btn text-danger fs-4"
                        >
                          <FontAwesomeIcon icon={faHeartCircleXmark} />
                        </button>
                        <button
                          onClick={() => handleCart(item)}
                          className="btn text-success fs-4"
                        >
                          <FontAwesomeIcon icon={faCartPlus} />
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src="https://i.pinimg.com/564x/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.jpg"
              alt="emptyWishlist"
            />
            {/* <h1>Your Wishlist is Empty!!</h1> */}
            {/* <Link>Add More</Link> */}
          </div>
        )}
      </section>
    </>
  );
}

export default Wishlist;
