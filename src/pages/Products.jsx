import React, { useEffect } from "react";
import Header from "../components/Header";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";

function Products() {
  const { loading, allProducts, error } = useSelector(
    (state) => state.productReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <Header insideProducts />
      <div className="m-5">
        {loading ? (
          <div className="text-center py-5 fw-bolder d-flex">Loading...</div>
        ) : (
          <div className="row pt-5">
            {allProducts?.length > 0 ? (
              allProducts?.map((product) => (
                <div key={product?.id} className="col-md-3 mb-2">
                  {/* card */}
                  <Card className="rounded shadow">
                    <Card.Img
                      style={{ height: "250px" }}
                      variant="top"
                      src={product?.thumbnail}
                    />
                    <Card.Body className="text-center">
                      <Card.Title>{product?.title}</Card.Title>
                      <Link
                        to={`/products/${product?.id}`}
                        className="btn btn-primary"
                      >
                        View More...
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <div className="fw-bolder">Product Not Found!!</div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
