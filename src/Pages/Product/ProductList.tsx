import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../Routes/routes';

export default function ProductList() {
  return (
    <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="filter-widget mb-4">
              <h4 className="font-large">Category</h4>
              <nav className="nav flex-column">
                <a
                  className="nav-link p-0 text-black font-smaller text-decoration-none"
                  href="#"
                  >T-shirts</a
                >
                <a
                  className="nav-link p-0 text-black font-smaller text-decoration-none"
                  href="#"
                  >Shirts</a
                >
                <a
                  className="nav-link p-0 text-black font-smaller text-decoration-none"
                  href="#"
                  >Jeans</a
                >
                <a
                  className="nav-link p-0 active font-smaller text-decoration-none"
                  href="#"
                  >Shoes</a
                >
              </nav>
            </div>
            <div className="filter-widget mb-4">
              <h4 className="font-large">Color</h4>
              <nav className="nav flex-column">
                <a
                  className="av-link p-0 text-black font-smaller text-decoration-none"
                  href="#"
                  >Black</a
                >
                <a
                  className="av-link p-0 text-black font-smaller text-decoration-none"
                  href="#"
                  >Red</a
                >
                <a
                  className="av-link p-0 text-black font-smaller text-decoration-none"
                  href="#"
                  >White</a
                >
              </nav>
            </div>
            <div className="filter-widget mb-4">
              <h4 className="font-large">Size</h4>
              <nav className="nav flex-column">
                <a
                  className="nav-link p-0 text-black font-smaller text-decoration-none"
                  aria-current="page"
                  href="#"
                  >6</a
                >
                <a
                  className="av-link p-0 text-black font-smaller text-decoration-none"
                  href="#"
                  >7</a
                >
                <a
                  className="av-link p-0 text-black font-smaller text-decoration-none"
                  href="#"
                  >8</a
                >
              </nav>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mb-4">Shoes</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="product-card card">
                  <div className="product-image" data-mdb-ripple-color="light">
                    <Link to={routes.product.details.build('product-1')}>
                      <img src="https://place-hold.it/400" className="w-100" />
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="mb-4">
                      <h5 className="card-title m-0 font-medium">
                        <Link to={routes.product.details.build('product-1')}
                          className="text-reset text-decoration-none"
                          >Product Name</Link>
                      </h5>
                      <p className="font-smaller">Product Category</p>
                    </div>
                    <div
                      className="product-price d-flex flex-nowrap align-items-center"
                    >
                      <h6 className="mb-0 flex-grow-1">$61.99</h6>
                      <Link to={routes.cart} className="btn btn-primary">Add to cart</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="product-card card">
                  <div className="product-image" data-mdb-ripple-color="light">
                    <Link to={routes.product.details.build('product-1')}>
                      <img src="https://place-hold.it/400" className="w-100" />
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="mb-4">
                      <h5 className="card-title m-0 font-medium">
                        <Link to={routes.product.details.build('product-1')}
                          className="text-reset text-decoration-none"
                          >Product Name</Link>
                      </h5>
                      <p className="font-smaller">Product Category</p>
                    </div>
                    <div
                      className="product-price d-flex flex-nowrap align-items-center"
                    >
                      <h6 className="mb-0 flex-grow-1">$61.99</h6>
                      <Link to={routes.cart} className="btn btn-primary">Add to cart</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="product-card card">
                  <div className="product-image" data-mdb-ripple-color="light">
                    <Link to={routes.product.details.build('product-1')}>
                      <img src="https://place-hold.it/400" className="w-100" />
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="mb-4">
                      <h5 className="card-title m-0 font-medium">
                        <Link to={routes.product.details.build('product-1')}
                          className="text-reset text-decoration-none"
                          >Product Name</Link>
                      </h5>
                      <p className="font-smaller">Product Category</p>
                    </div>
                    <div
                      className="product-price d-flex flex-nowrap align-items-center"
                    >
                      <h6 className="mb-0 flex-grow-1">$61.99</h6>
                      <Link to={routes.cart} className="btn btn-primary">Add to cart</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-4 mt-4 mb-4">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#">Previous</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
  );
}
