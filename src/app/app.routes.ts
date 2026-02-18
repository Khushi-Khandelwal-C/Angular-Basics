import { Routes } from '@angular/router';
import { Employee } from './employee/employee';
import { Department } from './department/department';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path : "",redirectTo: '',pathMatch: 'full'},
    {path : 'employee',component : Employee},
    {path : 'department',component : Department},
    {path : "**",component : PageNotFound}

];
