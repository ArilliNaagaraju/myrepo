import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LogComponent } from './log/log.component';

export const routes: Routes = [
    {path:'',component:HeaderComponent},
    {path:'log',component:LogComponent}
];
