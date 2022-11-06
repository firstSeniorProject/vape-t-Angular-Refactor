import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { OneProductComponent } from './components/one-product/one-product.component';

import { LoginComponent} from './components/login/login.component';
import { SignupComponent} from './components/signup/signup.component';
import { ProfileComponent} from './components/profile/profile.component';
import { AllProductComponent } from './components/all-product/all-product.component';

const routes: Routes = [
 // {path: '', redirecTo:'login', pathMatch: 'full'},
  {path:'',component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'profile', component:ProfileComponent},
  {path:"test",component:OneProductComponent},
  {path:"product",component:AllProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
