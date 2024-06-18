import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title!: string; 
   expenseEntry: any; 
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
   clickcount=0;
   clickme(){
      return this.clickcount++
   }
   appName = "NAGARAJU";
   myCSSClass = "red"; 
   applyCSSClass = false; 
   name="nagaraju";


 