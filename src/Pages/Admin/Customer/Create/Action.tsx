import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function CustomerAction() {

  const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
  }).required();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data:any) => console.log(data);

  return (
    <div className='container pt-4'>
      <div className='row'>
        <div className='col-md-5'>
          <h3 className='mb-4'>Create Customer</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
              <label htmlFor='userImage' className='form-label'>
                Upload Image
              </label>
              <input type='file' className='form-control' id='userImage' {...register('customerImage')}/>
            </div>
            <div className='mb-3'>
              <label htmlFor='userName' className='form-label'>
                Name
              </label>
              <input type='text' className='form-control' id='userName' {...register('name')}/>
            </div>
            <p className='text-danger text-capitalize'>{errors.name?.message}</p>
            <div className='mb-3'>
              <label htmlFor='userEmail' className='form-label'>
                Email
              </label>
              <input type='email' className='form-control' id='userEmail' {...register('email')}/>
            </div>
            <p className='text-danger text-capitalize'>{errors.email?.message}</p>
            <div className='mb-3'>
              <label htmlFor='userPhone' className='form-label'>
                Phone
              </label>
              <input type='text' className='form-control' id='userPhone' {...register('phone')}/>
            </div>
            <p className='text-danger text-capitalize'>{errors.phone?.message}</p>
            <div className='mb-3'>
              <label className='form-label'>Address</label>
              <textarea rows={4} className='form-control' {...register('customerAddress')}></textarea>
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
  );
}
