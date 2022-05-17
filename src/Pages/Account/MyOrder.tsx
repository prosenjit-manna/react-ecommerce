import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../Routes/routes';

export default function MyOrder() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='mb-2'>
          <h1 className='mb-2'>My Account</h1>
        </div>

        <div className='mb-5'>
          <h4 className='mb-4'>Order History</h4>
          <p>You haven't placed any orders yet.</p>

          <table className='table table-hover product-table'>
            <thead>
              <tr>
                <th scope='col'>Order Id</th>
                <th scope='col'>Order Item</th>
                <th scope='col'>Date</th>
                <th scope='col'>Payment Status</th>
                <th scope='col' className='text-end'>
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row' className='align-middle'>
                  <Link to={routes.orderList.details.build('1001')}>1001</Link>
                </th>
                <td className='align-middle'>T-shirt</td>
                <td className='align-middle'>10.05.2022</td>
                <td className='align-middle'>
                  <span className='badge bg-warning text-warning bg-opacity-25'>Pending</span>
                </td>
                <td className='align-middle text-end'>249.99</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className=''>
          <h4 className='mb-4'>Account Details</h4>
          <p>
            <strong>Name: </strong>
            <span>John Doe</span>
          </p>
          <p>
            <strong>Email: </strong>
            <span>
              <a href='mailto:johndoe@gamil.com' className='text-primary'>
                johndoe@gamil.com
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
