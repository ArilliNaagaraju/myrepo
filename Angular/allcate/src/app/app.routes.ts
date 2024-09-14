import { Routes } from '@angular/router';
import { HDFCComponent } from './hdfc/hdfc.component';
import { ICICComponent } from './icic/icic.component';
import { IndianBankComponent } from './indian-bank/indian-bank.component';
import { AxisBankComponent } from './axis-bank/axis-bank.component';
import { ReviewComponent } from './review/review.component';

export const routes: Routes = [
    {
        path:'hdfc',component:HDFCComponent
    },
    // {
    //     path:'icic',component:ICICComponent
    // },
    // {
    //     path:'indian-bank',component:IndianBankComponent
    // },
    // {
    //     path:'axis-bank',component:AxisBankComponent
    // }
    { path: '', redirectTo: '/hdfc', pathMatch: 'full' },
    {
        path:'review',component:ReviewComponent
    }
];
