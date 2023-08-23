import { Component, OnInit } from '@angular/core';
import { AnimationBuilder, animate,state, style, trigger, transition } from '@angular/animations';
import { FormBuilder, Validators } from '@angular/forms';
import { UserState } from 'src/app/stores/user/user.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { updateOptions } from 'src/app/stores/user/user.actions';
import { User } from 'src/app/core/model';

const passwordPattern =/^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('slideIn', [
      state('void', style({ transform: 'translatex(-100%)' })),
      transition(':enter', [animate('700ms ease-out', style({ transform: 'translateX(0)' }))]),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  ErrMessage: string | null = null;
  passwordShown = false;
  submit=false
  constructor(
    private store: Store<{ user: UserState }>,
    private animationBuilder: AnimationBuilder,
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {}

  loginForm=this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(passwordPattern),
        Validators.minLength(6),
      ],
    ],
  })
  get f() {
    return this.loginForm.controls;
  }
  togglePasswordVisibility(): void {
    this.passwordShown = !this.passwordShown;
  }
  
  onSubmit() {
    this.submit = true;
    if (this.loginForm.valid) {
      this.apiService
        .userLogin(this.loginForm.value)
        .subscribe(({status,token,user,message}: {token: string;user: User;status: boolean;message: string;}) => {
            if (status) {
              localStorage.setItem('token', token);
              this.store.dispatch(updateOptions({ user: user }));
              this.router.navigate(['/']);
              this.ErrMessage = null;
            } else {
              this.ErrMessage = message;
            }
          }
        );
    }
  }
  ngOnInit(): void {}
}
