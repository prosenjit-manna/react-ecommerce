import React from 'react';
import AccountNav from './AccountNav';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function AccountDetails() {

  const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().email().required(),
  }).required();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data:any) => console.log(data);

  return (
    <div className='container'>
      <div className='row'>
        <AccountNav />
        <div className='col-md-9'>
          <h4 className='mb-4'>Account Details</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group mb-3'>
                  <label htmlFor='firstName' className='form-label'>First Name</label>
                  <input type='text' className='form-control' id='firstName' {...register('firstName')}/>
                </div>
                <p className='text-danger text-capitalize'>{errors.firstName?.message}</p>
              </div>
              <div className='col-md-6'>
                <div className='form-group mb-3'>
                  <label htmlFor='lastName' className='form-label'>Last Name</label>
                  <input type='text' className='form-control' id='lastName' {...register('lastName')}/>
                </div>
                <p className='text-danger text-capitalize'>{errors.lastName?.message}</p>
              </div>
            </div>
            <div className='mb-3'>
              <label htmlFor='phone' className='form-label'>
                Phone
              </label>
              <input type='text' className='form-control' id='phone' {...register('phone')}/>
            </div>
            <p className='text-danger text-capitalize'>{errors.phone?.message}</p>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input type='email' className='form-control' id='email' {...register('email')}/>
            </div>
            <p className='text-danger text-capitalize'>{errors.email?.message}</p>

            <div className='text-end'>
              <button type='submit' className='btn btn-primary px-4'>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
