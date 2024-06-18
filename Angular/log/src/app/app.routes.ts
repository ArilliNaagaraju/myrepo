import { Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { GetmetComponent } from './getmet/getmet.component';

export const routes: Routes = [
    {
        path:"user-form",component:UserFormComponent
    },
    {
        path:"getmet",component:GetmetComponent
    },
];
