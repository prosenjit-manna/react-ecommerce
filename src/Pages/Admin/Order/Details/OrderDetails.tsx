import React from 'react';

export default function OrderDetails() {
  return (
    <div className='container pt-4'>
      <div className='mb-5'>
        <h3>
          <span className='text-primary'>#1001</span>
        </h3>
        <span>Jul 10th, 2022</span>
      </div>

      <div className='card p-4 mb-4'>
        <h4 className='mb-5'>Order Details</h4>
        <table className='table order-table'>
          <tbody>
            <tr>
              <td className='align-middle py-3 px-2'>
                <div className='img-container d-flex flex-nowrap'>
                  <img
                    src='https://place-hold.it/400'
                    alt='product'
                    className='img-fluid'
                    width='80'
                    height='80'
                  />
                  <div className='px-3'>
                    <h6>
                      <a href='#!'>T-shirt</a>
                    </h6>
                    <span className='d-block'>Grey</span>
                    <span className='d-block'>SKU: 2342DF54</span>
                  </div>
                </div>
              </td>
              <td className='align-middle'>$56.00 X 2</td>
              <td className='align-middle text-end'>$112.00</td>
            </tr>
          </tbody>
        </table>
        <div>
          <div className='col-md-6 offset-6'>
            <table className='table'>
              <tbody>
                <tr>
                  <td className='align-middle'>
                    <h6>Subtotal</h6>
                  </td>
                  <td className='align-middle text-end'>$224.00</td>
                </tr>
                <tr>
                  <td className='align-middle'>
                    <h6>Shipping</h6>
                  </td>
                  <td className='align-middle text-end'>$0.00</td>
                </tr>
                <tr>
                  <td className='align-middle'>
                    <h6>Tax</h6>
                  </td>
                  <td className='align-middle text-end'>$0.00</td>
                </tr>
                <tr>
                  <td className='align-middle border-bottom-0'>
                    <h6 className='fw-bold'>Total</h6>
                  </td>
                  <td className='align-middle text-end fw-bold border-bottom-0'>$224.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='card p-4'>
        <h4 className='mb-5'>Customer Details</h4>
      </div>
    </div>
  );
}
