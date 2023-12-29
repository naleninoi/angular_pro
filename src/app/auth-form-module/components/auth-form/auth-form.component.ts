import {
  Component,
  Output,
  EventEmitter,
  AfterContentInit,
  ContentChild,
  AfterViewInit,
  ViewChild
} from '@angular/core';

import { User } from '../../models/auth-form.interface';
import { AuthRememberComponent } from '../../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../../auth-message/auth-message.component';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage = false;

  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.checked.subscribe(checked => this.showMessage = checked)
    }
  }

  ngAfterViewInit(): void {
    if (this.message) {
      this.message.days = 30;
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
