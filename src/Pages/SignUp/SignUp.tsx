import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../Routes/routes';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function SignUp() {

  const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  }).required();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data:any) => console.log(data);

  return (
    <div className="container">
        <div className="row">
          <div className="text-center">
            <h2 className="mb-4">Sign Up</h2>
          </div>
          <div className="col-md-4 offset-md-4">
            <div className="form-data">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="userFirstName" className="form-label"
                    >First Name</label
                  >
                  <input type="text" className="form-control" id="userFirstName" {...register('firstName')}/>
                </div>
                <p className='text-danger text-capitalize'>{errors.firstName?.message}</p>
                <div className="mb-3">
                  <label htmlFor="userLastName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="userLastName" {...register('lastName')}/>
                </div>
                <p className='text-danger text-capitalize'>{errors.lastName?.message}</p>
                <div className="mb-3">
                  <label htmlFor="userEmail" className="form-label">Email</label>
                  <input type="email" className="form-control" id="userEmail" {...register('email')}/>
                </div>
                <p className='text-danger text-capitalize'>{errors.email?.message}</p>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" {...register('password')}/>
                </div>
                <p className='text-danger text-capitalize'>{errors.password?.message}</p>

                <div className="text-center pt-4 mb-3">
                  <button type="submit" className="btn btn-primary px-5">
                    Create An Account
                  </button>
                </div>

                <p className="text-center">
                  Already have an account? <Link to={routes.login}>Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
