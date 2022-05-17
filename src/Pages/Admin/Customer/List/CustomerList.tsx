import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../../Routes/routes';

export default function CustomerList() {
  return (
    <div className="container pt-4">
        <div className="mb-5">
          <h3>Customer Lists</h3>
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
                <Link to={routes.admin.customer.create.fullPath} className="btn btn-primary">
                  Create Customer
                </Link>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-hover user-table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col" className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="align-middle">
                <div className="img-wrap overflow-hidden rounded-circle">
                  <img src="https://place-hold.it/400" width="64" height="64" />
                </div>
              </td>
              <td className="align-middle">Peter Parker</td>
              <td className="align-middle">3454556789</td>
              <td className="align-middle">peteparker@gmail.com</td>
              <td className="align-middle address" width="25%">
                3448 Ile De France St #242 Fort Wainwright, Alaska(AK), 99703
              </td>
              <td className="align-middle text-end">
                <Link to={routes.admin.customer.edit.build('10')} className="btn btn-primary">Edit</Link>
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
