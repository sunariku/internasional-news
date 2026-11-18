import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Product } from './pages/product/product';
import { NotFound } from './pages/not-found/not-found';
import { Laptop } from './pages/product/laptop/laptop';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'produk',
    pathMatch: 'full',
  },

  {
    path: 'beranda',
    component: Home,
  },

  {
    path: 'tentang-kami',
    component: About,
  },

  {
    path: 'produk',
    component: Product,
    children: [
      {
        path: 'laptop',
        component: Laptop,
      },
    ],
  },

  {
    path: '**',
    component: NotFound,
  },
];
