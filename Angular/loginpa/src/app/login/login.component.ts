import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignComponent } from "../sign/sign.component";
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [FormsModule, SignComponent,FormsModule,HttpClientModule]
})
export class LoginComponent {

}
