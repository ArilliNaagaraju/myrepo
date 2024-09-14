import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustome]',
  standalone: true
})
export class CustomeDirective {

  constructor(e:ElementRef) {
    console.log(e);
    // e.nativeElement.style.border=" 2px solid red"
   }

}
