import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Components/AdminNav';
import Sidebar from './Components/Sidebar/Sidebar';

export default function AdminBase() {
  return <div className='backend'>
     <header>
      <Sidebar />
      <Nav />
     </header>

     <main style={{ marginTop: '58px' }}>
      <Outlet />
    </main>
  </div>;
}
