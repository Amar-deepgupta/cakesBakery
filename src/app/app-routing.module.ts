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
import { GuardService } from './guard.service';
import { StopguardService } from './stopguard.service';
import { AddcakeComponent } from './addcake/addcake.component';
import { CakeResolverService } from './cake-resolver.service';


const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'login', component: LoginComponent, canActivate: [GuardService] },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot', component: ForgetpasswordComponent },
  { path: 'search', component: SearchpageComponent },
  { path: 'cake/:id', component: CakeDetailsComponent },
  { path: 'cart', component: BucketComponent, canActivate: [GuardService], resolve: [ CakeResolverService ]},
  { path: 'cakeorders', component: MyodersComponent, canActivate: [GuardService] },
  { path: 'order', component: OrderformComponent},
 
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path: 'checkout', component: CheckoutComponent, children: [
      {
        path:'',component:SummaryComponent
      },
      { path: 'order', component: OrderformComponent,canDeactivate:[StopguardService],canActivate:[GuardService]  },
      {
      path:'confirm',component:ConfirmComponent,canActivate:[GuardService]
    }]
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[CakeResolverService]
})
export class AppRoutingModule {}

