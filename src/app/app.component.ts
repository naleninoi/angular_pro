import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { User } from './auth-form-module/models/auth-form.interface';
import { AuthFormComponent } from './auth-form-module/components/auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;

  rememberMe: boolean = false;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    const component = this.entry.createComponent(AuthFormComponent);
    this.cdr.detectChanges();
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.rememberMe);
  }
}
