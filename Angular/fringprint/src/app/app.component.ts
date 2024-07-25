import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FingerprintComponent } from "./fingerprint/fingerprint.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FingerprintComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fringprint';
}
