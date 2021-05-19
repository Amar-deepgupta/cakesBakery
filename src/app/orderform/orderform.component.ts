import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CakeService } from '../cake.service';
import { CanComponentDeactivate} from '../stopguard.service';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent implements CanComponentDeactivate {

  choosecake: any;
  message: any;
  
  
  api = 'https://apifromashu.herokuapp.com/api/';
  constructor(private client:HttpClient,private route:Router,public cs:CakeService, private toast:ToastrService) {
    this.client.post(this.api + 'cakecart', {}).subscribe((res: any) => {
      console.log("response from cakescart", res)
      this.cs.userdetail.cakes = [...res.data];
      this.cs.userdetail.price=(this.cs.userdetail.cakes.reduce((acc:any,e: any) => e.price * e.quantity+acc,0))
      
      
    }, (error) => {
      console.log("error from cakescart", error)
    }
    );
  }
  
  ngOnInit(): void {
  }
  placeorder() {
  //console.log(this.userdetails.cakedetail.reduce((acc:any,e: any) => e.price * e.quantity+acc,0))
     console.log(this.cs.userdetail);
    //  console.log(this.totalprice);
    //this.userdetails = '';
    console.log(this.cs.userdetail);
    this.route.navigate(['checkout/confirm']);
  
  }
  cancel() {
    this.route.navigate(['']);
  }

  canDeactivate() {
    //console.log('i am navigating away');

    // if the editName !== this.user.name
    if (!this.cs.userdetail.name || !this.cs.userdetail.address||!this.cs.userdetail.phone||!this.cs.userdetail.city||!this.cs.userdetail.pincode) {
      return window.confirm("You don't fill all the fields");
    }
    // if (this.userdetails.phone.length !== 10) {
    //   this.toast.warning(this.message,`phone number is wrong  it may be 10 digits`,{timeOut:2000,positionClass:'toast-top-center'})
    //   return false;
    // }
    // if (this.userdetails.pincode.length !== 6) {
    //   this.toast.warning(this.message, 'pincode is wrong', { timeOut: 2000, positionClass: 'toast-top-center' })
    //   return false
    // }
    // console.log(this.userdetails.phone.length);

    return true;
  }
}
