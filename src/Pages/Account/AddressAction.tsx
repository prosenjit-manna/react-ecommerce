import React from 'react';
import AccountNav from './AccountNav';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function AddressAction() {
  const schema = yup
    .object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      phone: yup.string().required(),
      email: yup.string().email().required(),
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
        <AccountNav />
        <div className='col-md-9'>
          <h4 className='mb-4'>Add Address</h4>
          <div className='row'>
            <div className='col-md-7'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group mb-3'>
                      <label htmlFor='firstName' className='form-label'>
                        First Name
                      </label>
                      <input type='text' className='form-control' id='firstName' {...register('firstName')}/>
                    </div>
                    <p className='text-danger text-capitalize'>{errors.firstName?.message}</p>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group mb-3'>
                      <label htmlFor='lastName' className='form-label'>
                        Last Name
                      </label>
                      <input type='text' className='form-control' id='lastName' {...register('lastName')}/>
                    </div>
                    <p className='text-danger text-capitalize'>{errors.lastName?.message}</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group mb-3'>
                      <label htmlFor='phone' className='form-label'>
                        Phone
                      </label>
                      <input type='text' className='form-control' id='phone' {...register('phone')}/>
                    </div>
                    <p className='text-danger text-capitalize'>{errors.phone?.message}</p>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group mb-3'>
                      <label htmlFor='email' className='form-label'>
                        Email
                      </label>
                      <input type='email' className='form-control' id='email' {...register('email')}/>
                    </div>
                    <p className='text-danger text-capitalize'>{errors.email?.message}</p>
                  </div>
                </div>
                <div className='mb-3'>
                  <label htmlFor='city' className='form-label'>
                    City
                  </label>
                  <input type='city' className='form-control' id='city' {...register('city')}/>
                </div>
                <p className='text-danger text-capitalize'>{errors.city?.message}</p>
                <div className='mb-3'>
                  <label htmlFor='state' className='form-label'>
                    State
                  </label>
                  <input type='state' className='form-control' id='state' {...register('state')}/>
                </div>
                <p className='text-danger text-capitalize'>{errors.state?.message}</p>
                <div className='mb-3'>
                  <label htmlFor='zip' className='form-label'>
                    Zip
                  </label>
                  <input type='zip' className='form-control' id='zip' {...register('zip')}/>
                </div>
                <p className='text-danger text-capitalize'>{errors.zip?.message}</p>
                <div className='mb-3'>
                  <label className='form-label'>Address</label>
                  <textarea rows={4} className='form-control'></textarea>
                </div>

                <div className='text-end'>
                  <button type='submit' className='btn btn-primary'>
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
