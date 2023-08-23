import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { RouterModule } from '@angular/router';
import { UserStateModule } from './stores/state.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/token-intercepter.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    FeaturesModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserStateModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
