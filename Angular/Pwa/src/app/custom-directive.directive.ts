import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  standalone: true
})
export class CustomDirectiveDirective {

  constructor(el:ElementRef) {
    // e1:nativeElement.Style.fountSize=25%;
    el.nativeElement.style.color = 'red';
   }

}
