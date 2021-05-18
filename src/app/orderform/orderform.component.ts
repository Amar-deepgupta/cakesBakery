import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CakeService } from '../cake.service';
import { CanComponentDeactivate} from '../stopguard.service';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent implements CanComponentDeactivate {
  userdetails: any = {}
  choosecake: any;
  totalprice: any = 0;
  
  api = 'https://apifromashu.herokuapp.com/api/';
  constructor(private client:HttpClient,private route:Router,public cs:CakeService) {
    this.client.post(this.api + 'cakecart', {}).subscribe((res: any) => {
      console.log("response from cakescart", res)
      this.userdetails.cakes = [...res.data];
      this.userdetails.price=(this.userdetails.cakes.reduce((acc:any,e: any) => e.price * e.quantity+acc,0))
      
      
    }, (error) => {
      console.log("error from cakescart", error)
    }
    );
  }
  
  ngOnInit(): void {
  }
  placeorder() {
  //console.log(this.userdetails.cakedetail.reduce((acc:any,e: any) => e.price * e.quantity+acc,0))
     console.log(this.userdetails);
    //  console.log(this.totalprice);
    //this.userdetails = '';
    console.log(this.userdetails);
    this.route.navigate(['checkout/confirm']);
  this.client.post(this.api + 'addcakeorder',this.userdetails).subscribe((res: any) => {
    console.log("response from addcakeOrder", res);
     this.cs.confirmDetails = { ...this.userdetails,...this.userdetails.cakes };
     console.log(this.cs.confirmDetails);
  }, (error) => {
    console.log("error from upload api",error)
      }
    );
  }
  cancel() {
    this.route.navigate(['']);
  }

  canDeactivate() {
    console.log('i am navigating away');

    // if the editName !== this.user.name
    if (!this.userdetails.name || !this.userdetails.address) {
      return window.confirm("You don't fill all the fields");
    }

    return true;
  }
}
