import React from 'react';

export default function Nav() {
  return (
    <div>
      <nav id='main-navbar' className='navbar navbar-expand-lg navbar-light bg-white fixed-top'>
        <div className='container-fluid'>
          <h2>Admin</h2>

          <div className='nav-item user-dropdown position-relative pe-4 dropdown'>
            <a
              className='nav-link p-0 overflow-hidden rounded-circle'
              href='#'
              id='navbarDropdown'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'>
              <img src='http://place-hold.it/40' width='40' height='40' />
            </a>
            <div className='card position-absolute end-0'>
              <ul className='nav flex-column mb-3'>
                <li className='nav-item'>
                  <a className='nav-link text-secondary' href='#'>
                    Profile
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-secondary' href='#'>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
