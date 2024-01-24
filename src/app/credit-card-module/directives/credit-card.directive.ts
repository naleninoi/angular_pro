import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor(
    private element: ElementRef
  ) { }

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substring(0, 16);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      const part = trimmed.substring(i, 4)
      numbers.push(part);
    }

    input.value = numbers.join(' ');
  }

}