import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CreditCardFormComponent } from './components/credit-card-form/credit-card-form.component';
import { CreditCardDirective } from './directives/credit-card.directive';

@NgModule({
  declarations: [
    CreditCardFormComponent,
    CreditCardDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CreditCardFormComponent
  ]
})
export class CreditCardModule {}
