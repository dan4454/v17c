import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'parent1', loadComponent: () => import('./parent1/parent1.component').then(m=> m.Parent1Component)},
    {path: 'deferandif', loadComponent: () => import('./defer-and-if/defer-and-if.component').then(m=> m.DeferAndIfComponent)},
    {path: 'samplenames', loadComponent: () => import('./sample-names/sample-names.component').then(m =>m.SampleNamesComponent)},
    { path: 'clickbuttonwithcode', loadComponent: () => import('./click-button-with-code/click-button-with-code.component').then(m => m.ClickButtonWithCodeComponent) },
    { path: 'parentnewinput', loadComponent: () => import('./parent-new-input/parent-new-input.component').then(m => m.ParentNewInputComponent) },
    { path: 'parent3', loadComponent: () => import('./parent3/parent3.component').then(m => m.Parent3Component) },
    { path: 'sendImage', loadComponent: () => import('./send-image/send-image.component').then(m => m.SendImageComponent) },

];
