import { ApplicationConfig } from '@angular/core';
import { NoPreloading, PreloadingStrategy, provideRouter, withPreloading, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
  
};
