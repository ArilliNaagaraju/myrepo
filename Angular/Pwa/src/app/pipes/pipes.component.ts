import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  PregentDate=new Date();
fullDate: string|undefined;
shortDate: string|undefined;

timeChanges=new Observable((Observer: Observer < string >) => {
  setInterval(()=>Observer.next(new 
    Date().toString()), 1000);
}); 

Currence:any=2000;
}
