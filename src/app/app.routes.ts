import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ServiceLoaderService } from './service/service-loader.service';
import { ComponentLoaderService } from './core/services/component-loader.service';
import { SearchComponentLoaderService } from './deezer/services/search-component-loader.service';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Home Page',
    component: HomeComponent,
  },
  // {
  //   path: 'dyn',
  //   title: 'Dynamic Components',
  //   loadComponent: () =>
  //     import('./dynamicComponents/main/main.component').then(
  //       (m) => m.MainComponent
  //     ),
  // },
  // {
  //   path: 'projection',
  //   title: 'Projection',
  //   loadComponent: () =>
  //     import('./projection/main/main.component').then((m) => m.MainComponent),
  // },
  // {
  //   path: 'projection2',
  //   title: 'Projection2',
  //   providers: [ServiceLoaderService],
  //   loadComponent: () =>
  //     import('./projection2/main/main.component').then((m) => m.MainComponent),
  // },
  // {
  //   path: 'service',
  //   title: 'Service',
  //   providers: [ServiceLoaderService],
  //   loadComponent: () =>
  //     import('./service/main/main.component').then((m) => m.MainComponent),
  // },
  // {
  //   path: 'list',
  //   title: 'list',
  //   providers: [ComponentLoaderService],
  //   loadComponent: () =>
  //     import('./components/list/main/main.component').then(
  //       (m) => m.MainComponent
  //     ),
  // },
  // {
  //   path: 'components-creation',
  //   title: 'components-creation',
  //   providers: [SearchComponentLoaderService],
  //   loadComponent: () =>
  //     import('./deezer/components/components-visualisation/components-visualisation.component').then(
  //       (m) => m.ComponentsVisualisationComponent
  //     ),
  // },
  {
    path: 'deez',
    title: 'deezer',
    loadChildren: () => import('./deezer/deezer.routes'),
  },
  {
    path: '**',
    title: 'You are lost man!',
    loadComponent: () =>
      import('./core/components/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
  // Option 1: Lazy Loading another Routing Config
  // {
  //   path: 'user-details',
  //   title: 'User Details',
  //   loadChildren: () => import('./user-details/user-details.routes'),
  // },
  // {
  //   path: 'mailbox',
  //   title: 'Mailbox',
  //   loadChildren: () => import('./mailbox/mailbox.routes'),
  // },
  // Option 2: Directly Lazy Loading a Standalone Component
];
