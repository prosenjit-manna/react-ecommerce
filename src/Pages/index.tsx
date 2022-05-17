import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Nav';

export default function UsersBase() {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <div className='wrapper pt-5'>
        <Outlet />
      </div>
    </div>
  );
}
