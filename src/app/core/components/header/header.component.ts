import { Component, EventEmitter, HostListener, OnDestroy, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/stores/user/user.reducer';
import { selectUserDataAndOptions } from 'src/app/stores/user/user.selectors';
import { User } from '../../model';
import { CartService } from 'src/app/features/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  headerActive = false;
  searchActive=false
  cartItemCount=0
  username=""
  searchTermWord=""
  subscription1: Subscription | undefined;
  subscription2: Subscription | undefined;


  @Output() searchData: EventEmitter<string> = new EventEmitter<string>();

  constructor(public router: Router,private store: Store<{ user: UserState }>,private CartService:CartService){}
  userDataAndOptions$ = this.store.select(selectUserDataAndOptions);


  ngOnInit() {
    this.onWindowScroll(); 
    this.subscription1= this.userDataAndOptions$.subscribe(({user}:{user:User|null}) => {
      if(user ){
         this.username=user.username;
      }
   });
   this.subscription2= this.CartService.getCartItemCount().subscribe((count) => {
    this.cartItemCount = count; 
  });
  }

  showSearch(){
    this.searchActive=!this.searchActive;
  }

  
  searchTerm(): void {    
    this.searchData.emit(this.searchTermWord); 
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.headerActive = window.scrollY > 80;
  }

  ngOnDestroy(): void {
    this.subscription1?.unsubscribe()
    this.subscription2?.unsubscribe()

  }
}
