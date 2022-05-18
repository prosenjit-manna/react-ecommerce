import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../Routes/routes';

export default function Cart() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h2 className='mb-4'>Cart</h2>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th className='text-center'>Price</th>
                <th className='text-center'>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='align-middle' width='30%'>
                  <div className='media d-flex flex-nowrap'>
                    <a className='thumbnail pull-left' href='#'>
                      <img
                        className='media-object'
                        src='https://place-hold.it/100'
                        width='84'
                        height='84'
                      />
                    </a>
                    <div className='media-body px-4'>
                      <h4 className='media-heading font-medium mb-0'>
                        <a href='#' className='text-black text-decoration-none'>
                          T-shirt
                        </a>
                      </h4>
                      <h5 className='media-heading font-smaller'>
                        by <a href='#'>Brand name</a>
                      </h5>
                      <span className='font-smaller'>Red / M </span>
                    </div>
                  </div>
                </td>
                <td className='align-middle'>
                  <div className='qty-box'>
                    <div className='input-group'>
                      <span className='input-group-prepend'>
                        <button type='button' className='btn quantity-left-minus border' 
                        data-type='minus' data-field=''>
                          <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M13.3332 8H2.6665' stroke='black' strokeLinecap='round' />
                          </svg>
                        </button>
                      </span>
                      <input
                        type='text'
                        name='quantity'
                        className='form-control input-number border text-center'
                        defaultValue='1'
                      />
                      <span className='input-group-prepend'>
                        <button type='button' className='btn quantity-right-plus border' data-type='plus' data-field=''>
                          <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M7.99984 13.3337V8.00033M7.99984 8.00033V2.66699M7.99984 
                              8.00033H13.3332M7.99984 8.00033H2.6665'
                              stroke='black'
                              strokeLinecap='round'
                            />
                          </svg>
                        </button>
                      </span>
                    </div>
                  </div>
                </td>
                <td className='text-center align-middle'>
                  <strong>$9.99</strong>
                </td>
                <td className='text-center align-middle'>
                  <strong>$99.99</strong>
                </td>
                <td className='align-middle text-end'>
                  <button type='button' className='btn btn-danger remove-btn'>
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='row'>
            <div className='col-md-6 offset-6'>
              <table className='table'>
                <tbody>
                  <tr>
                    <td className='border-bottom-0'>
                      <h5 className='font-small mb-0'>Subtotal</h5>
                    </td>
                    <td className='text-end border-bottom-0'>
                      <h5 className='font-small mb-0'>
                        <strong>$999.99</strong>
                      </h5>
                    </td>
                  </tr>
                  <tr>
                    <td className='border-bottom-0'>
                      <h5 className='font-small mb-0'>Estimated shipping</h5>
                    </td>
                    <td className='text-end border-bottom-0'>
                      <h5 className='font-small mb-0'>
                        <strong>$9.999.99</strong>
                      </h5>
                    </td>
                  </tr>
                  <tr>
                    <td className='border-bottom-0'>
                      <h3 className='font-large'>Total</h3>
                    </td>
                    <td className='text-end border-bottom-0'>
                      <h3 className='font-large mb-4'>
                        <strong>$9.999.99</strong>
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-end border-bottom-0' colSpan={2}>
                      <Link to={routes.checkout} className='btn btn-success px-5'>
                        Checkout
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
