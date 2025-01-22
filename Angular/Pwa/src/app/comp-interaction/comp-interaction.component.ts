import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { EncapsulationComponent } from "../encapsulation/encapsulation.component";

@Component({
  selector: 'app-comp-interaction',
  standalone: true,
  templateUrl: './comp-interaction.component.html',
  styleUrl: './comp-interaction.component.css',
})
export class CompInteractionComponent {
 @Input() parentcomponet:String="";
 @Output() childEvent = new EventEmitter<any>(); // Define an Output event

 sendDataToParent() {
   const data = 'Hello from Child!';
   this.childEvent.emit(data); // Emit data to the parent
 }

 counter=0;
 inc(){
  this.counter++;
 }
 dec(){
  this.counter--;
 }
}
