import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../Routes/routes';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function Login() {

  const schema = yup.object({
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
            <h2 className="mb-4">Sign In</h2>
          </div>
          <div className="col-md-4 offset-md-4">
            <div className="form-data">
              <form onSubmit={handleSubmit(onSubmit)}>
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
                <p className="mb-5"><Link to={routes.forgotPassword}>Forgot your password?</Link></p>

                <div className="text-center mb-3">
                  <button type="submit" className="btn btn-primary px-5">
                    Sign In
                  </button>
                </div>

                <p className="text-center">
                  Don't have an account? <Link to={routes.signUp}>Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
