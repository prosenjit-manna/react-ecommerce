import React from 'react';

export default function ProductAction() {
  return (
    <div className='container pt-4'>
      <div className='row'>
        <div className='col-md-5'>
          <h3 className='mb-4'>Create Product</h3>
          <form>
            <div className='mb-3'>
              <label htmlFor='productImage' className='form-label'>
                Upload Product Image
              </label>
              <input type='file' className='form-control' id='productImage' />
            </div>
            <div className='mb-3'>
              <label htmlFor='productName' className='form-label'>
                Product Name
              </label>
              <input type='text' className='form-control' id='productName' />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Category</label>
              <select className='form-select'>
                <option selected>Select Category</option>
                <option value='Category 1'>Category One</option>
                <option value='Category 2'>Category Two</option>
                <option value='Category 3'>Category Three</option>
              </select>
            </div>
            <div className='mb-3'>
              <label htmlFor='productStock' className='form-label'>
                In Stock
              </label>
              <input type='text' className='form-control' id='productStock' />
            </div>
            <div className='mb-3'>
              <label htmlFor='productPrice' className='form-label'>
                Product Price
              </label>
              <input type='text' className='form-control' id='productPrice' />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Product Description</label>
              <textarea rows={4}  className='form-control'></textarea>
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
