import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function Action() {

  const schema = yup.object({
    category: yup.string().required(),
  }).required();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data:any) => console.log(data);

  return (
    <div className='container pt-4'>
      <div className='row'>
        <div className='col-md-5'>
          <h3 className='mb-4'>Create Category</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
              <label htmlFor='categoryImage' className='form-label'>
                Upload Category Image
              </label>
              <input type='file' className='form-control' id='categoryImage' {...register('categoryImage')}/>
            </div>
            <div className='mb-3'>
              <label htmlFor='categoryName' className='form-label'>
                Category
              </label>
              <input type='text' className='form-control' id='categoryName' {...register('category')}/>
            </div>
            <p className='text-danger text-capitalize'>{errors.category?.message}</p>
            <div className='mb-3'>
              <label className='form-label'>Category Description</label>
              <textarea rows={4} className='form-control' {...register('categoryDesc')}></textarea>
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
