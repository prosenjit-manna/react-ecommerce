import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function ProductAction() {

  const schema = yup.object({
    productName: yup.string().required(),
    inStock: yup.string().required(),
    productPrice: yup.string().required(),
  }).required();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data:any) => console.log(data);

  return (
    <div className='container pt-4'>
      <div className='row'>
        <div className='col-md-5'>
          <h3 className='mb-4'>Create Product</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
              <label htmlFor='productImage' className='form-label'>
                Upload Product Image
              </label>
              <input type='file' className='form-control' id='productImage' {...register('productImage')}/>
            </div>
            <div className='mb-3'>
              <label htmlFor='productName' className='form-label'>
                Product Name
              </label>
              <input type='text' className='form-control' id='productName' {...register('productName')}/>
            </div>
            <p className='text-danger text-capitalize'>{errors.productName?.message}</p>
            <div className='mb-3'>
              <label className='form-label'>Category</label>
              <select className='form-select' {...register('selectCategory')}>
                <option value='Category1'>Category One</option>
                <option value='Category2'>Category Two</option>
                <option value='Category3'>Category Three</option>
              </select>
            </div>
            <div className='mb-3'>
              <label htmlFor='productStock' className='form-label'>
                In Stock
              </label>
              <input type='number' className='form-control' id='productStock' {...register('inStock')}/>
            </div>
            <p className='text-danger text-capitalize'>{errors.inStock?.message}</p>
            <div className='mb-3'>
              <label htmlFor='productPrice' className='form-label'>
                Product Price
              </label>
              <input type='number' className='form-control' id='productPrice' {...register('productPrice')}/>
            </div>
            <p className='text-danger text-capitalize'>{errors.productPrice?.message}</p>
            <div className='mb-3'>
              <label className='form-label'>Product Description</label>
              <textarea rows={4}  className='form-control' {...register('productDesc')}></textarea>
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
