import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'parent1', loadComponent: () => import('./parent1/parent1.component').then(m=> m.Parent1Component)},
    {path: 'deferandif', loadComponent: () => import('./defer-and-if/defer-and-if.component').then(m=> m.DeferAndIfComponent)},
    {path: 'samplenames', loadComponent: () => import('./sample-names/sample-names.component').then(m =>m.SampleNamesComponent)},

    
];
