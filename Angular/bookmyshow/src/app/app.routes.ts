import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListyourshowComponent } from './listyourshow/listyourshow.component';
import { TeluguComponent } from './telugu/telugu.component';
import { BookinngComponent } from './bookinng/bookinng.component';
import { BookmyshowComponent } from './bookmyshow/bookmyshow.component';
import { SiginComponent } from './sigin/sigin.component';

export const routes: Routes = [
    {
        path:"", component:SidebarComponent
    },
    {
        path:"listyourshow",component:ListyourshowComponent
    },
    {
        path:"telugu",component:TeluguComponent
    },

    {
        path:"booking",component:BookinngComponent
    },
    {
        path:"bookmyshow/:id",component:BookmyshowComponent
    },
    {
        path:"sigin",component:SiginComponent
    }
];
