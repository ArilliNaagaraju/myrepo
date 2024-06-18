import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-getmet',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './getmet.component.html',
  styleUrl: './getmet.component.css'
})
export class GetmetComponent {
 
}

