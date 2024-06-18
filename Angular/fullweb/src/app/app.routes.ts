import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigupComponent } from './sigup/sigup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GetputComponent } from './getput/getput.component';

export const routes: Routes = [
    {
        path:"",component:HomeComponent
    },
    {
        path:"login",component:LoginComponent
    },
    {
        path:"sigup",component:SigupComponent
    },
    {
        path:"about",component:AboutComponent
    },
    {
        path:"getput",component:GetputComponent
    }
];
