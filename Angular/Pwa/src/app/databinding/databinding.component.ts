import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  // showData($event:any){
  //   console.log("button clicked !");
  //   if($event){
  //     console.log($event.target);
  //     console.log($event.target.Value);
  //   }

  // }
  shwData(){
    console.log("this databinding");
  }
  Name:String="Nagaraju";

  myClass='red';
  applyMyClass=true;
  username:string="";
  myAction(){
    alert('iam action function for click event');
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.shiftKey && event.key === 'T') {
      alert('Shift + T');
    }
  }

  registerAccount(e: Event) {
    e.preventDefault();
    alert('The form submission is prevented');
 }
 color:string="red";
}
