import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SerivesService } from './serives.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WertComponent } from './wert/wert.component';
import { RoughtComponent } from './rought/rought.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgStyle,HttpClientModule,WertComponent,RoughtComponent,RouterLink,LoginComponent,SidebarComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Database';
  Name:String="Hi this Nagaraju";
  userName="Root";//------>Ngmodel

  myCSSClass = "red"; //-------->class binding
  applyCSSClass = true; 

  myColor = 'brown';//------>style binding

  isLogIn : boolean = true;//------>if else cond
  item=["AA","BB","CC","DD","EE"];//----->for case
  color="red";//------>Switch case

$event: any;
  http: any;
  showData($event: any){ 
    console.log("button is clicked!");
    if($event) { 
      console.log($event); 
    } 
} 

// constructor(public ts:SerivesService){}//------>serives and depanding ingection
// mobiles=this.ts.mobiles


// constructor(private http:HttpClient){

// }
// getdata(){
//   this.http.get('https://fakestoreapi.com/products/categories').subscribe((data: any)=>{
//     console.log(data);
//   })
// }

//constructor(private http: HttpClient) {}

//   submitForm() {
//     this.http.post<any>('http://localhost:3006/sign', this.formData)
//       .subscribe(
//         (response) => {
//           console.log('Response from server:', response);
//           // Handle response as needed
//         },
//         (error) => {
//           console.error('Error:', error);
//           // Handle error as needed
//         });

}

