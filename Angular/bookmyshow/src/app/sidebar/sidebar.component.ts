import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  scrollLeft(): void {
    document.querySelector('.images')?.scrollBy({
      left: -200, // Adjust the value as needed
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    document.querySelector('.images')?.scrollBy({
      left: 200, // Adjust the value as needed
      behavior: 'smooth'
    });
  }
}
