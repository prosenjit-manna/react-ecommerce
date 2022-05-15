import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from '../Components/Loading';
import { routes } from './routes';

const AdminBase = React.lazy(() => import('../Pages/Admin/index'));
const CategoryAction = React.lazy(() => import('../Pages/Admin/Category/Create/Action'));
const CategoryList = React.lazy(() => import('../Pages/Admin/Category/List/CategoryList'));

const NotFound = React.lazy(() => import('../Pages/404/404'));

export default function AppRoutes() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={routes.admin.path} element={<AdminBase />}>
          <Route path={routes.admin.category.create.path} element={<CategoryAction />} />
          <Route path={routes.admin.category.edit.path} element={<CategoryAction />} />
          <Route path={routes.admin.category.list.path} element={<CategoryList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </div>
  );
}
