import {
  AfterViewInit, ChangeDetectorRef,
  Component, ComponentRef,
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
  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;

  rememberMe: boolean = false;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    this.entry.createComponent(AuthFormComponent);
    this.component = this.entry.createComponent(AuthFormComponent, {index: 0});
    this.component.instance.title = 'Create account';
    this.component.instance.submitted.subscribe(this.loginUser);
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

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }
}
