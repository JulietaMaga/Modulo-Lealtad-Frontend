import { Routes } from '@angular/router';
import { MultiplierForm } from './features/components/multiplier-form/multiplier-form';
import { Home } from './features/components/home/home';
import { NivelForm } from './features/components/nivel-form/nivel-form';
import { Logout } from './features/components/logout/logout';
import { isLoggedInGuard } from 'colibrihub-shared-components';

export const routes: Routes = [
    { path: '', component: Home, pathMatch: 'full' },
    { path: 'formulario-multiplicador', component: MultiplierForm },
    { path: 'formulario-nivel', component: NivelForm },
    // Wildcard should redirect to the root (Home) which exists as ''.
    { path: 'logout', component: Logout, canMatch: [isLoggedInGuard], title:"Cerrar Sesión" },
    { path: '**', redirectTo: '' },
];


