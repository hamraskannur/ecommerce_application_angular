import { Component } from '@angular/core';
import { AnimationBuilder, animate,state, style, trigger, transition } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('slideIn', [
      state('void', style({ transform: 'translatex(-100%)' })),
      transition(':enter', [animate('700ms ease-out', style({ transform: 'translateX(0)' }))]),
    ]),
  ],
})
export class RegisterComponent {
  constructor(private animationBuilder: AnimationBuilder) {}

}
