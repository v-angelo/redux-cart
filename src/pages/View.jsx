import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function View() {
  return (
    <>
      <Header />

      <section className="container my-5">
        <div style={{ height: "80vh" }} className="row pt-5 align-items-center">
          <div className="col-lg-6 text-center">
            <img
              className="img-fluid"
              src="https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg"
              alt="product"
            />
            <div className="d-flex justify-content-evenly mt-5">
              <div className="btn btn-info">ADD TO WISHLIST</div>
              <div className="btn btn-info">ADD TO CART</div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3>title</h3>
            <h2 className="text-danger">$30</h2>
            <h4>Brand:</h4>
            <h4>Description:</h4>
            <h3>Client Reviews</h3>
            <div className="border rounded p-2 shadow">
              <p>
                <span className="fw-bolder">name: </span>message
              </p>
              <p>
                Rating: 4{" "}
                <FontAwesomeIcon icon={faStar} className="text-warning" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default View;
