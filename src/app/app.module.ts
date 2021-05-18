import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CakeformComponent } from './cakeform/cakeform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { CakecardComponent } from './cakecard/cakecard.component';
import { SearchComponent } from './search/search.component';
import { SearchingDirective } from './searching.directive';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HoveringDirective } from './hovering.directive';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { CakeDetailsComponent } from './cake-details/cake-details.component';
import { HttpClientModule, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ HttpInterceptor } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { BucketComponent } from './bucket/bucket.component';
import { AutheninterceptorService } from './autheninterceptor.service';
import { OrderformComponent } from './orderform/orderform.component';
import { AdminComponent } from './admin/admin.component';
import { EditfromComponent } from './editfrom/editfrom.component';
import { MyodersComponent } from './myoders/myoders.component';
import { SummaryComponent } from './summary/summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { AddressComponent } from './address/address.component';
import { GuardService } from './guard.service';
import { StopguardService } from './stopguard.service';
import { AddcakeComponent } from './addcake/addcake.component';


@NgModule({
  declarations: [
    AppComponent,
    CakeformComponent,
    NavbarComponent,
    SliderComponent,
    CakecardComponent,
    SearchComponent,
    SearchingDirective,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
    HoveringDirective,
    SearchpageComponent,
    CakeDetailsComponent,
    BucketComponent,
    OrderformComponent,
    AdminComponent,
    EditfromComponent,
    MyodersComponent,
    SummaryComponent,
    CheckoutComponent,
    ConfirmComponent,
    AddressComponent,
    AddcakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AutheninterceptorService,
    multi:true
  },GuardService,StopguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
