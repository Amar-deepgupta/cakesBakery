import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { CakeformComponent } from './cakeform/cakeform.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { CakeDetailsComponent } from './cake-details/cake-details.component';
import { BucketComponent} from './bucket/bucket.component'
import { OrderformComponent } from './orderform/orderform.component';
import { AdminComponent } from './admin/admin.component';
import { EditfromComponent } from './editfrom/editfrom.component';
import { MyodersComponent } from './myoders/myoders.component';
import { SummaryComponent } from './summary/summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmComponent } from './confirm/confirm.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addcake', component: CakeformComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot', component: ForgetpasswordComponent },
  { path: 'search', component: SearchpageComponent },
  { path: 'cake/:id', component: CakeDetailsComponent },
  { path: 'cart', component: BucketComponent },
  { path:'cakeorders',component:MyodersComponent},
  { path: 'order', component: OrderformComponent },
   //{path:'summary',component:SummaryComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path: 'checkout', component: CheckoutComponent, children: [
      {
        path:'',component:SummaryComponent
      },
      { path: 'order', component: OrderformComponent },
      {
      path:'confirm',component:ConfirmComponent
    }]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

