import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { AUTH_SERVICE_URL} from 'colibrihub-shared-services';
import { LOGIN_URL } from 'colibrihub-shared-components';  

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    { provide: AUTH_SERVICE_URL, useValue: environment.authApiUrl },
    { provide: LOGIN_URL, useValue: environment.loginUrl }
  ]
};
