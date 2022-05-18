import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../../Routes/routes';
import { useForm } from 'react-hook-form';


export default function OrderList() {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data:any) => console.log(data);


  return (
    <div className='container pt-4'>
      <div className='mb-5'>
        <h3>Order Lists</h3>
      </div>
      <div>
        <ul className='nav mb-3'>
          <li className='nav-item'>
            <a className='nav-link active border-bottom border-2 border-primary' aria-current='page' href='#'>
              All
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-secondary' href='#'>
              Complete
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-secondary' href='#'>
              Pending
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-secondary' href='#'>
              Cancel
            </a>
          </li>
        </ul>
      </div>
      <div className='mb-4'>
        <div className='row'>
          <div className='col-md-5'>
            <form className='d-none d-md-flex input-group w-auto my-auto' onSubmit={handleSubmit(onSubmit)}>
              <input
                type='search'
                className='form-control rounded'
                placeholder='Search'
                {...register('orderSearch')} 
              />
              <input type="submit" value="Search" className="input-group-text border-0"/>
            </form>
          </div>
        </div>
      </div>
      <table className='table table-hover product-table'>
        <thead>
          <tr>
            <th scope='col'>Order Id</th>
            <th scope='col'>Order Item</th>
            <th scope='col'>Date</th>
            <th scope='col'>Customer</th>
            <th scope='col'>Payment Status</th>
            <th scope='col' className='text-end'>
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row' className='align-middle'>
              <Link to={routes.admin.order.details.build('12')}>1001</Link>
            </th>
            <td className='align-middle'>T-shirt</td>
            <td className='align-middle'>10.05.2022</td>
            <td className='align-middle'>Customer Name</td>
            <td className='align-middle'>
              <span className='badge bg-warning text-warning bg-opacity-25'>Pending</span>
            </td>
            <td className='align-middle text-end'>249.99</td>
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
