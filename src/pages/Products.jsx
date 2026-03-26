import React from "react";
import Header from "../components/Header";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <Header />
      <div className="m-5">
        <div className="row pt-5">
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
                <Link to={`/product/id`} className="btn btn-primary">
                  View More...
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
