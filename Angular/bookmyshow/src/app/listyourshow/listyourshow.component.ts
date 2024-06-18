import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../movies.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-listyourshow',
  standalone: true,
  imports: [FormsModule,NgClass,NgIf],
  templateUrl: './listyourshow.component.html',
  styleUrl: './listyourshow.component.css'
})
export class ListyourshowComponent {
  showButtons: boolean = false;
  showGenres: boolean = false;
  showFormats: boolean = false;
  showteluge:boolean =false;
  selectedLanguage: string = '';
teluge: any;

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
