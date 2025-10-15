import { Routes } from '@angular/router';
import { MultiplierForm } from './features/components/multiplier-form/multiplier-form';
import { Home } from './features/components/home/home';
import { NivelForm } from './features/components/nivel-form/nivel-form';

export const routes: Routes = [
    { path: '', component: Home, pathMatch: 'full' },
    {path: 'formulario-multiplicador', component: MultiplierForm},
    { path: '**', redirectTo: 'home' },

    {path: '', component: Home, pathMatch: 'full'},
    {path: 'formulario-nivel', component: NivelForm},
    { path: '**', redirectTo: 'home' }

    
];


