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
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BannerComponent,
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    BrowserModule,
    FeaturesRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  providers: [],
})
export class FeaturesModule { }
