import {
  Component,
  Output,
  EventEmitter,
  AfterContentInit,
  ContentChild,
  AfterViewInit,
  ViewChild, ChangeDetectorRef, ElementRef
} from '@angular/core';

import { User } from '../../models/auth-form.interface';
import { AuthRememberComponent } from '../../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../../auth-message/auth-message.component';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styles: [
    `
      .email {
        border-color: #9f72e6;
      }
    `
  ]
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage = false;

  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;

  @ViewChild('email') email: ElementRef;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private cd: ChangeDetectorRef) {
  }

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.checked.subscribe(checked => this.showMessage = checked)
    }
  }

  ngAfterViewInit(): void {
    this.email.nativeElement.setAttribute('placeholder', 'Enter your email address');
    this.email.nativeElement.classList.add('email');
    this.email.nativeElement.focus();
    console.log(this.email.nativeElement);
    if (this.message) {
      this.message.days = 30;
      this.cd.detectChanges();
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
