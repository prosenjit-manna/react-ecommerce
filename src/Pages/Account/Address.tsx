import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../Routes/routes';
import AccountNav from './AccountNav';

export default function Address() {
  return (
    <div className='container'>
      <div className='row'>
        <AccountNav />
        <div className='col-md-9'>
          <div className='row'>
            <div className='col-md-6'>
              <h4 className='mb-4'>Billing Address</h4>
              <p className='mb-0'>
                <strong>Name: </strong>
                <span>John Doe</span>
              </p>
              <p className='mb-0'>
                <strong>Email: </strong>
                <span>
                  <a href='mailto:' className='text-primary'>
                    johndoe@gmail.com
                  </a>
                </span>
              </p>
              <p className='mb-0'>
                <strong>Phone: </strong>
                <span>(907) 220-1980</span>
              </p>
              <p className='mb-0'>
                <strong>Address: </strong>
                <span>257 Fireweed Ln Ketchikan, Alaska(AK), 99901</span>
              </p>
              <div className='pt-4'>
                <Link to={routes.addressDetails.edit.path} className='btn btn-primary px-4'>
                  Edit
                </Link>
                <Link to={routes.addressDetails.add.path} className='btn btn-primary px-4'>
                  Add
                </Link>
              </div>
            </div>
            <div className='col-md-6'>
              <h4 className='mb-4'>Shipping Address</h4>
              <p className='mb-0'>
                <strong>Name: </strong>
                <span>John Doe</span>
              </p>
              <p className='mb-0'>
                <strong>Email: </strong>
                <span>
                  <a href='mailto:' className='text-primary'>
                    johndoe@gmail.com
                  </a>
                </span>
              </p>
              <p className='mb-0'>
                <strong>Phone: </strong>
                <span>(907) 220-1980</span>
              </p>
              <p className='mb-0'>
                <strong>Address: </strong>
                <span>257 Fireweed Ln Ketchikan, Alaska(AK), 99901</span>
              </p>
              <div className='pt-4'>
                <a href='user-address-edit.html' className='btn btn-primary px-4'>
                  Edit
                </a>
                <a href='user-address-edit.html' className='btn btn-primary px-4'>
                  Add
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
