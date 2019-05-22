import { Directive, ElementRef } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Directive({
  selector: '[ChangeText]'
})
export class ChangeTextDirective {

  constructor(Element:ElementRef) {

    console.log(Element);
    Element.nativeElement.innerText ="Text is changed by changeText Directive.";
   }

}
