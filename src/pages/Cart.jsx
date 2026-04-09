import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCart,
  emptyCart,
  incrementCart,
  removeCartItem,
} from "../redux/slices/cartSlice";
import Swal from "sweetalert2";

function Cart() {
  const userCart = useSelector((state) => state.cartReducer);
  const [cartTotal, setCartTotal] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setCartTotal(userCart?.reduce((acc, curr) => acc + curr.totalPrice, 0));
  }, [userCart]);

  const handleDecrementCart = (product) => {
    if (product.quantity > 1) {
      dispatch(decrementCart(product.id));
    } else {
      dispatch(removeCartItem(product.id));
    }
  };

  const handleCheckout = () => {
    dispatch(emptyCart());
    Swal.fire({
      title: "Order Placed Successfully",
      text: "Thank you for purchasing our products.",
      icon: "success",
      confirmButtonText: "Thank you!",
    });
    navigate("/");
  };

  return (
    <>
      <Header />

      {userCart?.length > 0 ? (
        <section className="container pt-5">
          <h1 className="text-danger my-5">User Cart Summary</h1>
          <div className="row mb-5">
            <div className="col-md-8 border rounded p-5">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>

                <tbody>
                  {userCart?.map((item, index) => (
                    <tr key={item?.id}>
                      <td>{index + 1}</td>
                      <td>{item?.title}</td>
                      <td>
                        <img
                          width={"70px"}
                          className="img-fluid"
                          src={item?.thumbnail}
                          alt="productImg"
                        />
                      </td>
                      <td>
                        <div className="d-flex">
                          <button
                            onClick={() => dispatch(handleDecrementCart(item))}
                            className="btn fs-1"
                          >
                            -
                          </button>
                          <input
                            style={{ width: "50px" }}
                            value={item?.quantity}
                            type="text"
                            className="form-control"
                            readOnly
                          />
                          <button
                            onClick={() => dispatch(incrementCart(item?.id))}
                            className="btn fs-1"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>${item?.totalPrice}</td>
                      <td>
                        <button
                          onClick={() => dispatch(removeCartItem(item?.id))}
                          className="btn text-danger fs-4 fw-bolder"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="float-end mt-3">
                <button
                  onClick={() => dispatch(emptyCart())}
                  className="btn btn-danger"
                >
                  EMPTY CART
                </button>
                <Link to={"/"} className="btn btn-info ms-5">
                  SHOP MORE
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border rounded p-5 shadow">
                <h3>
                  Total <span>{userCart?.length}</span> Items
                </h3>
                <h3>
                  Total Amount:{" "}
                  <span className="text-danger">${cartTotal.toFixed(2)}</span>
                </h3>
                <hr />
                <div className="d-grid">
                  <button onClick={handleCheckout} className="btn btn-success">
                    CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="d-flex flex-column justify-content-center align-items-center py-5">
          <img
            width={400}
            src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
            alt="emptyCartImg"
          />
          <h1 className="mb-3">Your Cart is Empty!</h1>
          <Link to={"/"} className="btn btn-primary">
            Add More
          </Link>
        </section>
      )}
    </>
  );
}

export default Cart;
