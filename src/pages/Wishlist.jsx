import React from "react";
import Header from "../components/Header";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeartCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function Wishlist() {
  return (
    <>
      <Header />
      <section className="container my-5">
        <div>
          <h1 className="pt-5 text-primary">User Wishlist</h1>
        </div>
        <div className="col-md-3 mb-2">
          {/* card */}
          <Card className="rounded shadow">
            <Card.Img
              style={{ height: "250px" }}
              variant="top"
              src="https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg"
            />
            <Card.Body className="text-center">
              <Card.Title>Card Title</Card.Title>
              <div className="d-flex justify-content-evenly">
                <button className="btn text-danger fs-4">
                  <FontAwesomeIcon icon={faHeartCircleXmark} />
                </button>
                <button className="btn text-success fs-4">
                  <FontAwesomeIcon icon={faCartPlus} />
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>
    </>
  );
}

export default Wishlist;
