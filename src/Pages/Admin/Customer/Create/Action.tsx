import React from 'react';

export default function CustomerAction() {
  return (
    <div className='container pt-4'>
      <div className='row'>
        <div className='col-md-5'>
          <h3 className='mb-4'>Create Customer</h3>
          <form>
            <div className='mb-3'>
              <label htmlFor='productImage' className='form-label'>
                Upload Image
              </label>
              <input type='file' className='form-control' id='productImage' />
            </div>
            <div className='mb-3'>
              <label htmlFor='userName' className='form-label'>
                Name
              </label>
              <input type='text' className='form-control' id='userName' />
            </div>
            <div className='mb-3'>
              <label htmlFor='userEmail' className='form-label'>
                Email
              </label>
              <input type='text' className='form-control' id='userEmail' />
            </div>
            <div className='mb-3'>
              <label htmlFor='userPhone' className='form-label'>
                Phone
              </label>
              <input type='text' className='form-control' id='userPhone' />
            </div>
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
  );
}
