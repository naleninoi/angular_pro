import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthFormModule } from './auth-form-module/auth-form.module';
import { CreditCardModule } from './credit-card-module/credit-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthFormModule,
    CreditCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
