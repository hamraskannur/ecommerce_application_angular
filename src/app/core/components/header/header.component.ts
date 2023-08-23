import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/stores/user/user.reducer';
import { selectUserDataAndOptions } from 'src/app/stores/user/user.selectors';
import { User } from '../../model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerActive = false;
  searchActive=false
  cartItemCount=0
  username=""
  constructor(public router: Router,private store: Store<{ user: UserState }>){}
  userDataAndOptions$ = this.store.select(selectUserDataAndOptions);


  ngOnInit() {
    this.onWindowScroll(); 
    this.userDataAndOptions$.subscribe(({user}:{user:User|null}) => {
      if(user ){
         this.username=user.username;
      }
   });
  }

  showSearch(){
    this.searchActive=!this.searchActive;
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.headerActive = window.scrollY > 80;
  }

  
}
