import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../Routes/routes';

export default function AccountNav() {
  return (
    <div className='col-md-3'>
      <h3 className='mb-2'>My Account</h3>
      <ul className='nav flex-column'>
        <li className='nav-item'>
          <Link to={routes.orderList.details.build('1001')} className='nav-link text-black px-0'>
            Orders
          </Link>
        </li>
        <li className='nav-item'>
          <Link to={routes.accountDetails} className='nav-link text-black px-0'>
            Account Details
          </Link>
        </li>
        <li className='nav-item'>
          <Link to={routes.addressDetails.path} className='nav-link text-black px-0'>
            Address
          </Link>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-black px-0'>Log Out</a>
        </li>
      </ul>
    </div>
  );
}
