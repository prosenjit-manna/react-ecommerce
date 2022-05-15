import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from '../Components/Loading';
import { routes } from './routes';

const AdminBase = React.lazy(() => import('../Pages/Admin/index'));
const CategoryAction = React.lazy(() => import('../Pages/Admin/Category/Create/Action'));
const CategoryList = React.lazy(() => import('../Pages/Admin/Category/List/CategoryList'));
const ProductAction = React.lazy(() => import('../Pages/Admin/Product/Action/ProductAction'));
const AdminProductList = React.lazy(() => import('../Pages/Admin/Product/List/ProductList'));
const AdminOrderList = React.lazy(() => import('../Pages/Admin/Order/List/OrderList'));
const AdminOrderDetails = React.lazy(() => import('../Pages/Admin/Order/Details/OrderDetails'));


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
          <Route path={routes.admin.product.create.path} element={<ProductAction />} />
          <Route path={routes.admin.product.edit.path} element={<ProductAction />} />
          <Route path={routes.admin.product.list.path} element={<AdminProductList />} />
          <Route path={routes.admin.order.list.path} element={<AdminOrderList />} />
          <Route path={routes.admin.order.details.path} element={<AdminOrderDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </div>
  );
}
