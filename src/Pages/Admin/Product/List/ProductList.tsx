import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../../Routes/routes';

export default function ProductList() {
  return (
    <div className="container pt-4">
        <div className="mb-5">
          <h3>Product Lists</h3>
        </div>
        <div className="mb-4">
          <div className="row">
            <div className="col-md-5">
              <form className="d-none d-md-flex input-group w-auto my-auto">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                />
                <span className="input-group-text border-0">Search</span>
              </form>
            </div>
            <div className="col-md-7">
              <div className="text-end">
                <Link to={routes.admin.product.create.fullPath} className="btn btn-primary">
                  Add Product
                </Link>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-hover product-table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col" className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="align-middle">1</th>
              <td className="align-middle">
                <div className="img-container">
                  <img
                    src="https://place-hold.it/400"
                    alt="product"
                    className="img-fluid"
                    width="120"
                    height="120"
                  />
                </div>
              </td>
              <td className="align-middle">T-shirt</td>
              <td className="align-middle">$49.99</td>
              <td className="align-middle text-end">
                <Link to={routes.admin.product.edit.build('12')} className="btn btn-primary">Edit</Link>
                <button type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
           
          </tbody>
        </table>
        <div className="text-end mb-4">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item">
                <a className="page-link" href="#">Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
  );
}
