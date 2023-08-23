import { Component } from '@angular/core';
import { UserState } from './stores/user/user.reducer';
import { Store } from '@ngrx/store';
import { loadUserData } from './stores/user/user.actions';
import { ApiService } from './features/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';


  constructor(private store: Store<{ user: UserState }>,private ApiService:ApiService ) {}
  ngOnInit(): void {
    this.store.dispatch(loadUserData())
  }
}
