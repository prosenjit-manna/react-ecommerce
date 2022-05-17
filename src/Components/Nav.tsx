import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../Routes/routes';

export default function Nav() {
  return (
    <div>
      <nav id='main-navbar' className='navbar navbar-expand-lg'>
        <div className='container'>
          <h2>Logo</h2>

          <ul className='nav justify-content-end'>
            <li className='nav-item'>
              <Link to={routes.product.list.path} className='nav-link text-black'>
                Product
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={routes.product.details.build('product-1')} className='nav-link text-black'>
                Product Details
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={routes.login} className='nav-link text-black'>
                Log In
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={routes.signUp} className='nav-link text-black'>
                Sign Up
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={routes.orderList.list.path} className='nav-link text-black'>
                Order
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={routes.orderList.details.build('1001')} className='nav-link text-black'>
                Order Details
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
