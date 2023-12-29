import { Component, Output, EventEmitter, AfterContentInit, ContentChild } from '@angular/core';

import { User } from './auth-form.interface';
import { AuthRememberComponent } from './auth-remember.component';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
})
export class AuthFormComponent implements AfterContentInit {

  showMessage = false;

  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.checked.subscribe(checked => this.showMessage = checked)
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
