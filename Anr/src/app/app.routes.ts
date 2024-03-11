import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContComponent } from './cont/cont.component';
import { NotfoundComponent } from './notfound/notfound.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'cont', component: ContComponent },
  {path:'**',component:NotfoundComponent}
];
