import { Component, Input } from '@angular/core';
import { AppComponent } from "../app.component";
import { UserDataComponent } from "../user-data/user-data.component";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [AppComponent, UserDataComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  
  @Input() childName:any;

  parentName='adhibabu';
}
