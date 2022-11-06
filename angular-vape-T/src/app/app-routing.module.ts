import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';

<<<<<<< HEAD
const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
 path:'cart',
 component: CartComponent 
},
{
  path: '',redirectTo: 'home',pathMatch:'full'
}

=======
import { HomeComponent } from './components/home/home.component';
import { OneProductComponent } from './components/one-product/one-product.component';

import { LoginComponent} from './components/login/login.component';
import { SignupComponent} from './components/signup/signup.component';
import { AllProductComponent } from './components/all-product/all-product.component';

const routes: Routes = [
 // {path: '', redirecTo:'login', pathMatch: 'full'},
  {path:'',component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path:"test",component:OneProductComponent},
  {path:"product",component:AllProductComponent}
>>>>>>> 0b04d90a1529d2977b6f8a6165d93b4993bb3d61
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
