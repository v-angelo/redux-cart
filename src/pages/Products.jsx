import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";

function Products() {
  const { loading, allProducts, error } = useSelector(
    (state) => state.productReducer,
  );
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(allProducts?.length / productsPerPage);
  const currentPageLastIndex = currentPage * productsPerPage;
  const currentPageFirstIndex = currentPageLastIndex - productsPerPage;
  const visibleProductsArray = allProducts?.slice(
    currentPageFirstIndex,
    currentPageLastIndex,
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const navigateNextPage = () => {
    currentPage != totalPages && setCurrentPage(currentPage + 1);
  };

  const navigatePrevPage = () => {
    currentPage != 1 && setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Header insideProducts />
      <div className="m-5">
        {loading ? (
          <div className="text-center py-5 fw-bolder d-flex">Loading...</div>
        ) : (
          <div className="row pt-5">
            {allProducts?.length > 0 ? (
              visibleProductsArray?.map((product) => (
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
        <div className="text-center my-3 fs-5 fw-bolder">
          <button onClick={navigatePrevPage} className="btn">
            <FontAwesomeIcon icon={faBackward} />
          </button>
          {currentPage} of {totalPages}
          <button onClick={navigateNextPage} className="btn">
            <FontAwesomeIcon icon={faForward} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
