import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor(
    private element: ElementRef
  ) { }

}
