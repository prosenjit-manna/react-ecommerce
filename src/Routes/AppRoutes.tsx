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
const CustomerList = React.lazy(() => import('../Pages/Admin/Customer/List/CustomerList'));
const CustomerAction = React.lazy(() => import('../Pages/Admin/Customer/Create/Action'));

const UserBase = React.lazy(() => import('../Pages/index'));
const UserLogin = React.lazy(() => import('../Pages/LogIn/Login'));
const UserSignUp = React.lazy(() => import('../Pages/SignUp/SignUp'));
const ProductLists = React.lazy(() => import('../Pages/Product/ProductList'));
const ProductDetails = React.lazy(() => import('../Pages/Product/ProductDetails'));

const OrderList = React.lazy(() => import('../Pages/Account/MyOrder'));
const OrderDetails = React.lazy(() => import('../Pages/Account/OrderDetails'));
const AddressDetails = React.lazy(() => import('../Pages/Account/Address'));
const AddressAction = React.lazy(() => import('../Pages/Account/AddressAction'));
const AccountDetails = React.lazy(() => import('../Pages/Account/AccountDetails'));


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
            <Route path={routes.admin.customer.list.path} element={<CustomerList />} />
            <Route path={routes.admin.customer.edit.path} element={<CustomerAction />} />
            <Route path={routes.admin.customer.create.path} element={<CustomerAction />} />

            <Route path="*" element={<NotFound />} />
          </Route>

          <Route element={<UserBase />}>
            <Route path={routes.login} element={<UserLogin />} />
            <Route path={routes.signUp} element={<UserSignUp />} />
            <Route path={routes.product.list.path} element={<ProductLists />} />
            <Route path={routes.product.details.path} element={<ProductDetails />} />
            <Route path={routes.orderList.list.path} element={<OrderList />} />
            <Route path={routes.orderList.details.path} element={<OrderDetails />} />
            <Route path={routes.addressDetails.path} element={<AddressDetails />} />
            <Route path={routes.addressDetails.add.path} element={<AddressAction />} />
            <Route path={routes.addressDetails.edit.path} element={<AddressAction />} />
            <Route path={routes.accountDetails} element={<AccountDetails />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
