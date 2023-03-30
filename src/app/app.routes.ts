import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'mariana',
    loadComponent: () => import('./mariana/mariana.page').then( m => m.MarianaPage)
  },
  {
    path: 'vitao',
    loadComponent: () => import('./vitao/vitao.page').then( m => m.VitaoPage)
  },
  {
    path: 'duda',
    loadComponent: () => import('./duda/duda.page').then( m => m.DudaPage)
  },
  {
    path: 'pepe',
    loadComponent: () => import('./pepe/pepe.page').then( m => m.PepePage)
  },
  {
    path: 'sasa',
    loadComponent: () => import('./sasa/sasa.page').then( m => m.SasaPage)
  },
  {
    path: 'marinao',
    loadComponent: () => import('./marinao/marinao.page').then( m => m.MarinaoPage)
  },
];
