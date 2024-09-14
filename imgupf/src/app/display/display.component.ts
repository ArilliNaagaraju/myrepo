import { Component } from '@angular/core';
import { ImageService } from '../image.service';
import { NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [NgIf],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

}
