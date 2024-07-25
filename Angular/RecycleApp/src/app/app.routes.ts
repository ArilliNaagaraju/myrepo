import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

import { ResePasswordComponent } from './rese-password/rese-password.component';
import { VerifyComponent } from './verify/verify.component';
import { SettingsComponent } from './settings/settings.component';
import { AppComponent } from './app.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { ProductHistoryComponent } from './product-history/product-history.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'forgetpassword', component: ForgetpasswordComponent },
    { path: 'deshboard', component: DeshboardComponent },  // Corrected path
    { path: 'rese-password', component: ResePasswordComponent },
    { path: 'verify', component: VerifyComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'product-history', component:ProductHistoryComponent},
    { path: 'logout',component:LogoutComponent}
];
