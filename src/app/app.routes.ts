import { NoPreloading, Routes } from '@angular/router';
import { Parent1Component } from './parent1/parent1.component';
import { DeferAndIfComponent } from './defer-and-if/defer-and-if.component';
import { ParentNewInputComponent } from './parent-new-input/parent-new-input.component';

export const routes: Routes = [
  {
    path: 'parent1',
    loadComponent: () =>
      import('./parent1/parent1.component').then((m) => Parent1Component),
  },

  {
    path: 'deferandif',
    loadComponent: () =>
      import('./defer-and-if/defer-and-if.component').then(
        (m) => DeferAndIfComponent
      ),
  },
  {
    path: 'newinput',
    loadComponent: () =>
      import('./parent-new-input/parent-new-input.component').then(
        (m) => ParentNewInputComponent
      ),
  },

  
  
];
