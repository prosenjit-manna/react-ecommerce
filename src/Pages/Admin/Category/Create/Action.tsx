import React from 'react';

export default function Action() {
  return (
    <div className='container pt-4'>
      <div className='row'>
        <div className='col-md-5'>
          <h3 className='mb-4'>Create Category</h3>
          <form>
            <div className='mb-3'>
              <label htmlFor='productImage' className='form-label'>
                Upload Category Image
              </label>
              <input type='file' className='form-control' id='productImage' />
            </div>
            <div className='mb-3'>
              <label htmlFor='categoryName' className='form-label'>
                Category
              </label>
              <input type='text' className='form-control' id='categoryName' />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Category Description</label>
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
