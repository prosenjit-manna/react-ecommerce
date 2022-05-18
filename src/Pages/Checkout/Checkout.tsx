import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function Checkout() {
  const schema = yup
    .object({
      email: yup.string().email().required(),
      phone: yup.string().required(),
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      address: yup.string().required(),
      city: yup.string().required(),
      state: yup.string().required(),
      zip: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h2 className='mb-5'>Checkout</h2>

          <div className='row'>
            <div className='col-md-7'>
              <form onSubmit={handleSubmit(onSubmit)} className='mb-4'>
                <h5 className='mb-4'>1. Contact Information</h5>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group mb-3'>
                      <label htmlFor='email' className='form-label'>
                        Email
                      </label>
                      <input type='text' className='form-control' id='email' {...register('email')} />
                    </div>
                    <p className='text-danger text-capitalize'>{errors.email?.message}</p>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group mb-3'>
                      <label htmlFor='phone' className='form-label'>
                        Phone
                      </label>
                      <input type='text' className='form-control' id='phone' {...register('phone')} />
                    </div>
                    <p className='text-danger text-capitalize'>{errors.phone?.message}</p>
                  </div>
                </div>

                <h5 className='mt-4 mb-4'>2. Shipping Address</h5>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group mb-3'>
                      <label htmlFor='firstName' className='form-label'>
                        First Name
                      </label>
                      <input type='text' className='form-control' id='firstName' {...register('firstName')} />
                    </div>
                    <p className='text-danger text-capitalize'>{errors.firstName?.message}</p>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group mb-3'>
                      <label htmlFor='lastName' className='form-label'>
                        Last Name
                      </label>
                      <input type='text' className='form-control' id='lastName' {...register('lastName')} />
                    </div>
                    <p className='text-danger text-capitalize'>{errors.lastName?.message}</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='form-group mb-3'>
                      <label htmlFor='address' className='form-label'>
                        Address
                      </label>
                      <input type='text' className='form-control' id='address' {...register('address')} />
                    </div>
                    <p className='text-danger text-capitalize'>{errors.address?.message}</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='form-group mb-3'>
                      <label htmlFor='city' className='form-label'>
                        City
                      </label>
                      <input type='text' className='form-control' id='city' {...register('city')} />
                    </div>
                    <p className='text-danger text-capitalize'>{errors.city?.message}</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group mb-3'>
                      <label htmlFor='state' className='form-label'>
                        State
                      </label>
                      <input type='text' className='form-control' id='state' {...register('state')} />
                    </div>
                    <p className='text-danger text-capitalize'>{errors.state?.message}</p>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group mb-3'>
                      <label htmlFor='zip' className='form-label'>
                        Zip
                      </label>
                      <input type='text' className='form-control' id='zip' {...register('zip')} />
                    </div>
                    <p className='text-danger text-capitalize'>{errors.zip?.message}</p>
                  </div>
                </div>

                <div className='mt-3 text-end'>
                  <button type='submit' className='btn btn-primary px-5'>Continue to Shopping</button>
                </div>
              </form>
            </div>
            <div className='col-md-5'>
              <div className='card p-3'>
                <h5 className='mb-4'>Order Summery</h5>
                <div className='cart-items'>
                  <div className='media d-flex flex-nowrap mb-3'>
                    <a className='thumbnail pull-left' href='#'>
                      <img className='media-object' src='https://place-hold.it/100' width='100' height='100' />
                    </a>
                    <div className='media-body px-4'>
                      <h4 className='media-heading font-medium mb-2'>
                        <a href='#' className='text-black text-decoration-none'>
                          T-shirt
                        </a>
                      </h4>
                      <div className='font-smaller'>Red / M </div>
                      <div className='font-smaller'>1 x $56.99 </div>
                    </div>
                    <div className='price flex-grow-1 text-end'>
                      <span className='fw-bold'>$56.99</span>
                    </div>
                  </div>
                  <div className='media d-flex flex-nowrap mb-3'>
                    <a className='thumbnail pull-left' href='#'>
                      <img className='media-object' src='https://place-hold.it/100' width='100' height='100' />
                    </a>
                    <div className='media-body px-4'>
                      <h4 className='media-heading font-medium mb-2'>
                        <a href='#' className='text-black text-decoration-none'>
                          T-shirt
                        </a>
                      </h4>
                      <div className='font-smaller'>Red / M </div>
                      <div className='font-smaller'>1 x $56.99 </div>
                    </div>
                    <div className='price flex-grow-1 text-end'>
                      <span className='fw-bold'>$56.99</span>
                    </div>
                  </div>
                </div>

                <div className='border-top mt-3 pt-3'>
                  <table className='table'>
                    <tbody>
                      <tr>
                        <td className='border-bottom-0'>
                          <h5 className='font-small mb-0'>Subtotal</h5>
                        </td>
                        <td className='text-end border-bottom-0'>
                          <h5 className='font-small mb-0'>
                            <strong>$56.99</strong>
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td className='border-bottom-0'>
                          <h5 className='font-small mb-0'>Estimated shipping</h5>
                        </td>
                        <td className='text-end border-bottom-0'>
                          <h5 className='font-small mb-0'>
                            <strong>$20.00</strong>
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td className='border-bottom-0'>
                          <h3 className='font-large'>Total</h3>
                        </td>
                        <td className='text-end border-bottom-0'>
                          <h3 className='font-large mb-4'>
                            <strong>$76.99</strong>
                          </h3>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
