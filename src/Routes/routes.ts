export const routes = {
  home: '/',
  login: '/login',
  logOut: '/logout',
  admin: {
    path: '/admin',
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
    }
  }
};