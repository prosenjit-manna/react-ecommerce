import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../../Routes/routes';

export default function CategoryList() {
  return (
    <div className='container pt-4'>
      <div className='mb-5'>
        <h3>Category Lists</h3>
      </div>
      <div className='mb-4'>
        <div className='row'>
          <div className='col-md-5'>
            <form className='d-none d-md-flex input-group w-auto my-auto'>
              <input
                type='search'
                className='form-control rounded'
                placeholder='Search'
              />
              <span className='input-group-text border-0'>Search</span>
            </form>
          </div>
          <div className='col-md-7'>
            <div className='text-end'>
              <Link to={routes.admin.category.create.fullPath} className='btn btn-primary'>
                Create Category
              </Link>
            </div>
          </div>
        </div>
      </div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Image</th>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col' className='text-end'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row' className='align-middle'>
              1
            </th>
            <td className='align-middle'>
              <div className='img-container'>
                <img
                  src='http://place-hold.it/600'
                  alt='product'
                  className='img-fluid'
                  width='120'
                  height='120'
                />
              </div>
            </td>
            <td className='align-middle' width='20%'>
              T-shirt
            </td>
            <td className='align-middle' width='30%'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus soluta sequi quos reiciendis ipsum
              assumenda tempore, distinctio, error eaque, rem adipisci pariatur recusandae! Ipsam atque neque laboriosam
              accusantium dolorum quisquam.
            </td>
            <td className='align-middle text-end'>
              <Link to={routes.admin.category.edit.build('12')} className='btn btn-primary'>
                Edit
              </Link>
              <button type='button' className='btn btn-danger'>
                Delete
              </button>
            </td>
          </tr>
         
        </tbody>
      </table>
      <div className='text-end mb-4'>
        <nav aria-label='Page navigation example'>
          <ul className='pagination justify-content-end'>
            <li className='page-item'>
              <a className='page-link' href='#'>
                Previous
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                1
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                2
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                3
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
