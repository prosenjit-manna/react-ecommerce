import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../../Routes/routes';

export default function Sidebar() {
  return (
    <nav className='d-lg-block sidebar collapse position-fixed top-0 start-0 bottom-0 bg-white'>
      <div className='position-sticky'>
        <div className='list-group list-group-flush mx-3 mt-4'>
          <ul className='nav nav-pills flex-column mb-auto'>
            <li>
              <Link
                to={routes.admin.order.list.path}  className='nav-link text-dark'>
                Orders
              </Link>
            </li>
            <li>
              <Link
                to={routes.admin.product.list.path}  className='nav-link text-dark'>
                Products
              </Link>
            </li>
            <li>
              <Link
                to={routes.admin.customer.list.path}  className='nav-link text-dark'>
                  Customer
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-dark' to={routes.admin.category.list.path}>
                Category
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
