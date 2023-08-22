import { Component, OnInit } from '@angular/core';
import { AnimationBuilder, animate,state, style, trigger, transition } from '@angular/animations';

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
  constructor(private animationBuilder: AnimationBuilder) {}

  ngOnInit(): void {}
}
