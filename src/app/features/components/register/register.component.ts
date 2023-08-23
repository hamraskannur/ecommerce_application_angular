import { Component } from '@angular/core';
import {
  AnimationBuilder,
  animate,
  state,
  style,
  trigger,
  transition,
} from '@angular/animations';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { User } from 'src/app/core/model';
import { updateOptions } from 'src/app/stores/user/user.actions';
import { UserState } from 'src/app/stores/user/user.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

const passwordPattern =
  /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
const namePattern = /^[a-zA-Z ]*[a-zA-Z][a-zA-Z ]*$/;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('slideIn', [
      state('void', style({ transform: 'translatex(-100%)' })),
      transition(':enter', [
        animate('700ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class RegisterComponent {
  submit = false;
  passwordShown = false;
  ErrMessage: string | null = null;
  constructor(
    private store: Store<{ user: UserState }>,
    private animationBuilder: AnimationBuilder,
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {}
  registrationForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.pattern(namePattern)]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(passwordPattern),
        Validators.minLength(6),
      ],
    ],
  });

  get f() {
    return this.registrationForm.controls;
  }
  togglePasswordVisibility(): void {
    this.passwordShown = !this.passwordShown;
  }

  onSubmit() {
    this.submit = true;
    if (this.registrationForm.valid) {
      this.apiService
        .userRegistration(this.registrationForm.value)
        .subscribe(
          ({
            status,
            token,
            user,
            msg,
          }: {
            token: string;
            user: User;
            status: boolean;
            msg: string;
          }) => {
            if (status) {
              console.log(user);
              localStorage.setItem('token', token);
              this.store.dispatch(updateOptions({ user: user }));
              this.router.navigate(['/']);
              this.ErrMessage = null;
            } else {
              this.ErrMessage = msg;
            }
          }
        );
    }
  }
}
