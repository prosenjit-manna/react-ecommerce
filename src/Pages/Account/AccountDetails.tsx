import React from 'react';
import AccountNav from './AccountNav';

export default function AccountDetails() {
  return (
    <div className='container'>
      <div className='row'>
        <AccountNav />
        <div className='col-md-9'>
          <h4 className='mb-4'>Account Details</h4>
          <form>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group mb-3'>
                  <label htmlFor='firstName'>First Name</label>
                  <input type='text' className='form-control' id='firstName' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group mb-3'>
                  <label htmlFor='lastName'>Last Name</label>
                  <input type='text' className='form-control' id='lastName' />
                </div>
              </div>
            </div>
            <div className='mb-3'>
              <label htmlFor='phone' className='form-label'>
                Phone
              </label>
              <input type='text' className='form-control' id='phone' />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input type='email' className='form-control' id='email' />
            </div>

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
