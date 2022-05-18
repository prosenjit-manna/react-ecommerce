import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function ForgotPassword() {

  const schema = yup.object({
    email: yup.string().email().required(),
  }).required();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data:any) => console.log(data);

  return (
    <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="form-data">
              <h4>Forgot Password?</h4>
              <p>Enter the email address to reset your password.</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="userEmail" className="form-label">Email</label>
                  <input type="email" className="form-control" id="userEmail" {...register('email')}/>
                </div>
                <p className='text-danger text-capitalize'>{errors.email?.message}</p>

                <div className="text-center mb-3">
                  <button type="submit" className="btn btn-primary px-5">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
