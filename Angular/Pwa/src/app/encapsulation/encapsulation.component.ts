import { Component, Input, Output, output, ViewChild, viewChild } from '@angular/core';
import { CompInteractionComponent } from "../comp-interaction/comp-interaction.component";
import { count } from 'console';

@Component({
  selector: 'app-encapsulation',
  standalone: true,
  imports: [CompInteractionComponent],
  templateUrl: './encapsulation.component.html',
  styleUrl: './encapsulation.component.css'
})
export class EncapsulationComponent {
  messageFromParent:String="hello child component";
  messageFromChild: string = ''; // To store data received from the child

  receiveData(Data: string) {
    this.messageFromChild = Data; // Handle the data sent by the child
  }
  @ViewChild(CompInteractionComponent) child!: CompInteractionComponent;
  increment() {
    this.child.inc();
  }

  decrement() {
    this.child.dec();
  }
  counter() { return 0; }
  ngAfterViewInit() {
    setTimeout(() => this.counter = () => this.child.counter,0);
 }
 
}
