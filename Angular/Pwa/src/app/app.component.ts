import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from "./pipes/pipes.component";
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule,PipesComponent],
  
})
export class AppComponent {
  // OnInte(){
  //   console.log("ng onInte");
  // }

  //   ngOnChange(){
  //     console.log("this is ngonchange");
  //   }
  //   ngAfterContentInit(){
  //     console.log("this ngAfterContentInit");
  //   }
  //   ngAfterContantCheck(){
  //     console.log("this is ngAfter Chntaent Check");
  //   }
  //   ngAfterViewInte(){
  //     console.log("this ngAfterviewinte");
  //   }
  //   ngAfterViewChecked(){
  //     console.log("this ngAfterviewchecked");
  //   }
  //   ngDocheck(){
  //     console.log("this dochecked");
  //   }
  //   ngOnDistrogy(){
      
  //   }

// switchToDarkTheme() {
//     document.documentElement.style.setProperty('--main-bg-color', 'black');
//     document.documentElement.style.setProperty('--main-text-color', 'white');
//     document.documentElement.style.setProperty('--btn-bg-color', 'gray');
//     document.documentElement.style.setProperty('--btn-text-color', 'yellow');
//   }

//   switchToLightTheme() {
//     document.documentElement.style.setProperty('--main-bg-color', 'lightblue');
//     document.documentElement.style.setProperty('--main-text-color', 'darkblue');
//     document.documentElement.style.setProperty('--btn-bg-color', 'green');
//     document.documentElement.style.setProperty('--btn-text-color', 'yellow');
//   }

//   value:string="";
//   ngOnInit(){
//     this.value="Hello";
//   }
// title:string="nagaraju";
//   currentDate: Date = new Date();
title:String="Nagaraju";
currentDate: Date = new Date();
hidestates:boolean=false;
hide(){
  this.hidestates=true;
}
show(){
  this.hidestates=false;
}
showfiled:boolean=true;
Name:String="Nagataju";
myStyle: string = "background-color: blue"
myClass:string='funcy-button';
}
