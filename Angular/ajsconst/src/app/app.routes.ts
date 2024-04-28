import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccessComponent } from './access/access.component';
import { LoginComponent } from './login/login.component';
import { SigupComponent } from './sigup/sigup.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'access', component: AccessComponent
    },
    {
        path:'login', component:LoginComponent
    },
    {
        path:'sigup',component:SigupComponent
    },
    {
        path:'contact', component:ContactComponent
    },
];

