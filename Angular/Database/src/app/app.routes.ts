import { Routes } from '@angular/router';
import { WertComponent } from './wert/wert.component';
import { RoughtComponent } from './rought/rought.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
    {
        path:"wert", component:WertComponent
    },
    {
        path:"rought", component:RoughtComponent
    },
    { 
        path: '',title:"LogIn Page", component: LoginComponent
    },
    { 
        path: 'DashBoad',title:"DashBoard", component: SidebarComponent 
    },

];
