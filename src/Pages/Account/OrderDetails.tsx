import React from 'react';
import AccountNav from './AccountNav';

export default function OrderDetails() {
  return (
    <div className='container'>
      <div className='row'>
        <AccountNav />
        <div className='col-md-9'>
          <div className='mb-5'>
            <h4 className='mb-4'>Order Details</h4>
            <p>Order #1001 was placed on May 10, 2022 and is currently completed.</p>

            <table className='table table-hover product-table'>
              <thead>
                <tr>
                  <th scope='col'>Product</th>
                  <th scope='col' className='text-end'>
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='align-middle'>T-shirt x 2</td>
                  <td className='align-middle text-end'>$249.99</td>
                </tr>
                <tr>
                  <td className='align-middle'>Subtotal</td>
                  <td className='align-middle text-end'>$249.99</td>
                </tr>
                <tr>
                  <td className='align-middle'>Payment Method</td>
                  <td className='align-middle text-end'>Bank Transfer</td>
                </tr>
                <tr>
                  <td className='align-middle'>Total</td>
                  <td className='align-middle text-end'>$249.99</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <h4 className='mb-4'>Billing Address</h4>
              <p className='mb-0'>
                <strong>Name:</strong>
                <span>John Doe</span>
              </p>
              <p className='mb-0'>
                <strong>Email:</strong>
                <span>
                  <a href='mailto:' className='text-primary'>
                    {' '}
                  </a>
                </span>
              </p>
              <p className='mb-0'>
                <strong>Phone:</strong>
                <span>(907) 220-1980</span>
              </p>
              <p className='mb-0'>
                <strong>Address:</strong>
                <span>257 Fireweed Ln Ketchikan, Alaska(AK), 99901</span>
              </p>
            </div>
            <div className='col-md-6'>
              <h4 className='mb-4'>Shipping Address</h4>
              <p className='mb-0'>
                <strong>Name:</strong>
                <span>John Doe</span>
              </p>
              <p className='mb-0'>
                <strong>Email:</strong>
                <span>
                  <a href='mailto:' className='text-primary'>
                    {' '}
                  </a>
                </span>
              </p>
              <p className='mb-0'>
                <strong>Phone:</strong>
                <span>(907) 220-1980</span>
              </p>
              <p className='mb-0'>
                <strong>Address:</strong>
                <span>257 Fireweed Ln Ketchikan, Alaska(AK), 99901</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
