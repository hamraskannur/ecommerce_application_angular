import { Routes ,RouterModule} from "@angular/router";
import { NgModule } from '@angular/core';

import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { userGuard } from "../core/authentication/user.guard";
import { UserLoginGuard } from "../core/authentication/userLogin.guard";
import { CartComponent } from "./components/cart/cart.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ContactComponent } from "./components/contact/contact.component";



const routes:Routes=[
    {path:"",redirectTo:"/home",pathMatch: 'full' },
    {path:"home",component:HomeComponent ,canActivate:[userGuard]},
    { path: 'home/:category', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    {path:"cart",component:CartComponent ,canActivate:[userGuard]},
    { path: 'productDetails/:id', component:ProductDetailsComponent},
    { path: 'login',component:LoginComponent,canActivate:[UserLoginGuard]},
    {path:"register",component:RegisterComponent,canActivate:[UserLoginGuard]},

]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class FeaturesRoutingModule { }


