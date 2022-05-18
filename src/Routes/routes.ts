export const routes = {
  home: '/',
  login: '/login',
  logOut: '/logout',
  signUp: '/signup',
  cart: '/cart',
  checkout: '/checkout',
  forgotPassword: '/password-reset',
  product: {
    list: {
      path: '/products',
    },
    details: {
      path: '/product/:name',
      build: (name: string) => {
        return `/product/${name}`;
      }
    },
  },
  orderList: {
    list: {
      path: '/orders',
    },
    details: {
      path: '/orders/:id',
      build: (id: string) => {
        return `/orders/${id}`;
      }
    },
  },
  addressDetails: {
    path: '/address',
    add: {
      path: '/address/add-address',
    },
    edit: {
      path: '/address/edit-address',
    },
  },
  accountDetails: '/account-details',
  admin: {
    path: '/admin',
    profile: {
      path: '/admin/profile',
    },
    category: {
      create: {
        path: 'category/create',
        fullPath: '/admin/category/create'
      },
      edit: {
        path: 'category/edit/:id',
        build: (id: string) => {
          return `/admin/category/edit/${id}`;
        }
      },
      list: {
        path: 'category/list',
      }
    },
    product: {
      list: {
        path: 'product/list',
      },
      create: {
        path: 'product/create',
        fullPath: '/admin/product/create',
      },
      edit: {
        path: 'product/edit/:id',
        build: (id: string) => {
          return `/admin/product/edit/${id}`;
        }
      },
    },
    order: {
      list: {
        path: 'order/list',
      },
      details: {
        path: 'order/:id',
        build: (id: string) => {
          return `/admin/order/${id}`;
        }
      },
    },
    customer: {
      list: {
        path: 'customer/list'
      },
      create: {
        path: 'customer/create',
        fullPath: '/admin/customer/create',
      },
      edit: {
        path: 'customer/edit/:id',
        build: (id: string) => {
          return `/admin/customer/edit/${id}`;
        }
      },
    }
  }
};