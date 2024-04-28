import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignComponent } from '../sign/sign.component';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [FormsModule, SignComponent,FormsModule,HttpClientModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
 
}