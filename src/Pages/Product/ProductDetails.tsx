import React from 'react';

export default function ProductDetails() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='product-image'>
            <img src='https://place-hold.it/700' className='w-100' />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='collection-wrapper'>
            <div className='product-right'>
              <h2 className='position-relative'>
                White Sneaker
                <button className='wishlist-btn position-absolute top-0 end-0 bg-transparent border-0'>
                  <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g clip-path='url(#clip0_1073_615)'>
                      <path
                        d='M7.9999 2.74805L7.2829 2.01105C5.5999 0.281049 2.51389 0.878049 1.39989 
                        3.05305C0.876895 4.07605 0.758895 5.55305 1.71389 7.43805C2.63389 9.25305 
                        4.5479 11.427 7.9999 13.795C11.4519 11.427 13.3649 9.25305 14.2859 7.43805C15.2409 
                        5.55205 15.1239 4.07605 14.5999 3.05305C13.4859 0.878049 10.3999 0.280049 8.7169 2.01005L7.9999 
                        2.74805ZM7.9999 15C-7.33311 4.86805 3.27889 -3.03995 7.82389 1.14305C7.88389 1.19805 7.9429 
                        1.25505 7.9999 1.31405C8.05632 1.2551 8.11503 1.19839 8.17589 1.14405C12.7199 -3.04195 23.3329 
                        4.86705 7.9999 15Z'
                        fill='black'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_1073_615'>
                        <rect width='16' height='16' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </h2>
              <h4 className='font-small mb-2'>
                <del className='text-black-50'>$459.00</del>
                <span className='px-2 text-danger d-inline-block'>55% off</span>
              </h4>
              <h3 className='font-xl text-black mb-4'>$32.96</h3>
              <ul className='color-variant m-0 p-0 mb-3'>
                <li className='d-inline-block rounded-circle me-1 align-middle bg-light0'></li>
                <li className='d-inline-block rounded-circle me-1 align-middle bg-light1'></li>
                <li className='d-inline-block rounded-circle me-1 align-middle bg-light2'></li>
              </ul>
              <div className='product-description border-product py-3'>
                <h6 className='fw-bold mb-3 text-black text-capitalize'>select size</h6>
                <div className='size-box my-4'>
                  <ul className='p-0 m-0'>
                    <li className='active d-inline-block text-center border border-1 me-2 rounded-circle'>
                      <span className='text-black h-100 d-flex align-items-center justify-content-center 
                      text-decoration-none font-small'>
                        6
                      </span>
                    </li>
                    <li className='d-inline-block text-center border border-1 me-2 rounded-circle'>
                      <span className='text-black h-100 d-flex align-items-center justify-content-center 
                      text-decoration-none font-small'>
                        7
                      </span>
                    </li>
                    <li className='d-inline-block text-center border border-1 me-2 rounded-circle'>
                      <span className='text-black h-100 d-flex align-items-center justify-content-center 
                      text-decoration-none font-small'>
                        8
                      </span>
                    </li>
                    <li className='d-inline-block text-center border border-1 me-2 rounded-circle'>
                      <span className='text-black h-100 d-flex align-items-center justify-content-center 
                      text-decoration-none font-small'>
                        9
                      </span>
                    </li>
                  </ul>
                </div>
                <h6 className='fw-bold mb-3 text-black text-capitalize'>quantity</h6>
                <div className='qty-box'>
                  <div className='input-group'>
                    <span className='input-group-prepend'>
                      <button type='button' className='btn quantity-left-minus border' data-type='minus' data-field=''>
                        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path d='M13.3332 8H2.6665' stroke='black' stroke-linecap='round' />
                        </svg>
                      </button>
                    </span>
                    <input
                      type='text'
                      name='quantity'
                      className='form-control input-number text-center border'
                      value='1'
                    />
                    <span className='input-group-prepend'>
                      <button type='button' className='btn quantity-right-plus border' data-type='plus' data-field=''>
                        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M7.99984 13.3337V8.00033M7.99984 8.00033V2.66699M7.99984 
                            8.00033H13.3332M7.99984 8.00033H2.6665'
                            stroke='black'
                            stroke-linecap='round'
                          />
                        </svg>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className='product-buttons d-flex flex-nowrap gap-3 mb-4'>
                <a href='user-cart.html' className='btn btn-primary'>
                  Add to cart
                </a>
                <a href='#' className='btn btn-secondary'>
                  Buy now
                </a>
              </div>
              <div className='border-product'>
                <h6 className='product-title mb-2'>Product Details</h6>
                <p>
                  Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt, explicabo. Nemo enim ipsam voluptatem,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
