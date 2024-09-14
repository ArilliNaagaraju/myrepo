import { Component, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgFor, NgIf, NgStyle, NgSwitch } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgIf,NgFor,NgClass,NgStyle,NgSwitch],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title='demo'
 color: string = 'red';
 isVisible=' false';
 items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; 

 isActive: boolean = true;
 isDisabled: boolean = false;

 isRed: boolean = true;  // You can change this to false to see the effect

 toggleColor() {
   this.isRed = !this.isRed;  // Toggle the value of isRed
 }
}
