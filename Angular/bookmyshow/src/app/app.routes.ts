import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListyourshowComponent } from './listyourshow/listyourshow.component';
import { TeluguComponent } from './telugu/telugu.component';

export const routes: Routes = [
    {
        path:"", component:SidebarComponent
    },
    {
        path:"listyourshow",component:ListyourshowComponent
    },
    {
        path:"telugu",component:TeluguComponent
    }
];
