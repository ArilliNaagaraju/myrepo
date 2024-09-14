import { Routes } from '@angular/router';
import { SiginSigUpComponent } from './sigin-sig-up/sigin-sig-up.component';
import { UserDataComponent } from './user-data/user-data.component';


export const routes: Routes = [
    {
        path:'',component:SiginSigUpComponent
    },
    {
        path:'UserData',component:UserDataComponent
    }
];
