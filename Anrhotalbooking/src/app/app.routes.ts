import { Routes } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { SinComponent } from './sin/sin.component';

export const routes: Routes = [
    {path: "head",component:HeadComponent},
    {path:"sin",component:SinComponent}
];
