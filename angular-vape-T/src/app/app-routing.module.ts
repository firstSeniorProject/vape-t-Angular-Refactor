import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OneProductComponent } from './components/one-product/one-product.component';

import { LoginComponent} from './components/login/login.component';
import { SignupComponent} from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
 // {path: '', redirecTo:'login', pathMatch: 'full'},

  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'login',
     component:LoginComponent
    },
  {
    path: 'signup', 
    component:SignupComponent
  },
  {path:"test",
  component:OneProductComponent
},
{
  path:'about',
  component: AboutComponent
},
{
  path: 'contact',
  component:ContactComponent
},
{
  path:'cart',
  component: CartComponent

},
{
  path: '',redirectTo: 'home',pathMatch:'full'
}
,

  {path:'',component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path:"test",component:OneProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
