import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { CoreModule } from '../core/core.module';
import { BannerComponent } from './components/home/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/home/card/card.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { OneCartComponent } from './components/cart/one-cart/one-cart.component';
import { EmptyCartComponent } from './components/cart/empty-cart/empty-cart.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BannerComponent,
    CardComponent,
    FooterComponent,
    CartComponent,
    OneCartComponent,
    EmptyCartComponent,
  ],
  imports: [
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    FeaturesRoutingModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FormsModule
  ],
  providers: [],
})
export class FeaturesModule { }
