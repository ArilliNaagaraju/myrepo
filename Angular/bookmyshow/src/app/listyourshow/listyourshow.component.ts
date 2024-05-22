import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listyourshow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listyourshow.component.html',
  styleUrl: './listyourshow.component.css'
})
export class ListyourshowComponent {
  showButtons: boolean = false;
  showGenres: boolean = false;
  showFormats: boolean = false;

  toggleButtons() {
    this.showButtons = !this.showButtons;
  }

  toggleGenres() {
    this.showGenres = !this.showGenres;
  }

  toggleFormats() {
    this.showFormats = !this.showFormats;
  }
}
