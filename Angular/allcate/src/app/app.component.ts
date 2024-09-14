import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HDFCComponent } from "./hdfc/hdfc.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HDFCComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'allcate';
}
