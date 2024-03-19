import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule], // Import only necessary modules
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title:any
   expenseEntry:any; 
   constructor() { } 
   ngOnInit() { 
      this.title = "Expense Entry"; 
      this.expenseEntry = { 
         id: 1, 
         item: "Pizza", 
         amount: 21, 
         category: "Food", 
         location: "Zomato", 
         spendOn: new Date(2020, 6, 1, 10, 10, 10), createdOn: new Date(2020, 6, 1, 10, 10, 10), 
      }; 
   } 
}
