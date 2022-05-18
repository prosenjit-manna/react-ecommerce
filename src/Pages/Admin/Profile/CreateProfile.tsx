import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function Profile() {
  const schema = yup
    .object({
      email: yup.string().email().required(),
      userName: yup.string().required(),
      name: yup.string().required(),
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
    <div className='container pt-4'>
      <div className='row'>
        <div className='d-flex flex-nowrap align-items-center mb-5'>
          <div className='me-4'>
            <img src='https://place-hold.it/150' className='rounded-circle' />
          </div>
          <div className=''>
            <h4 className='mb-0'>Profile</h4>
            <p className='mb-0'>CEO</p>
          </div>
        </div>
        <div className='col-md-7'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group mb-3'>
              <label htmlFor='userName' className='form-label'>
                User Name
              </label>
              <input type='text' className='form-control' id='userName' {...register('userName')} />
            </div>
            <p className='text-danger text-capitalize'>{errors.userName?.message}</p>
            <div className='form-group mb-3'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input type='text' className='form-control' id='name' {...register('name')} />
            </div>
            <p className='text-danger text-capitalize'>{errors.name?.message}</p>
            <div className='form-group mb-3'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input type='text' className='form-control' id='email' {...register('email')} />
            </div>
            <p className='text-danger text-capitalize'>{errors.email?.message}</p>
            <div className='form-group mb-3'>
              <label htmlFor='userPhoto' className='form-label'>
                Upload Photo
              </label>
              <input type='file' className='form-control' id='userPhoto' {...register('userPhoto')} />
            </div>
            <div className='form-group mb-3'>
              <label htmlFor='jobTitle' className='form-label'>
                Job Title
              </label>
              <input type='text' className='form-control' id='jobTitle' {...register('jobTitle')} />
            </div>
            <div className='mt-4 text-end'>
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
