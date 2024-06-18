import { Component } from '@angular/core';
import { RouterModule, RouterOutlet} from '@angular/router';
import { SignComponent } from "./sign/sign.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, SignComponent]
})
export class AppComponent {
  title = 'loginpa';
  presentDate = new Date(); 
  date="";
}

